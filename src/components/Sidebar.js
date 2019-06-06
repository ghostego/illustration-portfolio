import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__link-list">
        <li className="sidebar__link-item">
          <Link to="/">Home</Link>
        </li>
        <li className="sidebar__link-item">
          <Link to="/about">About</Link>
        </li>
        <li className="sidebar__link-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="sidebar__link-item">
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
