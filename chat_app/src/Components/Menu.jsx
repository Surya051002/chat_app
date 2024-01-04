import '../CSS/Menu.css';
import Card from './Card';


import { IoIosSearch } from "react-icons/io";

const Menu=()=>{
    return(
        <div className="menu">
            <input className='menu_input' placeholder='Search'/>
            <div className='searchicon'>
            <IoIosSearch />
            </div>
                <Card/>
           <Card/>
           <Card/>
           <Card/><Card/>
           <Card/><Card/><Card/><Card/><Card/>
        </div>
    )
}

export default Menu;