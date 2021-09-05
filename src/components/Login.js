import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = ({ history }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      history.push('/dashboard');
    }
  }, [history]);

  const onLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('token', userCredential._tokenResponse.idToken);
        history.push('/dashboard')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
      });
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex justify-center items-center">
      <div className="w-96 bg-white">
        <div className="m-5">
          <label className="text-xl font-bold block mb-2">Email</label>
          <input
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
            className="border-grey-200 border-2 rounded w-full h-10 p-2"
          />
        </div>
        <div className="m-5">
          <label className="text-xl font-bold block mb-2">Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            className="border-grey-200 border-2 rounded w-full h-10 p-2"
          />
        </div>
        <div className="m-5">
          <button onClick={onLogin} className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded font-bold px-10 py-2  text-xl">
            Login
          </button>
        </div>
        <div className="m-5">
          <Link className="" to="/signup">
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
