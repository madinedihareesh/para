
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Componets/Navbar'
import { Products } from './Componets/Products'
import { SingleProduct } from './Componets/SingleProduct'

function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/product/:id' element={<SingleProduct/>}></Route>
     </Routes>
    </>
  )
}

export default App
