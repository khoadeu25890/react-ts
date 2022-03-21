import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import { useEffect, useState } from 'react'
import { ProductType } from './pages/types/product'
import ProductManager from './pages/ProductManager'
import { list } from './api/product'



function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () =>{
      const { data } = await list()
      setProducts(data)
    }
    getProducts()
  },[])

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="products">
              <Route index element={<h1>Product Page</h1>} />
              <Route path=':id' element={<h1>Product Detail</h1>}/>
          </Route>

        </Route>


        <Route path='/admin' element={<AdminLayout/>}> 
            <Route path='products' element={<ProductManager products={products} />} />


        </Route>
        
        {/* <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Navigate to='dashboard'/>}/>
          <Route path="dashboard" element={<h1>Dashboard page</h1>} />
          <Route path= "products" element={<ProductManager products={products} />} />
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
