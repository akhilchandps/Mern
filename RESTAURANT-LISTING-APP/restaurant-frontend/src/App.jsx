
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Allrest from './Components/Allrest'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ViewRest from './Components/ViewRest'

function App() {


  return (
    <>
    <Header />

    <Routes>
          {/* localhost:5173 - Allrest */}
      <Route  path='/' element={<Allrest/>}/>

         {/* localhost:5173/view/12 - ViewRest */}
         <Route  path='/view/:id' element={<ViewRest/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
