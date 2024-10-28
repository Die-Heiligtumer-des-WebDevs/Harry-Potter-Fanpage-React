import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importiere useNavigate für die Navigation
import '../styles/components/zauberschule.css';



// ich habe useNavigate auskommentiert, da der AppRouter noch nicht bereit ist. Nicht vergessen später useNavigate auszukommentieren.

const HogwartsQuiz = () => {
  const [step, setStep] = useState(1); // Zustand für den aktuellen Schritt
  const [houseScores, setHouseScores] = useState({
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0
  });
  const [houseAssigned, setHouseAssigned] = useState(null); // Zustand für das zugewiesene Haus
//   const navigate = useNavigate(); //  für Navigation

  const handleAnswer = (question, house, percentage) => {
    // Aktualisiere die Punktzahl für das ausgewählte Haus
    setHouseScores(prevScores => {
      const newScores = {
        ...prevScores,
        [house]: prevScores[house] + percentage
      };

      if (question === 1) {
        setStep(2); // Gehe zur nächsten Frage
      } else {
        // Weisen Sie das Haus basierend auf den höchsten Punkten zu
        assignHouse(newScores);
      }

      return newScores; // Rückgabe des aktualisierten Scores
    });
  };

  const assignHouse = (scores) => {
    // Berechnung des Hauses mit den höchsten Punkten
    const assignedHouse = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    setHouseAssigned(assignedHouse); // Zuweisung des Hauses
  };

//   Automatische Weiterleitung zur Homepage nach 2 Sekunden
//   useEffect(() => {
//     if (houseAssigned) {
//       const timer = setTimeout(() => {
//         navigate('/home'); // Navigiere nach 2 Sekunden zur Homepage
//       }, 2000);

//       return () => clearTimeout(timer); // Timer bereinigen, wenn der Effekt endet
//     }
//   }, [houseAssigned, navigate]);

  const handleBackToHomepage = (e) => {
    e.preventDefault();
    // navigate('/home'); // Navigiere zurück zur Homepage
  };

  return (
    <div className="quiz-overlay">
      <div className="quiz-container">
        <div className="question-header">
          {houseAssigned ? 'Dein Hogwarts-Haus' : `Frage ${step}`}
        </div>
        <div className="question-box">
          {/* Frage 1 */}
          {step === 1 && (
            <>
              <div className="question-text">Was ist deine größte Stärke?</div>
              <div className="answer-options">
                <button onClick={() => handleAnswer(1, 'Gryffindor', 50)}>Mut</button>
                <button onClick={() => handleAnswer(1, 'Ravenclaw', 50)}>Intelligenz</button>
                <button onClick={() => handleAnswer(1, 'Hufflepuff', 50)}>Treue</button>
                <button onClick={() => handleAnswer(1, 'Slytherin', 50)}>Ehrgeiz</button>
              </div>
            </>
          )}

          {/* Frage 2 */}
          {step === 2 && !houseAssigned && (
            <>
              <div className="question-text">Welche dieser Eigenschaften bewunderst du am meisten?</div>
              <div className="answer-options">
                <button onClick={() => handleAnswer(2, 'Gryffindor', 30)}>Tapferkeit</button>
                <button onClick={() => handleAnswer(2, 'Ravenclaw', 30)}>Weisheit</button>
                <button onClick={() => handleAnswer(2, 'Hufflepuff', 30)}>Fairness</button>
                <button onClick={() => handleAnswer(2, 'Slytherin', 30)}>Führung</button>
              </div>
            </>
          )}

          {/* Zuweisung des Hauses nach der zweiten Frage */}
          {houseAssigned && (
            <div className="assigned">
              Du wurdest {houseAssigned} zugewiesen!<br />
              Du wirst in Kürze zur Homepage weitergeleitet...
            </div>
          )}
        </div>

        {/* Zurück zur Homepage */}
        <button className="back-button" onClick={handleBackToHomepage}>Zurück zur Homepage</button>
      </div>
    </div>
  );
};

export default HogwartsQuiz;
