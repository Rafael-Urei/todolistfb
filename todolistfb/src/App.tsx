import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Login } from './routes/login'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          
        </nav>
        <Routes>
          <Route path='/'></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
