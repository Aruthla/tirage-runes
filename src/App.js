import React, { useState } from 'react';
import InformationsPersonnelles from './components/InformationsPersonnelles';
import SujetQuestionnement from './components/SujetQuestionnement';
import TypeTirage from './components/TypeTirage';
import SousQuestions from './components/SousQuestions';
import Paiement from './components/Paiement';

function App() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: [],
    autreSujet: '',
    tirage: '',
    question: '',
    sousQuestions: [],
    paiement: ''
  });

  const handleFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with the following data:', formData);
    // Traitement du paiement et envoi des données du formulaire.
  };

  return (
    <div className="App">
      <h1>Formulaire de Tirage des Runes</h1>
      <form onSubmit={handleSubmit}>
        <InformationsPersonnelles setFormData={handleFormData} />
        <SujetQuestionnement setFormData={handleFormData} />
        <TypeTirage setFormData={handleFormData} />
        <SousQuestions setFormData={handleFormData} />
        <Paiement setFormData={handleFormData} />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default App;
