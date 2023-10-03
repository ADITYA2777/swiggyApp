
import React, { useState } from 'react'
import logo from "../assets/image/foodvalapng.jpg"
import { Link } from "react-router-dom"
import useOnline from '../helper/UseOniline'

const Header = () => {
  
  const IsOnline = useOnline()

  const Title = () => (
    <a href="/">
      <img className="logo" alt="logo" src={logo} />
    </a>
  );

  const [isLogged,setIsLogged]= useState(false)
    return (
      <>
        <div className="header">
          <Title />
          <div className="nav-items">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"/about"}>About</Link>
              </li>

              <li>
                <Link to={"/Contact"}>contact</Link>
              </li>
              <li>
                <Link to={"/Cart"}>Cart</Link>
              </li>
              <li>
                <Link to={"/Insmart"}>InsertMart</Link>
              </li>
            </ul>
          </div>
          <h2>{IsOnline ? "🍏Online" : "🍎offline"}</h2>
          {isLogged ? (
            <button onClick={() => setIsLogged(false)}>LOGIN</button>
          ) : (
            <button onClick={() => setIsLogged(true)}>LOGOUT</button>
          )}
        </div>
      </>
    );
}



export default Header



