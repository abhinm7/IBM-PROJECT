import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SideBar'
import {Route, Routes} from 'react-router-dom'
import List from './pages/List/List'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const url = 'https://food-delivery-backend-rx0t.onrender.com'
  const url = 'http://localhost:5000'
  return (
    <div>
      <ToastContainer/>
       <Navbar/>
        <hr />
        <div className='app-content'>
        <SideBar/>
        <Routes>
          <Route path='/' element={<Add url={url}/>}/>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
        </div>
    </div>
  )
}

export default App