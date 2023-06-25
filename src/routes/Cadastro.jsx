import React from 'react';
import '../styles/index.css';
import '../styles/Cadastro.css';
import BtnLogin from '../components/BtnLogin';

function Cadastro() {
  return (
    <div id="container">
      <header id="navbar">
        <section className="logo">
          <h1 className="logo-header">ProBook</h1>
        </section>
        <section className="content-text">
            <BtnLogin />
        </section>
      </header>

      <main id="container-cadastro">
        <h1>Cadastre-se já e faça parte da nossa comunidade PRO </h1>

        <section className='container-form'>
          <section className="card-input">
            <div className="content-input">
              <label>Nome Completo:</label>
              <input type="text" placeholder="Leonardo Santana" />
            </div>

            <div className="content-input">
              <label>Senha:</label>
              <input type="text" placeholder="leonardo12345" />
            </div>
          </section>

          <section className="card-input">
            <div className="content-input">
              <label>E-Mail:</label>
              <input type="text" placeholder="leonardosantana32@gmail.com" />
            </div>

            <div className="content-input">
              <label>Confirmar Senha:</label>
              <input type="text" placeholder="Leonardo12345" />
            </div>
          </section>
        </section>
        <section className="content-btn">
          <button>Seja PRO</button>
          <div className='content-info'>
            <p>
                Não perca mais nada sobre oque acontece em nossa plataforma, acesso
                gratuito! Aproveite já!
            </p>
            <p className='link'>
                Ja tem Acesso? <a href="">Clique Aqui!</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Cadastro