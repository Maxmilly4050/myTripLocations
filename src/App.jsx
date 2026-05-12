import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/app' element={<AppLayout />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
