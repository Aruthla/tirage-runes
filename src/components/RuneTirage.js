import React, { useState } from 'react';

// Liste des runes (avec leur réversibilité)
const runes = [
    { nom: 'Fehu', reversible: true },
    { nom: 'Uruz', reversible: false },
    { nom: 'Thurisaz', reversible: true },
    { nom: 'Ansuz', reversible: false },
    { nom: 'Raido', reversible: true },
    { nom: 'Kenaz', reversible: false },
    { nom: 'Gebo', reversible: true },
    { nom: 'Wunjo', reversible: false },
    { nom: 'Hagalaz', reversible: true },
    { nom: 'Naudhiz', reversible: false },
    { nom: 'Isa', reversible: true },
    { nom: 'Jera', reversible: false },
    { nom: 'Eihwaz', reversible: true },
    { nom: 'Perthro', reversible: false },
    { nom: 'Algiz', reversible: true },
    { nom: 'Sowilo', reversible: false },
    { nom: 'Tiwaz', reversible: true },
    { nom: 'Berkano', reversible: false },
    { nom: 'Ehwaz', reversible: true },
    { nom: 'Mannaz', reversible: false },
    { nom: 'Laguz', reversible: true },
    { nom: 'Ingwaz', reversible: false },
    { nom: 'Dagaz', reversible: true },
    { nom: 'Othala', reversible: false }
];

const RuneTirage = () => {
    const [resultatTirage, setResultatTirage] = useState([]);
    const [nombreRunes, setNombreRunes] = useState(1);

    // Fonction de tirage des runes
    const tirerRunes = (nombre) => {
        const runesDisponibles = [...runes];
        const runesTirees = [];
        for (let i = 0; i < nombre; i++) {
            const index = Math.floor(Math.random() * runesDisponibles.length);
            const runeTiree = runesDisponibles.splice(index, 1)[0];
            runesTirees.push(runeTiree);
        }
        setResultatTirage(runesTirees);
    };

    return (
        <div>
            <h2>Sélectionnez votre tirage</h2>
            <label htmlFor="nombre-runes">Choisissez le nombre de runes :</label>
            <select
                id="nombre-runes"
                value={nombreRunes}
                onChange={(e) => setNombreRunes(parseInt(e.target.value))}
            >
                <option value="1">1 Rune</option>
                <option value="3">3 Runes</option>
                <option value="4">4 Runes</option>
            </select>
            <button onClick={() => tirerRunes(nombreRunes)}>Tirer les Runes</button>

            <div id="resultat-tirage">
                {resultatTirage.length > 0 && (
                    <div>
                        {resultatTirage.map((rune, index) => (
                            <div key={index} className="rune">
                                {rune.nom} {rune.reversible ? '(Réversible)' : '(Non réversible)'}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RuneTirage;
