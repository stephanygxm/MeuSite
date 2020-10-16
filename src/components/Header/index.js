import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <nav>
          <Link exact to="/">
            HOME
          </Link>
          <Link to="/me">SOBRE MIM </Link>
          <Link to="/portfolio">PORTFOLIO</Link>
          <a href="https://stephanygxm.000webhostapp.com/" target="_blanck">
            CURRÍCULO
          </a>
        </nav>
      </div>
    );
  }
}
