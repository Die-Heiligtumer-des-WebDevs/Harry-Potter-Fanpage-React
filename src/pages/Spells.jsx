import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
// CSS importieren

function SpellsPage() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSpell, setActiveSpell] = useState(null); // Speichert den geklickten Spell
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("spells")
      .then((data) => {
        setSpells(data);  
        setLoading(false);
      })
      .catch((e) => {
        setError(JSON.stringify(e));  
        setLoading(false);
      });
  }, []);  // Füge das leere Abhängigkeitsarray hinzu

  // Funktion, um die Position zufällig zu setzen
  const randomPosition = () => {
    const top = Math.random() * 80 + 10; // 10vh - 90vh
    const left = Math.random() * 80 + 10; // 10vw - 90vw
    return { top: `${top}vh`, left: `${left}vw` };
  };

  // Funktion, um Verzögerung für Animation zu setzen
  const spellDelay = () => {
    return `${Math.random() * 2}s`;
  };

  const handleClick = (spell) => {
    setActiveSpell(spell); // Setzt den geklickten Spell als aktiv
  };

  if (loading) {
    return <div className="loading">Zaubersprüche werden geladen...</div>;
  }

  return (
    <div className="spells-page">
      <h1 className="title">Zaubersprüche</h1>
      <div className="spells-container">
        {spells.map((spell, index) => {
          const { top, left } = randomPosition(); // Generiere eine zufällige Position für jeden Spell
          return (
            <p
              key={index}
              className={`spell ${activeSpell === spell ? "active" : ""}`}
              onClick={() => handleClick(spell)}
              style={{
                top,
                left,
                animationDelay: spellDelay(),
              }}
            >
              {spell.name}
            </p>
          );
        })}
      </div>
      {activeSpell && (
        <div className="spell-details">
          <h2>{activeSpell.name}</h2>
          <p>{activeSpell.description}</p>
          <button onClick={() => setActiveSpell(null)}>Schließen</button>
        </div>
      )}
    </div>
  );
}

export default SpellsPage;
