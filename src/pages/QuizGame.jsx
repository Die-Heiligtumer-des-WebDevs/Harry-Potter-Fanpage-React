import React, { useState, useEffect } from "react";
import fragen from "../utils/data/quizFragen.json";
// import '../styles/components/quizGame.css';
import "../styles/main.scss";
import "../fonts/HarryP-MVZ6w.ttf";

const QuizGame = () => {
  const [aktuelleFrageIndex, setAktuelleFrageIndex] = useState(0);
  const [punkte, setPunkte] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [questionCount, setQuestionCount] = useState(1)

  // Highscore speichern, wenn es aktualisiert wird
  
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

    setQuestionCount(questionCount + 1);

  };

  return (
    <div className="allefragen">
      <div className="quiz-container">
        <div className="quiz-box">
          <h2>Harry Potter Quiz</h2>
          
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
              <div className="questionCount"> Frage {questionCount} von 10</div>
              {feedback && <p className="feedback">{feedback}</p>}
            </>
          ) : (
            <div className="result">
              <h3>Quiz abgeschlossen!</h3>
             
              <button
                onClick={() => {
                  setAktuelleFrageIndex(0);
                }}
              >
                Quiz neu starten
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
