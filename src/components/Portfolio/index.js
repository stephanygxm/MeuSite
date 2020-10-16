import React, { Component } from "react";
import Header from "../../components/Header/index";

import "./portfolio.css";

import Cadastro from "../../assets/imagens/portfolio/proj1.png";
import Lista from "../../assets/imagens/portfolio/proj2.png";
import BoxModel from "../../assets/imagens/portfolio/proj3.png";
import Convite from "../../assets/imagens/portfolio/proj4.png";
import Renda from "../../assets/imagens/portfolio/proj5.png";
import Idade from "../../assets/imagens/portfolio/proj6.png";
import Carreiras from "../../assets/imagens/portfolio/proj7.png";
import Agenda from "../../assets/imagens/portfolio/proj8.png";

export default class Frase extends Component {
  render() {
    return (
      <div id="tudo">
        <Header />
        <div class="title">
          <h2>Portfolio</h2>
        </div>
        <section class="portfolio">
          <section class="projeto">
            <h3>Projetos Front-End</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquat enim
              ad minim.
            </p>
          </section>
          <section class="imgproj">
            <div class="projeto1">
              <a
                href="https://codesandbox.io/s/cadastro-projeto-gtzqt"
                target="_blanck"
              >
                <img src={Cadastro} alt="projeto1" />
              </a>
            </div>
            <div class="projeto2">
              <a
                href="https://codesandbox.io/s/lista-compras-frwmb"
                target="_blanck"
              >
                <img src={Lista} alt="projeto2" />
              </a>
            </div>
            <div class="projeto3">
              <a
                href="https://codesandbox.io/s/box-model-7hbju"
                target="_blanck"
              >
                <img src={BoxModel} alt="projeto3" />
              </a>
            </div>
            <div class="projeto4">
              <a
                href="https://codesandbox.io/s/convite-css-flex-coug7"
                target="_blanck"
              >
                <img src={Convite} alt="projeto4" />
              </a>
            </div>
            <div class="projeto5">
              <a
                href="https://codesandbox.io/s/renda-facil-t8ob9"
                target="_blanck"
              >
                <img src={Renda} alt="projeto5" />
              </a>
            </div>
            <div class="projeto6">
              <a
                href="https://codesandbox.io/s/idade-js-dfzil"
                target="_blanck"
              >
                <img src={Idade} alt="projeto6" />
              </a>
            </div>
            <div class="projeto7">
              <a
                href="https://codesandbox.io/s/carreiras-js-tbh8o"
                target="_blanck"
              >
                <img src={Carreiras} alt="projeto7" />
              </a>
            </div>
            <div class="projeto8">
              <a
                href="https://codesandbox.io/s/agenda-shift-m9h2u"
                target="_blanck"
              >
                <img src={Agenda} alt="projeto8" />
              </a>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
