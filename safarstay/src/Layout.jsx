
import { Outlet } from 'react-router-dom';
import Header from './Header';


function Layout() {

  return (
    <div className='flex p-4 flex-col min-h-screen '>
        <Header/>
        <Outlet/>
    </div>

  )
}

export default Layout
