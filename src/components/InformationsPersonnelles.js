import React, { useState } from 'react';

const InformationsPersonnelles = ({ setFormData }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleChange = () => {
    setFormData({
      nom,
      prenom,
      email,
      telephone
    });
  };

  return (
    <div>
      <h3>Informations personnelles</h3>
      <label>
        Nom:
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          onBlur={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Prénom:
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          onBlur={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Téléphone (optionnel):
        <input
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          onBlur={handleChange}
        />
      </label>
      <br />
    </div>
  );
};

export default InformationsPersonnelles;
