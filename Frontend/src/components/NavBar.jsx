import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

 const handleLogout = async () => {
  try {
    const res = await axios.get("https://hospital-management-system-backend-tid9.onrender.com/api/v1/user/patient/logout", {
      withCredentials: true, // Ensure cookies are sent with the request
    });
    toast.success(res.data.message);
    setIsAuthenticated(false);
    window.location.href = '/'; // Redirect to home or login page
  } catch (err) {
    // Handle errors based on the response structure
    const errorMessage = err.response?.data?.message || 'An error occurred';
    toast.error(errorMessage);
  }
};


  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn btn-31" onClick={handleLogout}>
              <span className="text-container">
                <span className="text">LogOut</span>
                </span>
            </button>
          ) : (
            <button className="loginBtn btn btn-31" onClick={goToLogin}>
             <span className="text-container">
                <span className="text">LogIn</span>
                </span>
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
