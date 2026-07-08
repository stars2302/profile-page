import { HashRouter, Navigate, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import About from './pages/about'
import Project from './pages/project'
import More from './pages/more'
import Intro from './components/intro'

function App() {
  return (
    <HashRouter>
      <Intro />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="more" element={<More />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
