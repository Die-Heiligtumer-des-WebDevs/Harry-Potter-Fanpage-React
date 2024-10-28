import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import "../styles/components/SpellsPageStyle.css";

function SpellsPage() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSpell, setActiveSpell] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("spells")
      .then((data) => {
        setSpells(data);
        setLoading(false);
      })
      .catch((e) => {
        setError("Fehler beim Laden der Zaubersprüche. Bitte versuchen Sie es später erneut.");
        setLoading(false);
      });

    return () => setActiveSpell(null); // Cleanup when component unmounts
  }, []);

  const randomPosition = () => {
    const top = Math.random() * 80 + 10;
    const left = Math.random() * 80 + 10;
    return { top: `${top}%`, left: `${left}%` };
  };

  const spellDelay = () => `${Math.random() * 2}s`;

  const handleClick = (spell) => setActiveSpell(spell);

  if (loading) {
    return <div className="loading">Zaubersprüche werden geladen...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="zaubersprüche">
      <div className="spells-page">
        <h1 className="title">Zaubersprüche</h1>
        <div className="spells-container">
          {spells.slice(1, 40).map((spell, index) => {
            const { top, left } = randomPosition();
            return (
              <p
                key={index}
                className="spell"
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
          <div className="spell-details active">
            <h2>{activeSpell.name}</h2>
            <p>{activeSpell.description}</p>
            <button onClick={() => setActiveSpell(null)}>Schließen</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpellsPage;
