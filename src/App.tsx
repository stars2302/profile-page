import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import About from './pages/about'
import Project from './pages/project'
import More from './pages/more'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="more" element={<More />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App