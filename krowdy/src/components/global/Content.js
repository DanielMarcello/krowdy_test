import React, { Component } from "react";

import "./css/Content.css";
import {
  Menu,
  Icon,
  Collapse,
  Table,
  Input,
  Button,
  Alert,
  Cascader,
  Checkbox,
  List,
  Avatar
} from "antd";
import "antd/dist/antd.css";

import perfil from "./images/perfil.svg";
import shield from "./images/shield.png";
import shieldp from "./images/shieldp.svg";
import facebook_circle from "./images/facebook_circle.png";
import linkedin_circle from "./images/linkedin_circle.jpg";
import gmail_circle from "./images/gmail_circle.ico";
import twitter_circle from "./images/twitter_circle.png";

const contentBodySubmenuData = [
  { name: "Inicio de sesión y seguridad" },
  { name: "Números de celular" },
  { name: "Cambiar contraseña" },
  { name: "Conexiones" }
];

const countryData = [{ code: "PE +51", name: "Peru (+51)" }];

class Content extends Component {
  state = {
    currentPassword: "123456",
    currentPasswordAlert: null,
    currentMenuView: "mail",
    currentSubmenuView: 0,
    passwordChanged: false,
    numberState: "add",
    currentCountryCode: "",
    currentNumber: "",
    mailsData: [
      {
        key: "1",
        name: "user@laborum.pe",
        verified: true,
        mainMail: true
      },
      {
        key: "2",
        name: "usuario@gmail.com",
        verified: true,
        mainMail: false
      },
      {
        key: "3",
        name: "usuario2@gmail.com",
        verified: false,
        mainMail: false
      }
    ],
    numbersData: [
      {
        key: "1",
        name: "PE +51 977 248 247",
        mainNumber: true
      },
      {
        key: "2",
        name: "PE +51 977 248 247",
        mainNumber: false
      },
      {
        key: "3",
        name: "PE +51 977 248 247",
        mainNumber: false
      }
    ],
    socialNetworksData: [
      {
        key: "1",
        name: "Facebook",
        icon: facebook_circle,
        code: "Walther",
        connected: true,
        website: "https://www.facebook.com"
      },
      {
        key: "2",
        name: "LinkedIn",
        icon: linkedin_circle,
        code: "@Walther",
        connected: true,
        website: "https://www.linkedin.com"
      },
      {
        key: "3",
        name: "Google",
        icon: gmail_circle,
        code: "walther@gmail.com",
        connected: true,
        website: "https://www.gmail.com"
      },
      {
        key: "4",
        name: "Twitter",
        icon: twitter_circle,
        code: "@Walther",
        connected: false,
        website: "https://www.twitter.com"
      }
    ]
  };

  handleMenuClick = e => {
    this.setState({
      currentMenuView: e.key
    });
  };

  handleSubmenuClick = k => {
    this.setState({
      currentSubmenuView: k
    });
    let selectedPanel = document.getElementById("panel" + k.toString());
    if (selectedPanel) {
      window.scrollTo(0, selectedPanel.offsetTop);
    }
  };

