
import Menu from "./Menu";
import Navbar from "./Navbar";

import '../CSS/Home.css';

import { useRef } from "react";

import  Chat  from "./Chat";
const Home=()=>{
    
        
      
      
    return(
        <div className="home">
            <Navbar/>
            <Menu/>
            <Chat/>
            
        </div>
    )
}
export default Home;