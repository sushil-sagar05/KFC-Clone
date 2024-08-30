import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Deals from './Pages/Deals'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BottomNav from './Components/BottomNav'
import Cart from './Pages/Cart'
import Error from './Pages/Error'


function App() {
  

  return (
   <BrowserRouter>
  

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Menu' element={<Menu />}/>
    <Route path='/Deals' element={<Deals/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/*' element={<Error/>}/>
   </Routes>

   </BrowserRouter>
  )
}

export default App