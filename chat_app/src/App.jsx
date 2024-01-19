import Login from './Components/Login'
import Register from './Components/Register'
import './App.css'
import Home from './Components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App=()=>{
  localStorage.setItem("user","");
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;