  changeMainMail = k => {
    let newData = this.state.mailsData;
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].mainMail) {
        newData[i].mainMail = false;
        break;
      }
    }
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].key === k) {
        newData[i].mainMail = true;
        break;
      }
    }
    this.setState({ mailsData: newData });
  };

  deleteMail = k => {
    let newData = this.state.mailsData;
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].key === k) {
        newData.splice(i, 1);
        break;
      }
    }
    this.setState({ mailsData: newData });
  };

  resendVerification = k => {
    alert("Verificación de correo reenviada");
  };

  sendVerificationMail = () => {
    let mailInput = document.getElementById("mailInput");
    if (mailInput.value.length > 0) {
      const newMail = {
        key: Math.floor(Math.random() * 200).toString(),
        name: mailInput.value,
        verified: false,
        mainMail: false
      };
      this.setState({ mailsData: [...this.state.mailsData, newMail] });
      mailInput.value = "";
    }
  };

  sendpasswordChange = () => {
    let passwordInput = document.getElementById("passwordInput");
    if (passwordInput.value.length > 0) {
      this.setState({ passwordChanged: true });
      passwordInput.value = "";
    }
  };

  onchangeCountryCode = value => {
    if (value.length > 0) this.setState({ currentCountryCode: value[0] });
  };

  sendNumberCode = () => {
    let numberInput = document.getElementById("numberInput");
    let countryCode = this.state.currentCountryCode;
    if (numberInput.value.length > 0 && countryCode.length > 0) {
      this.setState({
        numberState: "verify",
        currentNumber: countryCode + " " + numberInput.value
      });
    }
  };

  sendValidationCode = () => {
    let codeInput = document.getElementById("codeInput");
    if (codeInput.value.length > 0) {
      const newNumber = {
        key: Math.floor(Math.random() * 200).toString(),
        name: this.state.currentNumber,
        mainNumber: false
      };
      this.setState({ numbersData: [...this.state.numbersData, newNumber] });
      codeInput.value = "";
      this.setState({
        numberState: "add",
        currentNumber: ""
      });
    }
  };

  cancelNumberValidation = () => {
    this.setState({
      numberState: "add",
      currentNumber: ""
    });
  };

  changeMainNumber = k => {
    let newData = this.state.numbersData;
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].mainNumber) {
        newData[i].mainNumber = false;
        break;
      }
    }
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].key === k) {
        newData[i].mainNumber = true;
        break;
      }
    }
    this.setState({ numbersData: newData });
  };

  deleteNumber = k => {
    let newData = this.state.numbersData;
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].key === k) {
        newData.splice(i, 1);
        break;
      }
    }
    this.setState({ numbersData: newData });
  };

  changeCurrentPassword = () => {
    let currentPasswordInput = document.getElementById("currentPasswordInput");
    let newPasswordInput = document.getElementById("newPasswordInput");
    let againNewPasswordInput = document.getElementById(
      "againNewPasswordInput"
    );

    if (
      this.state.currentPassword === currentPasswordInput.value &&
      newPasswordInput.value === againNewPasswordInput.value
    ) {
      this.setState({
        currentPassword: newPasswordInput.value,
        currentPasswordAlert: "success"
      });
      currentPasswordInput.value = "";
      newPasswordInput.value = "";
      againNewPasswordInput.value = "";
    } else {
      this.setState({ currentPasswordAlert: "error" });
    }
  };

  cancelSocialNetworkAccess = k => {
    let newData = this.state.socialNetworksData;
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].key === k) {
        newData[i].connected = false;
        break;
      }
    }
    this.setState({ socialNetworksData: newData });
  };

  connectSocialNetwork = k => {
    let newData = this.state.socialNetworksData;
    for (let i = 0; i < newData.length; ++i) {
      if (newData[i].key === k) {
        newData[i].connected = true;
        break;
      }
    }
    this.setState({ socialNetworksData: newData });
  };

  render() {
    let contentBody;
    switch (this.state.currentMenuView) {
      case "mail":
        const columns = [
          {
            title: "",
            dataIndex: "name"
          },
          {
            title: "",
            dataIndex: "action",
            render: (text, record) => {
              if (record.verified === true && record.mainMail === true) {
                return (
                  <span className="mail-actions">
                    <p className="mail-action-item disabled">
                      Correo Principal
                    </p>
                  </span>
                );
              }
              if (record.verified === true && record.mainMail === false) {
                return (
                  <span className="mail-actions">
                    <p
                      className="mail-action-item enabled"
                      onClick={() => this.changeMainMail(record.key)}
                    >
                      Seleccionar como principal
                    </p>
                    <p
                      className="mail-action-item enabled"
                      onClick={() => this.deleteMail(record.key)}
                    >
                      Eliminar
                    </p>
                  </span>
                );
              }
              if (record.verified === false && record.mainMail === false) {
                return (
                  <span className="mail-actions">
                    <p
                      className="mail-action-item enabled"
                      onClick={() => this.resendVerification(record.key)}
                    >
                      Reenviar verificación
                    </p>
                    <p
                      className="mail-action-item enabled"
                      onClick={() => this.deleteMail(record.key)}
                    >
                      Eliminar
                    </p>
                  </span>
                );
              }
            }
          }
        ];
        const numberColumns = [
          {
            title: "",
            dataIndex: "name"
          },
          {
            title: "",
            dataIndex: "action",
            render: (text, record) => {
              if (record.mainNumber === true) {
                return (
                  <span className="mail-actions">
                    <p className="mail-action-item disabled">
                      Número Principal
                    </p>
                  </span>
                );
              }
              if (record.mainNumber === false) {
                return (
                  <span className="mail-actions">
                    <p
                      className="mail-action-item enabled"
                      onClick={() => this.changeMainNumber(record.key)}
                    >
                      Establecer como principal
                    </p>
                    <p
                      className="mail-action-item enabled"
                      onClick={() => this.deleteNumber(record.key)}
                    >
                      Eliminar
                    </p>
                  </span>
                );
              }
            }
          }
        ];
        contentBody = (
          <div className="content-body-mail">
            <div className="body-submenu">
              <ul>
                {contentBodySubmenuData.map((item, key) => (
                  <p
                    className={
                      this.state.currentSubmenuView === key
                        ? "body-submenu-item selected"
                        : "body-submenu-item"
                    }
                    key={key}
                    onClick={() => this.handleSubmenuClick(key)}
                  >
                    {item.name}
                  </p>
                ))}
              </ul>
            </div>
            <div className="submenu-content">
              <Collapse
                bordered={false}
                defaultActiveKey={["0", "1", "2", "3"]}
              >
                <Collapse.Panel
                  header="Inicio de sesión y seguridad"
                  key={0}
                  className="custom-panel"
                  id="panel0"
                >
                  <div className="panel-content">
                    <p className="panel-text">
                      Añade o elimina direcciones de correo electrónico en tu
                      cuenta.
                    </p>
                    <div className="mails-list">
                      <Table
                        className="mails-list-table"
                        columns={columns}
                        dataSource={this.state.mailsData}
                        pagination={false}
                        rowClassName={(record, index) => "mail-item"}
                        size="small"
                      />
                      <div className="mail-send-verification">
                        <Input
                          className="mail-send-input"
                          placeholder="Ingresa tu correo electrónico"
                          id="mailInput"
                        />
                        <Button
                          className="mail-send-button"
                          type="primary"
                          onClick={() => this.sendVerificationMail()}
                        >
                          Enviar verificación
                        </Button>
                        <Button className="mail-send-cancel">Cancelar</Button>
                      </div>
                      {!this.state.passwordChanged ? (
                        <div className="mail-password-verification">
                          <img className="shieldp" src={shieldp} alt="Krowdy" />
                          <div className="mail-password-content">
                            <p className="mpc-title">Verificación</p>
                            <p className="mpc-description">
                              Para tu seguridad, introduce tu contraseña para
                              realizar este cambio.
                            </p>
                            <div className="mail-password-content-input">
                              <Input
                                className="password-send-input"
                                placeholder="Ingresa tu contraseña"
                                id="passwordInput"
                                type="password"
                              />
                              <Button
                                className="password-send-button"
                                type="primary"
                                onClick={() => this.sendpasswordChange()}
                              >
                                Listo
                              </Button>
                              <Button className="password-send-cancel">
                                Cancelar
                              </Button>
                            </div>
                            <p className="mpc-forgot-password">
                              Olvidaste tu contraseña
                            </p>
                          </div>
                        </div>
                      ) : (
                        <Alert
                          className="mpv-success"
                          message="Cambios guardados"
                          type="success"
                          showIcon
                        />
                      )}
                    </div>
                  </div>
                </Collapse.Panel>
                <Collapse.Panel
                  header="Números de celular"
                  key={1}
                  className="custom-panel"
                  id="panel1"
                >
                  <div className="panel-content">
                    <p className="panel-text">
                      Añade un numero de celular para hacer mas segura tu
                      cuenta.
                    </p>
                    <div className="number-list">
                      <Table
                        className="mails-list-table"
                        columns={numberColumns}
                        dataSource={this.state.numbersData}
                        pagination={false}
                        rowClassName={(record, index) => "mail-item"}
                        size="small"
                      />
                      {this.state.numberState === "add" ? (
                        <div>
                          <div className="nl-input-row">
                            <p>País</p>
                            <p className="nl-number-label">
                              Número de teléfono
                            </p>
                          </div>
                          <div className="nl-input-row end-input">
                            <Cascader
                              className="nl-input-country"
                              fieldNames={{ label: "name", value: "code" }}
                              options={countryData}
                              onChange={this.onchangeCountryCode}
                              placeholder=""
                              id="countryCode"
                            />
                            <Input
                              className="number-input"
                              placeholder=""
                              id="numberInput"
                            />
                            <Button
                              className="number-send-button"
                              type="primary"
                              onClick={() => this.sendNumberCode()}
                            >
                              Enviar código
                            </Button>
                            <Button className="number-send-cancel">
                              Cancelar
                            </Button>
                          </div>
                          <p className="panel-text">
                            Enviaremos un código a este número; lo necesitarás
                            en el último paso.
                          </p>
                        </div>
                      ) : this.state.numberState === "verify" ? (
                        <div>
                          <p className="panel-text">
                            Tu número de teléfono nos ayuda a mantener la
                            seguridad de tu cuenta. Introduce el código de
                            verificación que acabamos de enviar al número ***
                            *** *{this.state.currentNumber.slice(-2)}.
                          </p>
                          <div className="nl-input-row">
                            <p>Código</p>
                          </div>
                          <div className="nl-input-row">
                            <Input
                              className="code-input"
                              placeholder=""
                              id="codeInput"
                            />
                            <Button
                              className="number-send-button"
                              type="primary"
                              onClick={() => this.sendValidationCode()}
                            >
                              Validar
                            </Button>
                            <Button
                              className="number-send-cancel"
                              onClick={() => this.cancelNumberValidation()}
                            >
                              Cancelar
                            </Button>
                          </div>
                          <Alert
                            className="nc-success"
                            message="Enviado"
                            type="info"
                            showIcon
                          />
                        </div>
                      ) : (
                        <p />
                      )}
                    </div>
                  </div>
                </Collapse.Panel>
                <Collapse.Panel
                  header="Cambiar contraseña"
                  key={2}
                  className="custom-panel"
                  id="panel2"
                >
                  <div className="panel-content">
                    <p className="panel-text">
                      Añade o elimina direcciones de correo electrónico en tu
                      cuenta.
                    </p>
                    <div className="mails-list">
                      {this.state.currentPasswordAlert === "success" ? (
                        <Alert
                          className="pc-alert"
                          message="Tu contraseña se ha cambiado exitosamente"
                          type="success"
                          showIcon
                        />
                      ) : this.state.currentPasswordAlert === "error" ? (
                        <Alert
                          className="pc-alert"
                          message="Error"
                          type="error"
                          showIcon
                        />
                      ) : null}

                      <p className="pc-label">Contraseña actual</p>
                      <Input
                        className="pc-input"
                        placeholder=""
                        id="currentPasswordInput"
                        type="password"
                      />
                      <p className="pc-label">Contraseña nueva</p>
                      <Input
                        className="pc-input"
                        placeholder=""
                        id="newPasswordInput"
                        type="password"
                      />
                      <p className="pc-label">
                        Vuelve a escribir tu contraseña nueva
                      </p>
                      <Input
                        className="pc-input"
                        placeholder=""
                        id="againNewPasswordInput"
                        type="password"
                      />
                      <div className="pc-checkbox">
                        <Checkbox
                          className="pc-checkbox-text"
                          defaultChecked={true}
                        >
                          Solicita que todos los dispositivos inicien sesión con
                          la nueva contraseña
                        </Checkbox>
                      </div>
                      <Button
                        type="primary"
                        onClick={() => this.changeCurrentPassword()}
                      >
                        Guardar
                      </Button>
                    </div>
                  </div>
                </Collapse.Panel>
                <Collapse.Panel
                  header="Conexiones"
                  key={3}
                  className="custom-panel"
                  id="panel3"
                >
                  <div className="panel-content">
                    <p className="panel-text">
                      Redes sociales a conectadas a tu cuenta de Krowdy.
                    </p>
                    <div className="mails-list">
                      <List
                        className="sn-list"
                        itemLayout="horizontal"
                        dataSource={this.state.socialNetworksData.filter(
                          item => item.connected === true
                        )}
                        renderItem={item => (
                          <List.Item
                            key={item.key}
                            actions={[
                              <p
                                className="sn-cancel-access"
                                onClick={() =>
                                  this.cancelSocialNetworkAccess(item.key)
                                }
                              >
                                Revocar acceso
                              </p>
                            ]}
                          >
                            <List.Item.Meta
                              avatar={<Avatar src={item.icon} />}
                              title={
                                <a href={item.website}>
                                  Estás conectado a <b>{item.name}</b>
                                </a>
                              }
                              description={item.code}
                            />
                          </List.Item>
                        )}
                      />
                      <List
                        className="sn-list sn-not-connected"
                        itemLayout="horizontal"
                        dataSource={this.state.socialNetworksData.filter(
                          item => item.connected === false
                        )}
                        renderItem={item => (
                          <List.Item
                            key={item.key}
                            actions={[
                              <Button
                                onClick={() =>
                                  this.connectSocialNetwork(item.key)
                                }
                              >
                                Conectarse con &nbsp;<b>{item.name}</b>
                              </Button>
                            ]}
                          >
                            <List.Item.Meta
                              avatar={<Avatar src={item.icon} />}
                              title={
                                <a href={item.website}>
                                  Conectarse con <b>{item.name}</b>
                                </a>
                              }
                            />
                          </List.Item>
                        )}
                      />
                    </div>
                  </div>
                </Collapse.Panel>
              </Collapse>
            </div>
          </div>
        );
        break;
      case "app":
        contentBody = <p>Nothing to see here :)</p>;
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
