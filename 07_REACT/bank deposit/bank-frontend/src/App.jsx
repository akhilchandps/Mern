
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Auth from './Components/Auth'

function App() {


  return (
    <>
     <Routes>


<Route path= {'/'} element={<Auth/>}/>
<Route path= {'register'} element={<Auth register />}/>


</Routes>
    </>
  )
}

export default App
