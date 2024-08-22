import './App.css'
import IndexPage from "./pages/IndexPage.jsx"
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';

function App() {

  return (
    <Routes>
      <Route index element={<IndexPage/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>

  )
}

export default App
