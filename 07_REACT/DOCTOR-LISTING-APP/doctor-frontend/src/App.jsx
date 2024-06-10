

import { Route, Routes} from 'react-router-dom'
import './App.css'
import Doctorlist from './Components/Doctorlist'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ViewDoctor from './Components/ViewDoctor'





function App() {


  return (
    <>
     <Header/>
  
     <Routes>
          {/* localhost:5173 - Allrest */}
      <Route  path='/' element={<Doctorlist/>}/>

         {/* localhost:5173/view/12 - ViewRest */}
         <Route  path='/view/:id' element={<ViewDoctor/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
