import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("user trying to log out!");
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("You logged out successfully!")
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        
      });
  }

  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav flex items-center gap-5 text-accent text-[18px] ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-5">
        <div> {user && user.email} </div>
        <img src={userImg} alt="user" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">LogOut</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
