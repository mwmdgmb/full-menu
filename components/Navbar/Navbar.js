import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import Link from "next/link";

class Navbar extends React.Component {
  showOptions = e => {
    e.preventDefault();
    alert("Settings");
  };
  render() {
    return (
      <div className="menu">
        <Menu>
          <div className="d-flex flex-column">
            <Link id="home" className="menu-item" href="/">
              <a>Home</a>
            </Link>
            <Link id="about" className="menu-item" href="#">
              <a>About</a>
            </Link>
            <Link id="contact" className="menu-item" href="#">
              <a>Contact</a>
            </Link>
            <Link
              onClick={this.showOptions}
              className="menu-item--small"
              href="#"
            >
              <a>Settings</a>
            </Link>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center p-4">
            <FacebookIcon className="largeIcon" fontSize="large" />
            <TelegramIcon className="largeIcon" fontSize="large" />
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
            <i className="fa fa-sign-in" />
            <i className="fa fa-user-plus" />
          </div>
        </Menu>
      </div>
    );
  }
}
export default Navbar;
