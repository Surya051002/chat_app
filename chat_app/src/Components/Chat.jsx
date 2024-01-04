import React from 'react'
import '../CSS/Home.css'
import { useRef } from 'react';
import { IoSend } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa6";
import { IoMdCamera } from "react-icons/io";

 const Chat = () => {

    const videoRef = useRef(null);
      
        const openCamera = async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          } catch (err) {
            console.error('Error accessing the camera:', err);
          }
        };

  return (
    <div className='chat'>
        <input className="home_input" placeholder="Type here..." />
            <div className="sendicon">
            <IoSend  />
            </div>
            <div className="sendfile">
            <MdOutlineAttachFile />
            </div>
            <div className="cameraicon" onClick={openCamera}>
            <IoMdCamera />
            </div>
            <div className="micicon">
            <FaMicrophone />
            </div>
    </div>
  )
}

export default Chat;