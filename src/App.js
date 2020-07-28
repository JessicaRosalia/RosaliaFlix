import React from 'react';
import Logo from './components/Logo/index.js';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import Link from './components/Link';

function App() {
  return (
    <>
      <Header>
        <Logo />

        <Button>Novo Vídeo</Button>
      </Header>

      <Footer>
        <Logo />
        <p>Site feito na <strong>#ImersãoReact</strong> da <Link href="https://alura.com.br">Alura</Link> </p>
      </Footer>

    </>
  );
}

export default App;
