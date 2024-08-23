
import { Link } from 'react-router-dom';
import Header from '../Header';


function Register() {

  return (
    <div className='mt-4 grow flex items-center h-screen justify-around'>
      <div className='mb-64'>
      <h1 className='text-4xl mb-4 text-center'>Register</h1>
        <form className='max-w-md mx-auto'>
          <input type='email' placeholder='type email'/>
          <input type='password' placeholder='password'/>
          <button className='primary'>Login</button>
          <div className='text-center py-2  text-gray-400'>
            Dont have an account yet?
            <Link className='underline text-black' to={'/register'}>Register now</Link>
          </div>
        </form>

      </div>
    </div>

  )
}

export default Register
