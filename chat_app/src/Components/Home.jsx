import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "./Menu";
import Navbar from "./Navbar";
import Chat from "./Chat";

import "../CSS/Home.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      // If the user is not logged in, navigate them to the login page
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="home">
      <Navbar />
      <Menu />
      <Chat />
    </div>
  );
};

export default Home;
