import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';


function Header() {

  return (
    <div>
      <header className='flex p-4 justify-between'>
        <a href='' className='flex items-center'>
          <AirplanemodeActiveIcon/>
          <span className='text-xl font-bold'>safar</span>
        </a>
        <div className='flex gap-2 shadow-md shadow-gray-300 border border-gray-300 rounded-full px-4 py-2'>
          <div>Anywhere</div>
          <div className='border-l border-gray-300'></div>
          <div>Any week</div>
          <div className='border-l border-gray-300'></div>
          <div>Add guests</div>
          <button className='bg-primary w-6 h-6 text-white rounded-full p-1 '>
            <SearchIcon className=''  sx={{fontSize:20}}/>
          </button>
        </div>
        <div className='flex gap-1 shadow-md shadow-gray-300 border border-gray-300 rounded-full px-4 py-2'>
          <MenuIcon sx={{color: grey[600]}}/>
          <Link to={'/login'}>
          <AccountCircleIcon sx={{color: grey[600]}}/>
          </Link>
        </div>
      </header>
    </div>

  )
}

export default Header
