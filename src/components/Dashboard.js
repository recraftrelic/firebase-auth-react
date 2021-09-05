import React, { useEffect } from "react";
import { getAuth, signOut } from 'firebase/auth';

const Dashboard = ({ history }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      history.push('/');
    }
  }, [history]);

  const Logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('token');
        history.push('/')
      })
      .catch((e) => alert(e.message))
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex justify-center items-center">
      <div className="w-96 bg-white">
        <div className="m-5">
            <p>{user && user.displayName}</p>
        </div>
        <div className="m-5">
          <button onClick={Logout} className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded font-bold px-10 py-2  text-xl">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
