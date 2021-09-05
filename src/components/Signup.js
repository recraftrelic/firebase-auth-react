import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Signup = ({ history }) => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      history.push('/dashboard');
    }
  }, [history]);

  const onSignup = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => history.push('/'))
          .catch((error) => console.log(error))
      })
      .catch(error => {
        alert(error.message);
      })
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex justify-center items-center">
      <div className="w-96 bg-white">
        <div className="m-5">
          <label className="text-xl font-bold block mb-2">Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            name="name"
            type="text"
            className="border-grey-200 border-2 rounded w-full h-10 p-2"
          />
        </div>
        <div className="m-5">
          <label className="text-xl font-bold block mb-2">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
            className="border-grey-200 border-2 rounded w-full h-10 p-2"
          />
        </div>
        <div className="m-5">
          <label className="text-xl font-bold block mb-2">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            className="border-grey-200 border-2 rounded w-full h-10 p-2"
          />
        </div>
        <div className="m-5">
          <button onClick={onSignup} className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded font-bold px-10 py-2  text-xl">
            Signup
          </button>
        </div>
        <div className="m-5">
          <Link className="" to="/">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
