import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PageNotFound from './Components/PageNotFound'
import View from './Components/View'
import Edit from './Components/Edit'
import Add from './Components/Add'
import Admin from './Components/Admin'

function App() {


  return (
    <>
     <Header/>
     <Routes>
      <Route path='' element={<Admin/>}/>
      <Route path='add' element={<Add/>}/>
      <Route path='edit/:empid' element={<Edit/>}/>
      <Route path='view/:id' element={<View/>}/>
      <Route path='*' element={<PageNotFound/>}/>

 
     </Routes>

     <Footer/>
    
    </>
  )
}

export default App
