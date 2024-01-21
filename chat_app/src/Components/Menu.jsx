import { useState, useEffect } from 'react';
import '../CSS/Menu.css';
import Card from './Card';
import axios from 'axios';
import { IoIosSearch } from 'react-icons/io';

const Menu = () => {
  const [userFriends, setFriends] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    axios
      .post('http://localhost:5000/user/friends', { email: user?.email })
      .then((response) => {
        // Handle successful response
        setFriends(response.data.friends);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching friends:', error);
      });
  }, []);

  return (
    <div className="menu">
      <input className="menu_input" placeholder="Search" />
      <div className="searchicon">
        <IoIosSearch />
      </div>
      {userFriends?.map((friend) => (
        <Card key={friend} userId={friend} />
      ))}
    </div>
  );
};

export default Menu;
