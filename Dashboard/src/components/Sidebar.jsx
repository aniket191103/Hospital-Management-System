import React, { useContext, useState,useEffect } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();

const handleLogout = async () => {
  try {
    // Send logout request to the backend
    const res = await axios.get(
      "https://hospital-management-system-backend-tid9.onrender.com/api/v1/user/admin/logout",
      { withCredentials: true } // Ensure cookies are sent with the request
    );

    // Display success message
    toast.success(res.data.message);

    // Update authentication state
    setIsAuthenticated(false);

    // Optional: Clear authentication tokens from storage
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Debugging statement to check state update
    console.log("isAuthenticated after logout:", false); // Directly log false since state update is async

    // Optional: Redirect to login page
    navigateTo("/login");
  } catch (err) {
    // Handle errors and display error message
    const errorMessage = err.response?.data?.message || "Logout failed";
    toast.error(errorMessage);
  }
};

// Optional: Use useEffect to log the state when it changes
useEffect(() => {
  console.log("isAuthenticated state changed:", isAuthenticated);
}, [isAuthenticated]);


  const gotoHomePage = () => {
    navigateTo("/");
    setShow(!show);
  };

  const gotoDoctorsPage = () => {
    navigateTo("/doctors");
    setShow(!show);
  };

  const gotoMessagesPage = () => {
    navigateTo("/messages");
    setShow(!show);
  };

  const gotoAddNewDoctor = () => {
    navigateTo("/doctor/addnew");
    setShow(!show);
  };

  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(!show);
  };

  return (
    <>
      <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div className="links">
          <TiHome onClick={gotoHomePage} />
          <FaUserDoctor onClick={gotoDoctorsPage} />
          <MdAddModerator onClick={gotoAddNewAdmin} />
          <IoPersonAddSharp onClick={gotoAddNewDoctor} />
          <AiFillMessage onClick={gotoMessagesPage} />
          <RiLogoutBoxFill onClick={handleLogout} />
        </div>
      </nav>
      <div
        className="wrapper"
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </div>
    </>
  );
};

export default Sidebar;
