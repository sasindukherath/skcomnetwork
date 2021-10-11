import React, { useEffect, useState } from 'react';
import "./Chat.css";
import ChatHeader from './ChatHeader';
import CircleIcon from '@mui/icons-material/AddCircle';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChnnelId, selectChnnelName} from './features/appSlice';
import db from "./firebase";
import firebase  from 'firebase';
function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChnnelId);
    const channelName = useSelector(selectChnnelName);
    const [input, setInput] = useState("");
    const [messages, setMessage] = useState([]);

    useEffect(() => {
        if(channelId){
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy('timestamp', "desc")
                .onSnapshot((snapshot) =>
                    setMessage(snapshot.docs.map((doc) => doc.data()))
                );
        }
        
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').
        add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");
    };
    return (
        <div className="chat">
            
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map((message) => (
                    <Message 
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>

            <div className="chat__input">
                <CircleIcon fontSize="large"/>
                <form>
                    <input 
                    value={input}
                    disabled={!channelId}
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder={`Message for #${channelName}`}/>
                    
                    <button 
                    onClick={sendMessage}
                    disabled={!channelId}
                    className="chat__inputButton" 
                    type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat
