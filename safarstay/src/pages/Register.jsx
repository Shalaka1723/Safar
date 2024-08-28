import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let registerUser=(event)=>{
    // event.preventDefault();
    axios.post('/register',{
      name,
      email,
      password
    });
  }

  return (
    <div className="mt-4 grow flex items-center h-screen justify-around">
      <div className="mb-64">
        <h1 className="text-4xl mb-4 text-center">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser()}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2  text-gray-400">
            Already a member?
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
