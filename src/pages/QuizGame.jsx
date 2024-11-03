import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import fragen from "../utils/data/quizFragen.json";
import "../styles/main.scss";
import "../fonts/HarryP-MVZ6w.ttf";

const QuizGame = () => {
  const [aktuelleFrageIndex, setAktuelleFrageIndex] = useState(0);
  const [punkte, setPunkte] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [questionCount, setQuestionCount] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const navigate = useNavigate();

  const handleBackToGames = (e) => {
    e.preventDefault();
    navigate("/games");
  };

  const handleAntwort = (option) => {
    const istKorrekt = option === fragen[aktuelleFrageIndex].answer;

    if (istKorrekt) {
      setPunkte(punkte + 1);
      setCorrectAnswers(correctAnswers + 1);
      setFeedback("Richtig!");
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setFeedback("Leider falsch");
    }

    setTimeout(() => {
        setAktuelleFrageIndex(aktuelleFrageIndex + 1);
        if (aktuelleFrageIndex < fragen.length) {
          setQuestionCount(questionCount + 1);
        } else {
          // End of quiz reached
        setFeedback(null);
        }
    }, 1000);
  };

  const handleRestartQuiz = () => {
    setAktuelleFrageIndex(0);
    setPunkte(0);
    setQuestionCount(1);
    setFeedback(null);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
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
              <div className="questionCount">
                Frage {questionCount} von {fragen.length}
              </div>
              {feedback && <p className="feedback">{feedback}</p>}
            </>
          ) : (
            <div className="result">
              <h3>Quiz abgeschlossen!</h3>
              <p>Du hast {punkte} von {fragen.length} Punkten erreicht.</p>
              <p>Korrekte Antworten: {correctAnswers}</p>
              <p>Falsche Antworten: {incorrectAnswers}</p>
              <p>Möchtest du das Quiz wiederholen?</p>
              <button className="round-restart-button" onClick={handleRestartQuiz}>
                ⟳ Quiz neu starten
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="back-button-container">
        <button className="back-button" onClick={handleBackToGames}>
          Zurück zur Games
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
