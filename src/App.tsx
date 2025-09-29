import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import SidebarDrawer from './components/sidebar.tsx'
import MusicDetail from './pages/MusicDetail.tsx'
import MusicList from './pages/MusicList.tsx'
import About from './pages/About.tsx'

function App() {
  return (
    <BrowserRouter>
      <SidebarDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music/:id" element={<MusicDetail />} />
        <Route path="/all" element={<MusicList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
