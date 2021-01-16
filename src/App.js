import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('8650b3c11da18506d873', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      setMessages([...messages, newMessages])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages] )

  console.log(messages)

  return (
    <div className="app">
      <div className="app-body">      
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
