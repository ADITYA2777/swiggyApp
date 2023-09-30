
import React from 'react'

const Header = () => {
    return (
      <>
        <div className="header">
          <Title />
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </>
    );
}

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPjENnKTKv-lSU5zexWbiUllYglxFDKVb2Q&usqp=CAU"
    />
  </a>
);

export default Header