import '../styles/App.css'
import '../styles/index.css'
import { useState } from 'react'

function App() {  

  return (
    <div id="container">
  
      <header id="navbar">
        <section className="logo">
          <h1 className="logo-header">PB</h1>
        </section>
        <section className="content-text">
          <a href="">Login</a>
        </section>
      </header>

      <main id='content-home'>
        <h1 className='title-main'>ProBook</h1>
        <p>Portfolio Construído By Mateus Paz e Elias Santos.</p>
        <button className='btn'>Seja PRO</button>
      </main>

      <footer>
        <a href="https://github.com/Dolias18">GitHub: Elias Santos</a>
        <p>&copy; Elias e Mateus Created Jun/2023.</p>
        <a href="">GitHub: Mateus Paz</a>
      </footer>

    </div>
  )
}

export default App
