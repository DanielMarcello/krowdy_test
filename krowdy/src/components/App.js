import React, { Component } from "react";
import Header from "./global/Header";
import Footer from "./global/Footer";
import Content from "./global/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
