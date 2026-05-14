import {Button,Avatar} from "@mui/material";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";


function Header() {

  const [sts, setStatus]=useState(false)

  useEffect(()=>{
    const checkLogin = localStorage.getItem('isLoggedIn') === "true";
    setStatus(checkLogin);
  },[])
 
  const handleLogout= ()=>{
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
    setStatus(false);
  }
  return (
    <>
      <div className="p-2 bg-primary text-white d-flex justify-contents-center align-items-center">
          <Avatar  sx={{ width: 70, height: 70 }}><img src={logo} alt="logo" style={{ width: 80, height: 80 }}/></Avatar>
          <h1 style={{margin:"0 auto"}}>Welcome</h1>
      </div>
        <nav className="navbar navbar-expand-sm bg-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white"  to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white"  to="/notes">Notes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white"  to="/Apiuser">API User</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Profilecard">ProfileCard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/favitems">Favourite Items</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/practice">Context</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Message">Message</Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">Cart</Link>
            </li>
                {!sts && (
                <li className="nav-item">
                  <Link className="nav-link text-white"  to="/login">Login</Link>
                </li>)}             
                {sts && (
                <li className="nav-item">
                <Button color="error" onClick={handleLogout}>Logout</Button>           
              </li>)}                 
            </ul>
          </div>
        </nav>
    </>
  );
}
export default Header;
