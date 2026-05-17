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
          <Route path='/app' element={<AppLayout />}>
          <Route index element={<h1>Welcome to the app</h1>} />
            <Route path='cities' element={<h1>Cities</h1>} />
            <Route path='countries' element={<h1>Countries</h1>} />
            <Route path='form' element={<h1>Form</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
