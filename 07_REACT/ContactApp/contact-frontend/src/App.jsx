
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Admin from './Components/Admin'
import Edit from './Components/Edit'
import View from './Components/View'
import Add from './Components/Add'
import Admin2 from './Components/Admin2'
import Addpage from './Components/Addpage'


function App() {


  return (
    <>
<Header/>

<Routes>
  
  <Route path='' element={<Admin/>}/>
  <Route path='add' element={<Add/>}/>
  <Route path='admin2' element={<Admin2/>}/>
  <Route path='admin2/addpage' element={<Addpage/>}/>
  <Route path='admin2/edit/:empid' element={<Edit/>}/>
  <Route path='admin2/view/:id' element={<View/>}/>

</Routes>

<Footer/>
    </>
  )
}

export default App
