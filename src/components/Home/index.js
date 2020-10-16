import React, { Component } from "react";
import "../../styles.css";
import Header from "../../components/Header/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import Eu from "../../assets/imagens/home/eu.jpg";

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div class="tudo">
        <Header />
        <div class="container">
          <section class="barra">
            <div class="imagem">
              <img src={Eu} alt="me" />
            </div>
          </section>
          <section class="principal">
            <article class="info">
              <h1>Stephany Xavier</h1>
              <p>
                20 anos, cursando Engenharia de Produção (6° Período) pelo
                Centro Universitário UniFBV. Pesquisadora nata e amante da
                tecnologia, sou uma pessoa que está sempre em busca de mais
                conhecimento e motivada pelo desejo de aprender coisas novas,
                enxergo a tecnologia como uma aliada e fonte de inspiração para
                inovação. Sem experiência profissional, mas sempre com
                disposição e força de vontade para encarar desafios e buscar
                soluções para cada um deles.
              </p>
              <span class="links">
                <a
                  class="icon-rede"
                  href="https://www.linkedin.com/in/stephany-muniz-126428185/"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a class="icon-rede" href="https://github.com/stephanygxm">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  class="icon-rede"
                  href="https://www.instagram.com/stephanygxm/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </span>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
