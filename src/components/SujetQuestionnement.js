import React, { useState } from 'react';

const SujetQuestionnement = ({ setFormData }) => {
  const [sujet, setSujet] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSujet((prevSujet) =>
      checked ? [...prevSujet, value] : prevSujet.filter((item) => item !== value)
    );
    setFormData({ sujet });
  };

  return (
    <div>
      <h3>Sujet de votre questionnement</h3>
      <label>
        <input
          type="checkbox"
          value="Couple"
          onChange={handleCheckboxChange}
        />{' '}
        Couple
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Célibataire"
          onChange={handleCheckboxChange}
        />{' '}
        Célibataire
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Relationnel"
          onChange={handleCheckboxChange}
        />{' '}
        Relationnel
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Carrière"
          onChange={handleCheckboxChange}
        />{' '}
        Carrière
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Spiritualité"
          onChange={handleCheckboxChange}
        />{' '}
        Spiritualité
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Projets"
          onChange={handleCheckboxChange}
        />{' '}
        Projets
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Famille"
          onChange={handleCheckboxChange}
        />{' '}
        Famille
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Etudes/Formation"
          onChange={handleCheckboxChange}
        />{' '}
        Etudes/Formation
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Finances"
          onChange={handleCheckboxChange}
        />{' '}
        Finances
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Déplacements/Voyages"
          onChange={handleCheckboxChange}
        />{' '}
        Déplacements/Voyages
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Autre"
          onChange={handleCheckboxChange}
        />{' '}
        Autre (précisez ci-dessous)
      </label>
      <br />
      {sujet.includes('Autre') && (
        <input
          type="text"
          placeholder="Précisez votre sujet"
          onChange={(e) => setFormData({ autreSujet: e.target.value })}
        />
      )}
    </div>
  );
};

export default SujetQuestionnement;
