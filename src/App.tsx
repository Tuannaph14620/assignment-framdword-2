import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import ListProductPage from './pages/Admin/Product/listProduct'
import CategoriesPage from './pages/Admin/Category/categories'
import AdminLayout from './components/Layout/admin'
import ClientLayout from './components/Layout/client'
import HomePage from './pages/Client/home'
import AddProductPage from './pages/Admin/Product/addProduct'
import DetailPage from './pages/Client/Detail'
import EditProductPage from './pages/Admin/Product/editProduct'
import SigninPage from './pages/Auth/signin'
import ListCategoryPage from './pages/Admin/Category/ListCategory'

function App(props: any) {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='/' element={<ClientLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='detail' element={<DetailPage/>}/>
        </Route>
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<ListProductPage/>}/>
          <Route path='product/add' element={<AddProductPage/>}/>
          <Route path='product/edit' element={<EditProductPage/>}/>

          <Route path="category" >
          <Route index element={<ListCategoryPage/>}/>
          <Route path='product/add' element={<AddProductPage/>}/>
          <Route path='product/edit' element={<EditProductPage/>}/>
          </Route>
         
        </Route>
      </Routes>
    </div>
  )
}

export default App
