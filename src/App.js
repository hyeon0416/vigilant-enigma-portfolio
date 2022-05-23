import './App.css';
import { Route , Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
