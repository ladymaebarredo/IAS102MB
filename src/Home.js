import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { database } from './FirebaseConfig.js';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        database.signOut().then(() => {
            navigate('/');
        });
    };

    return (
        <div className='app'>
            <button className="sign-out-btn" onClick={handleClick}>
                <LogoutIcon />
            </button>
        </div>
    );
};

export default HomeScreen;
