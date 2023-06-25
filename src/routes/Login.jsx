import React from 'react';
import '../styles/index.css';
import '../styles/Login.css';
import BtnCad from '../components/BtnCad';


function Login() {
  return (
    <div id="container">
      <header id="navbar">
        <section className="logo">
          <h1 className="logo-header">ProBook</h1>
        </section>
        <section className="content-text">
            <BtnCad/>
        </section>
      </header>

      <main id="container-login">
        <h1>Acesso a Conta PRO</h1>

        <section className="container-form">
          <section className="card-input">
            <div className="content-input">
              <label>E-Mail:</label>
              <input type="text" placeholder="leonardosantana32@gmail.com" />
            </div>
          </section>

          <section className="card-input">
            <div className="content-input">
              <label>Senha:</label>
              <input type="text" placeholder="leonardo12345" />
            </div>
          </section>
        </section>
        <section className="content-btn">
          <button>Logar-se</button>
          <div className="content-info">
            <p>
              Não perca mais nada sobre oque acontece em nossa plataforma,
              acesso gratuito! Aproveite já!
            </p>
            <p className="link">
              Esqueceu e Senha? <a href="">Clique Aqui!</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login