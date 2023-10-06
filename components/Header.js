
import React, { useState,useContext } from 'react'
import logo from "../assets/image/foodvalapng.jpg"
import { Link } from "react-router-dom"
import useOnline from '../helper/UseOniline'
import UserContext from '../helper/UseContext'
import { useSelector } from 'react-redux'
import store from '../helper/store'

const Header = () => {

  const IsOnline = useOnline()

  const { user } = useContext(UserContext)
  
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);

  const Title = () => (
    <a href="/">
      <img className="logo" alt="logo" src={logo}/>
    </a>
  );

  const [isLogged,setIsLogged]= useState(false)
    return (
      <>
        <div className="header shadow-lg shadow-red-300 rounded-xl text-fuchsia-700 ">
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
                <Link to={"/Insmart"}>InsertMart</Link>
              </li>
              <li>
                <Link to={"/Cart"}>Cart-{ cartItems.length} Items</Link>
              </li>
            </ul>
          </div>
          <h2 className="p-4">{IsOnline ? "🍏Online" : "🍎offline"}</h2>
          <span className="text-amber-400 text-xl font-bold p-4 ">
            {user.name}
          </span>
          {isLogged ? (
            <button
              className=" bg-pink-400 text-cyan-200 p-2 m-3 mb-9 rounded-xl"
              onClick={() => setIsLogged(false)}
            >
              LOGIN
            </button>
          ) : (
            <button
              className=" bg-pink-400 text-cyan-200 p-2 m-3 mb-9 rounded-xl hover:bg-slate-50"
              onClick={() => setIsLogged(true)}
            >
              LOGOUT
            </button>
          )}

        </div>
      </>
    );
}



export default Header



