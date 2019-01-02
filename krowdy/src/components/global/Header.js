import React, { Component } from "react";

import { Menu, Dropdown, Icon, Modal } from "antd";
import "antd/dist/antd.css";

import "./css/Header.css";
import logo from "./images/logo.svg";

class Header extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hideModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item
          key="1"
          onClick={() => {
            console.log("Sesión cerrada");
          }}
        >
          Cerrar Sesión
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key="2"
          className="delete-account"
          onClick={() => {
            this.showModal();
          }}
        >
          Cerrar Cuenta
        </Menu.Item>
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
        <Modal
          title="Cerrar Cuenta"
          visible={this.state.visible}
          onOk={() => {
            this.hideModal();
            console.log("Cuenta cerrada");
          }}
          onCancel={this.hideModal}
          okText="Cerrar"
          cancelText="Cancelar"
        >
          <p>La cuenta será eliminada.</p>
          <p>Deseas continuar?</p>
        </Modal>
      </div>
    );
  }
}

export default Header;
