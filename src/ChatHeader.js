import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import './ChatHeader.css';
import NotificationIcon from '@mui/icons-material/CircleNotificationsSharp';
function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>

               
                
            </div>
            <div className="chatHeader__right">
                <div className="chatHeader__search">
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
