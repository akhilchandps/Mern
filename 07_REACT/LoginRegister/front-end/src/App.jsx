
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Auth from './Auth'
import Header from './Header'
import Homepage from './Homepage'

function App() {


  return (
    <>
    <Header/>
<Routes>
<Route path='/' element={<Homepage/>}/>
  <Route path='/login' element={<Auth/>}/>
  <Route path='/register' element={<Auth register/>}/>

</Routes>

    </>
  )
}

export default App
