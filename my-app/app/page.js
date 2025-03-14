"use client"; // Indica que este é um componente do lado do cliente

import { useState } from 'react';

export default function Home() {
  const [valorDado, setValorDado] = useState(1);

  const gerarNumeroAleatorio = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  // Links dos ícones do Flaticon para cada valor do dado
  const imagens = {
    1: 'https://cdn-icons-png.flaticon.com/512/0/751.png',
    2: 'https://cdn-icons-png.flaticon.com/512/0/2.png', 
    3: 'https://cdn-icons-png.freepik.com/512/318/318644.png', 
    4: 'https://cdn-icons-png.flaticon.com/512/0/963.png', 
    5: 'https://cdn-icons-png.flaticon.com/512/64/64409.png', 
    6: 'https://cdn-icons-png.freepik.com/512/318/318646.png',
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Jogo de Dados</h1>
      <div style={styles.dadoContainer}>
        <img
          src={imagens[valorDado]}
          alt={`Dado mostrando o valor ${valorDado}`}
          style={styles.dadoImagem}
        />
      </div>
      <button onClick={gerarNumeroAleatorio} style={styles.botao}>
        Jogar Dado
      </button>
    </div>
  );
}

// Estilos inline
const styles = {
  container: {
    backgroundColor: '#ffffff', // Fundo branco
    minHeight: '100vh', // Cobrir toda a altura da tela
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  titulo: {
    fontSize: '2.5rem',
    color: '#ff0000', // Cor vermelha
    marginBottom: '20px',
  },
  dadoContainer: {
    backgroundColor: '#ff0000', // Fundo vermelho
    borderRadius: '15px', // Borda arredondada
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra suave
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dadoImagem: {
    width: '120px',
    height: '120px',
    filter: 'brightness(0) invert(1)', // Transforma a imagem do dado em branco
  },
  botao: {
    marginTop: '30px',
    padding: '15px 30px',
    fontSize: '1.2rem',
    backgroundColor: '#ff0000', // Fundo vermelho
    color: '#ffffff', // Texto branco
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};