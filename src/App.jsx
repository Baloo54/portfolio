import React from 'react';
import Accueil from './components/Accueil.jsx';
import APropos from './components/APropos.jsx';
import Competences from './components/Competences.jsx';
import Stage from './components/Stage.jsx';
import Projets from './components/Projets.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div>
       <Navbar />
      <Accueil />
      <APropos />
      <Competences />
      <Stage />
      <Projets />
    </div>
  );
}

export default App;
