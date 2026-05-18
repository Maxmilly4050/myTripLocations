import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import CityList from './components/CityList'
import { useEffect, useState } from 'react'
import CountriesList from './components/CountriesList'
import City from './components/City'
import Form from './components/Form'

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const BASE_URL = 'http://localhost:5000'

  useEffect(() => {
    async function fetchCities() {
      setIsLoading(true)
      try {
        const response = await fetch(`${BASE_URL}/cities`)
        const data = await response.json()
        setCities(data)
      } catch (error) {
        console.error('Error fetching cities:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path='/app' element={<AppLayout />}>
          <Route index element={< CityList cities={cities} isLoading={isLoading} />} />
            <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path='countries' element={<CountriesList cities={cities} isLoading={isLoading} />} />
            <Route path='cities/:id' element={<City />} />
            <Route path='form' element={<Form />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
