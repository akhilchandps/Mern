import {Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header';
import Add from './Components/Add';
import Home from './Components/Home';
import Viewproduct from './Components/Viewproduct';




function App() {


  return (
    <>
    <Header/>
    <Routes>
  
    <Route path = '' element={<Home/>}/>
      <Route path = '/add' element={<Add/>}/> 
      <Route path = '/view/:id' element={<Viewproduct/>}/> 
    </Routes>
    </>
  )
}

export default App
