import './App.css';
import { Route , Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar/>}>
          <Route index element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
