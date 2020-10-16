import React, { Component } from "react";
import Header from "../../components/Header/index";

import Eu from "../../assets/imagens/home/eu.jpg";

import "./me.css";

export default class Frase extends Component {
  render() {
    return (
      <div class="tudo">
        <Header />
        <div class="container2">
          <div class="sobremim">
            <section class="texto">
              <article class="sobre">
                <h2>Sobre Mim</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliquat enim ad minim.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliquat enim ad minim.
                </p>
              </article>
              <article class="motivação">
                <h3>Minha motivação</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliquat enim ad minim.
                </p>
              </article>
            </section>
          </div>
          <div class="menuimg">
            <img src={Eu} alt="me" />
          </div>
        </div>
      </div>
    );
  }
}
