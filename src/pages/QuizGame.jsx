import React, { useState, useEffect } from 'react';
import fragen from '../data/quizFragen.json';
import '../styles/components/quizGame.css';
import "../fonts/HarryP-MVZ6w.ttf"

const QuizGame = () => {
  const [aktuelleFrageIndex, setAktuelleFrageIndex] = useState(0);
  const [punkte, setPunkte] = useState(0);
  const [highscore, setHighscore] = useState(() => {
    return parseInt(localStorage.getItem('highscore'), 10) || 0;
  });
  const [feedback, setFeedback] = useState(null);

  // Highscore speichern, wenn es aktualisiert wird
  useEffect(() => {
    if (punkte > highscore) {
      setHighscore(punkte);
      localStorage.setItem('highscore', punkte);
    }
  }, [punkte, highscore]);

  // Quiz zurücksetzen nach 10 Fragen
  useEffect(() => {
    if (aktuelleFrageIndex === fragen.length) {
      setHighscore(0);
      localStorage.setItem('highscore', 0);
    }
  }, [aktuelleFrageIndex]);

  const handleAntwort = (option) => {
    const istKorrekt = option === fragen[aktuelleFrageIndex].answer;

    if (istKorrekt) {
      setPunkte(punkte + 1);
      setFeedback("Richtig!");
      setTimeout(() => {
        setAktuelleFrageIndex(aktuelleFrageIndex + 1);
        setFeedback(null);
      }, 1000);
    } else {
      setFeedback("Falsch, versuche es erneut.");
    }
  };

  return (
    <div className= "allefragen">
    <div className="quiz-container">
      <div className="quiz-box">
        <h2>Harry Potter Quiz</h2>
        <p>Highscore: {highscore}</p>
        {aktuelleFrageIndex < fragen.length ? (
          <>
            <h3>{fragen[aktuelleFrageIndex].question}</h3>
            <div className="optionen">
              {fragen[aktuelleFrageIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAntwort(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback && <p className="feedback">{feedback}</p>}
          </>
        ) : (
          <div className="result">
            <h3>Quiz abgeschlossen!</h3>
            <p>Deine Punktzahl: {punkte}</p>
            <button onClick={() => {
              setAktuelleFrageIndex(0);
              setPunkte(0);
            }}>Quiz neu starten</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default QuizGame;
