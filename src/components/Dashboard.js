import { getAuth, signOut } from '@firebase/auth';
import React, { useEffect } from 'react';

const Dashboard = ({ history }) => {
    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            history.push('/')
        }
    },[])

    const auth = getAuth();
    const user = auth.currentUser;

    return (
        <div className="w-full h-screen bg-gradient-to-r from-yellow-200 via-red-500 to-pink-500 flex justify-center items-center">
            <div className="w-96 bg-white shadow-lg">
                <div className="m-5">
                    <p>{user && user.displayName}</p>
                </div>
                <div className="m-5">
                    <button
                        onClick={logout}
                        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-200 text-white px-10 py-2 rounded text-xl font-bold"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
