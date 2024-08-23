
import { Link } from 'react-router-dom';
import Header from '../Header';


function Register() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

  return (
    <div className='mt-4 grow flex items-center h-screen justify-around'>
      <div className='mb-64'>
      <h1 className='text-4xl mb-4 text-center'>Register</h1>
        <form className='max-w-md mx-auto'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Your Email'/>
          <input type='password' placeholder='Password'/>
          <button className='primary'>Login</button>
          <div className='text-center py-2  text-gray-400'>
            Already a member?
            <Link className='underline text-black' to={'/login'}>Login</Link>
          </div>
        </form>

      </div>
    </div>

  )
}

export default Register
