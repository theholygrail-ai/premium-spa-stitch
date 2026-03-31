import { Navigate, Route, Routes } from 'react-router-dom'
import StitchFrame from './components/StitchFrame'

function App() {
  return (
    <Routes>
      <Route path="/programs" element={<StitchFrame key="programs" src="/stitch/home.html#programs" title="Programs" />} />
      <Route path="/results" element={<StitchFrame key="results" src="/stitch/home.html#results" title="Results" />} />
      <Route path="/apply" element={<StitchFrame key="apply" src="/stitch/apply.html" title="Apply" />} />
      <Route path="/" element={<StitchFrame key="home" src="/stitch/home.html" title="Home" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
