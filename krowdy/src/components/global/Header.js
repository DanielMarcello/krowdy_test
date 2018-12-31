import React, { Component } from "react";

import { Menu, Dropdown, Icon } from "antd";
import "antd/dist/antd.css";

import "./css/Header.css";
import logo from "./images/logo.svg";

class Header extends Component {
  handleMenuClick(e) {
    switch (e.key) {
      case "1":
        console.log("Sesión cerrada");
        break;
      default:
        break;
    }
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Cerrar Sesión</Menu.Item>
      </Menu>
    );

    return (
      <div className="Header">
        <div className="logo">
          <img src={logo} alt="Krowdy" />
          <p className="logo-name">.accounts</p>
        </div>
        <div className="session">
          <div className="line-separator" />
          <Dropdown
            className="user-dropdown"
            overlay={menu}
            trigger={["click"]}
          >
            <a className="ant-dropdown-link" href="/">
              Mario Fishman <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Header;
