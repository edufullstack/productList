import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Productos from './components/Productos'
import NuevoProducto from './components/NuevoProducto'
import EditarProducto from './components/EditarProducto'

function App() {
  return (
    <>
      <Header />
      <div className='container mt-5'>
        <Routes>
          <Route extact path='/' element={<Productos />} />
          <Route extact path='/productos/nuevo' element={<NuevoProducto />} />
          <Route
            extact
            path='/productos/editar/:id'
            element={<EditarProducto />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
