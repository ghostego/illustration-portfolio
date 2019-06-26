import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  state = { galleryHover: false, mobileMenu: false };

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
        <div className="sidebar__mobile-button">
          <input
            type="checkbox"
            id="sidebar__mobile-checkbox"
            checked={this.state.mobileMenu}
            onClick={() => {
              this.setState({ mobileMenu: !this.state.mobileMenu });
            }}
          />
          <span />
          <span />
          <span />
        </div>
        <div
          className={
            "sidebar__mobile-menu" +
            (this.state.mobileMenu ? " sidebar__mobile-menu--show" : "")
          }
        >
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  this.setState({ mobileMenu: false });
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  this.setState({ mobileMenu: false });
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={() => {
                  this.setState({ mobileMenu: false });
                }}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/gallery/black-and-white"
                onClick={() => {
                  this.setState({ mobileMenu: false });
                }}
              >
                Black and White
              </Link>
            </li>
            <li>
              <Link
                to="/gallery/color"
                onClick={() => {
                  this.setState({ mobileMenu: false });
                }}
              >
                Color
              </Link>
            </li>
            <li>
              <Link
                to="/gallery/gif"
                onClick={() => {
                  this.setState({ mobileMenu: false });
                }}
              >
                GIF
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
