import React, { Component } from "react";

import "./css/Content.css";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";

import perfil from "./images/perfil.svg";
import shield from "./images/shield.png";

class Content extends Component {
  state = {
    currentMenuView: "mail"
  };

  handleMenuClick = e => {
    this.setState({
      currentMenuView: e.key
    });
  };

  render() {
    let contentBody;
    switch (this.state.currentMenuView) {
      case "mail":
        contentBody = (
          <div className="contet-body-mail">
            <div>asdasdad</div>
            <div>asdasdad</div>
          </div>
        );
        break;
      case "app":
        contentBody = <p>APP</p>;
        break;
      default:
        break;
    }
    return (
      <div className="Content">
        <div className="content-header">
          <img className="user-picture" src={perfil} alt="Krowdy" />
          <div className="user-info">
            <p className="user-name">
              Walther Ayala <Icon type="edit" />
            </p>
            <p className="user-mail">waltherayala@gmail.com</p>
            <p className="user-age">Miembro desde 14 de junio 2017</p>
          </div>
          <div className="content-header-line-separator" />
          <div className="page-info">
            <p className="page-info-title">Bienvenido</p>
            <p className="page-info-content">
              Desde aquí y con tu cuenta de Krowdy podras acceder rápidamente a
              tus herramientas y funciones para proteger tus datos y tu
              privacidad.
            </p>
          </div>
          <img className="shield" src={shield} alt="Krowdy" />
        </div>
        <div className="content-body">
          <Menu
            onClick={this.handleMenuClick}
            selectedKeys={[this.state.currentMenuView]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="user" />
              Cuenta
            </Menu.Item>
            <Menu.Item key="app">Item</Menu.Item>
          </Menu>
          {contentBody}
        </div>
      </div>
    );
  }
}

export default Content;
