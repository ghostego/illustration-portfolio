import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  state = { galleryHover: false };

  galleryShow = () => {
    this.setState({ galleryHover: true });
  };

  galleryHide = () => {
    this.setState({ galleryHover: false });
  };

  render() {
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
          <li
            className="sidebar__link-item"
            onMouseOver={() => this.galleryShow()}
            onMouseOut={() => this.galleryHide()}
          >
            <Link to="/gallery">Gallery</Link>
            <div
              className={
                "sidebar__link-item--hover" +
                (this.state.galleryHover ? " sidebar__link-item--show" : "")
              }
            >
              <ul>
                <li>
                  <Link to="/gallery">All</Link>
                </li>
                <li>
                  <Link to="/gallery/black-and-white">Black and White</Link>
                </li>
                <li>
                  <Link to="/gallery/color">Color</Link>
                </li>
                <li>
                  <Link to="/gallery/gif">GIF</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
