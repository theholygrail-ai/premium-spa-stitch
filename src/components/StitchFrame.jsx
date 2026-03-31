function StitchFrame({ src, title }) {
  return (
    <iframe
      title={title}
      src={src}
      style={{
        width: '100%',
        height: '100vh',
        border: 0,
        display: 'block',
        background: '#0e0e0e',
      }}
    />
  )
}

export default StitchFrame
