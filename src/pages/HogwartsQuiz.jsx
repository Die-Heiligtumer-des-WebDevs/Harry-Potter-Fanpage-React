import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.scss";


const HogwartsQuiz = () => {
  const [step, setStep] = useState(1);
  const [houseScores, setHouseScores] = useState({
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
  });
  const [houseAssigned, setHouseAssigned] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (question, house, percentage) => {
    setHouseScores((prevScores) => {
      const newScores = {
        ...prevScores,
        [house]: prevScores[house] + percentage,
      };

      if (question === 1) {
        setStep(2);
      } else {
        assignHouse(newScores);
      }

      return newScores;
    });
  };

  const assignHouse = (scores) => {
    const assignedHouse = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    setHouseAssigned(assignedHouse);
  };

  const handleBackToHomepage = (e) => {
    e.preventDefault();
    navigate("/games");
  };

  return (
    <div className="quiz-overlay">
      <div className="quiz-container2">
        <div className="question-header">
          {houseAssigned ? "Dein Hogwarts-Haus" : `Frage ${step}`}
        </div>
        <div className="question-box">
          {step === 1 && (
            <>
              <div className="question-text">Was ist deine größte Stärke?</div>
              <div className="answer-options">
                <div className="answers-row">
                  <button className="answer" onClick={() => handleAnswer(1, "Gryffindor", 50)}>
                    Mut
                  </button>
                  <button className="answer" onClick={() => handleAnswer(1, "Ravenclaw", 50)}>
                    Intelligenz
                  </button>
                </div>
                <div className="answers-row">
                  <button className="answer" onClick={() => handleAnswer(1, "Hufflepuff", 50)}>
                    Treue
                  </button>
                  <button className="answer" onClick={() => handleAnswer(1, "Slytherin", 50)}>
                    Ehrgeiz
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 2 && !houseAssigned && (
            <>
              <div className="question-text">Welche dieser Eigenschaften bewunderst du am meisten?</div>
              <div className="answer-options">
                <div className="answers-row">
                  <button className="answer" onClick={() => handleAnswer(2, "Gryffindor", 30)}>
                    Tapferkeit
                  </button>
                  <button className="answer" onClick={() => handleAnswer(2, "Ravenclaw", 30)}>
                    Weisheit
                  </button>
                </div>
                <div className="answers-row">
                  <button className="answer" onClick={() => handleAnswer(2, "Hufflepuff", 30)}>
                    Fairness
                  </button>
                  <button className="answer" onClick={() => handleAnswer(2, "Slytherin", 30)}>
                    Führung
                  </button>
                </div>
              </div>
            </>
          )}

          {houseAssigned && (
            <div className={`assigned ${houseAssigned}`}>
              Du wurdest {houseAssigned} zugewiesen!
            </div>
          )}
        </div>
      </div>

      <div className="back-button-container">
        <button className="back-button" onClick={handleBackToHomepage}>
          Zurück zu Games
        </button>
      </div>
    </div>
  );
};

export default HogwartsQuiz;
