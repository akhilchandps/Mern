
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Auth from './Auth'
import Header from './Header'
import Depowith from './Depowith'

function App() {


  return (
    <>
    <Header/>
<Routes>
  <Route path='' element={<Auth/>}/>
  <Route path='register' element={<Auth register/>}/>
  <Route path='dashboard' element={<Depowith/>}/>

</Routes>

    </>
  )
}

export default App
