import React, { useState } from 'react';

const SousQuestions = ({ setFormData }) => {
  const [sousQuestions, setSousQuestions] = useState([]);

  const options = [
    "Vers quoi s'oriente par exemple : les finances, ce projet, cette relation… ?",
    "Comment va se dérouler par exemple : ce voyage, cet entretien… ?",
    "Quel conseil puis-je obtenir des runes en lien avec mon questionnement ?",
    "A quel obstacle dois-je m'attendre ?",
    "Quelle aide pourrais m'être apportée ?",
    "Comment suis-je perçu dans cette relation ?",
    "Est-ce le bon moment pour envisager une relation sentimentale ?",
    "Quelles sont les possibilités d'une relation amoureuse dans les six prochains mois ?"
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSousQuestions((prevQuestions) =>
      checked ? [...prevQuestions, value] : prevQuestions.filter((item) => item !== value)
    );
    setFormData({ sousQuestions });
  };

  return (
    <div>
      <h3>Sous-questions (choisissez jusqu'à 4)</h3>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option}
            onChange={handleCheckboxChange}
            disabled={sousQuestions.length >= 4 && !sousQuestions.includes(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default SousQuestions;
