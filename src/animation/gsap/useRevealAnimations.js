import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useRevealAnimations(scopeRef) {
  useLayoutEffect(() => {
    if (!scopeRef.current) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 769px)', () => {
        gsap.from('.hero-reveal > *', {
          opacity: 0,
          y: 36,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        })
      })

      mm.add('(max-width: 768px)', () => {
        gsap.from('.hero-reveal > *', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
        })
      })

      gsap.utils.toArray('.reveal-on-scroll').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 34,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
          },
        })
      })

      gsap.from('.stagger-cards .card', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stagger-cards',
          start: 'top 78%',
        },
      })
    }, scopeRef)

    return () => ctx.revert()
  }, [scopeRef])
}
