import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic';
import React, { useState } from 'react';
import './Chat.css';
import axios from './axios'


const Chat = ({messages}) => {

    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();

       
        await axios.post('/messages/new', {
            "message": input,
            "name":"DEMO APP",
            "timestamp":"Just now !",
            "received": true
        });

        setInput('');
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar/>
                <div className="chat-header-info">
                    <h3>Room name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                {messages.map(message => (
                        <p className={`chat-message ${message.received && "chat-receiver"}`}>
                        <span className="chat-name">{message.name}</span>
                        {message.message}
                        <span className="chat-timestamp">{message.timestamp}</span>
                        </p>
                    ))}
            </div>
            <div className="chat-footer">
                <InsertEmoticon/>
                <form>
                    <input type="text" onChange={e => setInput(e.target.value)} placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
