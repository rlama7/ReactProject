import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link className="link-style" to="/about">
          <li>About</li>
        </Link>
        <Link className="link-style" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="link-style" to="/accordion">
          <li>Accordion</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
