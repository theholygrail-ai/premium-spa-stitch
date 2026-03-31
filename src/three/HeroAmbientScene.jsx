import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function HeroAmbientScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mountNode = mountRef.current
    if (!mountNode) return undefined

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lowCap = window.matchMedia('(max-width: 768px)').matches
    if (prefersReduced || lowCap) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, mountNode.clientWidth / mountNode.clientHeight, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight)
    mountNode.appendChild(renderer.domElement)

    const geo = new THREE.IcosahedronGeometry(1.25, 1)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x7e97ff,
      emissive: 0x2b3a77,
      metalness: 0.25,
      roughness: 0.45,
      wireframe: false,
    })
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)

    const light1 = new THREE.PointLight(0x9fb1ff, 1.1)
    light1.position.set(2, 2, 3)
    scene.add(light1)
    const light2 = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(light2)

    let animationFrame
    let running = true
    let pointerX = 0
    let pointerY = 0

    const onPointerMove = (event) => {
      const rect = mountNode.getBoundingClientRect()
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.25
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.25
    }

    const onResize = () => {
      if (!mountNode) return
      camera.aspect = mountNode.clientWidth / mountNode.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountNode.clientWidth, mountNode.clientHeight)
    }

    const onVisibility = () => {
      running = !document.hidden
      if (running) animate()
    }

    function animate() {
      if (!running) return
      mesh.rotation.y += 0.004
      mesh.rotation.x += 0.002
      mesh.position.x += (pointerX - mesh.position.x) * 0.03
      mesh.position.y += (-pointerY - mesh.position.y) * 0.03
      renderer.render(scene, camera)
      animationFrame = requestAnimationFrame(animate)
    }

    mountNode.addEventListener('pointermove', onPointerMove)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    animate()

    return () => {
      running = false
      cancelAnimationFrame(animationFrame)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
      mountNode.removeEventListener('pointermove', onPointerMove)
      if (mountNode.contains(renderer.domElement)) mountNode.removeChild(renderer.domElement)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
    }
  }, [])

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />
}

export default HeroAmbientScene
