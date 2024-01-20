import Login from './Components/Login'
import Register from './Components/Register'
import './App.css'
import Home from './Components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Otp from './Components/Otp'
const App=()=>{
  localStorage.setItem("user","");
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/otp' element={<Otp/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;