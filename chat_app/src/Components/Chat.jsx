import React, { useState, useEffect, useRef } from 'react';
import { IoSend } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";
import { IoMdCamera } from "react-icons/io";
import '../CSS/Chat.css';

const Chat = () => {
  const videoRef = useRef(null);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);

  const handleSend = () => {
    if (messageInput.trim() !== '') {
      setMessages([{ text: messageInput, type: 'sent' }, ...messages]);
      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='home'>
      <div ref={messagesRef} className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.type}>
            {msg.text}
          </div>
        ))}
      </div>
        <input
          className="home_input"
          placeholder="Type here..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
    </div>
  );
};

export default Chat;
