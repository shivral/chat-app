import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth);
        navigate("/login");

    }
    return (
        <div className='navbar'>
            <span className='title'>Chit-Chat</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt='' />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
