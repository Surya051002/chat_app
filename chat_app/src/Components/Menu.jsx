import { useEffect } from 'react';
import '../CSS/Menu.css';
import Card from './Card';
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';

const Menu=()=>{

    useEffect(() => {
        const fetchFriends = async () => {
          try {
            const response = await axios.post('http://localhost:5000/friends', {
              email: localStorage.getItem('user'),
            });
            const data = response.data;
    
            setFriendsList(data.friends);
          } catch (error) {
            console.error('Error fetching friends:', error);
          }
        };
    
        fetchFriends();
      }, []);

    return(
        <div className="menu">
          <div className="search">
            <input className='menu_input' placeholder='Search'/>
          </div>
          <div className='searchicon'>
            <IoIosSearch />
          </div>
          <div className="names">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
          </div>       
        </div>
    )
}

export default Menu;