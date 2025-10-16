import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import AdminUpdateTask from './pages/AdminUpdateTask'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
  <Route path="/admin/update" element={<AdminUpdateTask />} />
  <Route path="/admin/update/:id" element={<AdminUpdateTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
