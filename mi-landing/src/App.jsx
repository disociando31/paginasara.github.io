import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problema from './components/Problema';
import Sistema from './components/Sistema';
import Usuario from './components/Usuario';
import Propuesta from './components/Propuesta';
import Evidencia from './components/Evidencia';
import Accion from './components/Accion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Problema />
      <Sistema />
      <Usuario />
      <Propuesta />
      <Evidencia />
      <Accion />
      <Footer />
    </div>
  );
}
