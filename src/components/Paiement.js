import React, { useState } from 'react';

const Paiement = ({ setFormData }) => {
  const [paiementMethod, setPaiementMethod] = useState('');

  const handlePaymentChange = (e) => {
    setPaiementMethod(e.target.value);
    setFormData({ paiement: e.target.value });
  };

  return (
    <div>
      <h3>Méthode de paiement</h3>
      <label>
        <input
          type="radio"
          name="paiement"
          value="paypal"
          checked={paiementMethod === 'paypal'}
          onChange={handlePaymentChange}
        />
        PayPal
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="paiement"
          value="carte_bancaire"
          checked={paiementMethod === 'carte_bancaire'}
          onChange={handlePaymentChange}
        />
        Carte bancaire
      </label>
      <br />

      {paiementMethod === 'paypal' && (
        <div>
          {/* Intégration PayPal ici */}
          <h4>Payez avec PayPal</h4>
          <p>Vous serez redirigé vers PayPal pour effectuer le paiement.</p>
          {/* Ajoute ici le bouton ou le script d'intégration PayPal */}
        </div>
      )}

      {paiementMethod === 'carte_bancaire' && (
        <div>
          {/* Intégration de Stripe ici */}
          <h4>Payez avec votre carte bancaire</h4>
          <p>Entrez vos informations de carte bancaire.</p>
          {/* Ajoute ici un formulaire Stripe */}
        </div>
      )}
    </div>
  );
};

export default Paiement;
