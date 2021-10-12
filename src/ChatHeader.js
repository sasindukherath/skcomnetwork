import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import './ChatHeader.css';
import NotificationIcon from '@mui/icons-material/CircleNotificationsSharp';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import db, { auth } from './firebase';

function ChatHeader({channelName}) {
    const user = useSelector(selectUser);
    return (
        <div className="chatHeader">
            
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">📺</span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader__right">
                <div onClick={() => auth.signOut()} className="chatHeader__search">
                    <LogoutIcon /> Logout
                </div>
                <div className="name">
                    
                </div>
                

            </div>
            
        </div>
    )
}

export default ChatHeader
