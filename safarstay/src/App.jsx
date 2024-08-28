import './App.css'
import IndexPage from "./pages/IndexPage.jsx"
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Layout from './Layout.jsx';
import Register from './pages/Register.jsx';
import axios from 'axios';

axios.defaults.baseURL='http://localhost:4000';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
      <Route index element={<IndexPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Route>
    </Routes>

  )
}

export default App
