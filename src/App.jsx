import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
