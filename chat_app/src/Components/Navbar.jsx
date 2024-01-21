import '../CSS/Navbar.css'
import profile from '../assets/react.svg'
import { SlOptionsVertical } from "react-icons/sl";
import { IoVideocam } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


const Navbar=()=>{
    return(
        <div className="navbar">
            <div className='profile'>
                <img src={profile}/>
            </div>
            <div className="header">
                <div className="header-text">
                    <h1>Surya Prakash</h1>
                    <p>Last seen at 09:30 am</p>
                </div>
                <div className="options">
                    <div className="option">
                        <FaPhoneAlt />
                    </div>
                    <div className="option">
                        <IoVideocam />
                    </div>
                    <div className="option">
                        <SlOptionsVertical />
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Navbar;