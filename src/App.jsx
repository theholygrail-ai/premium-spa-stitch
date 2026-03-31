import { Navigate, Route, Routes } from 'react-router-dom'
import StitchFrame from './components/StitchFrame'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StitchFrame src="/stitch/home.html" title="Home" />} />
      <Route path="/programs" element={<StitchFrame src="/stitch/home.html" title="Programs" />} />
      <Route path="/results" element={<StitchFrame src="/stitch/home.html" title="Results" />} />
      <Route path="/apply" element={<StitchFrame src="/stitch/apply.html" title="Apply" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
