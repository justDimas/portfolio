import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/gilroy-font.css'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
	 <main className='body'>
		<About/>
		<Skills/>
		<Portfolio/>
	 </main>
	<Footer/>
  </React.StrictMode>
);
