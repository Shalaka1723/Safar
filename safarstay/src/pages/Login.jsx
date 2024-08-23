
import Header from '../Header';


function Login() {

  return (
    <div className='mt-4'>
      <h1 className='text-4xl text-center'>Login</h1>
        <form className='max-w-md mx-auto'>
          <input type='email' placeholder='type email'/>
          <input type='password' placeholder='password'/>
          <button className='primary'>Login</button>
        </form>
    </div>

  )
}

export default Login
