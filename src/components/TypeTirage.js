import React, { useState } from 'react';

const TypeTirage = ({ setFormData }) => {
  const [tirage, setTirage] = useState('');
  const [question, setQuestion] = useState('');

  const handleTirageChange = (e) => {
    setTirage(e.target.value);
    setFormData({ tirage, question });
  };

  return (
    <div>
      <h3>Type de tirage</h3>
      <div>
        <label>
          <input
            type="radio"
            name="tirage"
            value="1_rune_conseil"
            onChange={handleTirageChange}
          />{' '}
          Tirage 1 rune : Conseil
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="tirage"
            value="1_rune_futur"
            onChange={handleTirageChange}
          />{' '}
          Tirage 1 rune : Futur
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="tirage"
            value="3_runes_passe_present_futur"
            onChange={handleTirageChange}
          />{' '}
          Tirage 3 runes : PASSE, PRESENT, FUTUR
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="tirage"
            value="3_runes_present_futur_conseil"
            onChange={handleTirageChange}
          />{' '}
          Tirage 3 runes : PRESENT, FUTUR, CONSEIL
        </label>
        <br />
        <textarea
          placeholder="Votre question"
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default TypeTirage;
