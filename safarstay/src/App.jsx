import './App.css'
import IndexPage from "./pages/IndexPage.jsx"
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Layout from './Layout.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
      <Route index element={<IndexPage/>} />
      <Route path='/login' element={<Login/>} />
      </Route>
    </Routes>

  )
}

export default App
