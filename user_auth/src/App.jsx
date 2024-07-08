import './App.css'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
