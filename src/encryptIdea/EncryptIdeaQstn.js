import React, { useState } from 'react';
import './EncryptIdeaQstn.css';
const questions = [
  {
    question: 'What are the essential characteristics of a programming language?',
    options: [
      'Syntax and semantics',
      'Data types and variables',
      'Functions and control structures',
      'All of the above',
    ],
    correctAnswer: 'All of the above',
  },
  {
    question: 'What does it mean for a program to be platform-dependent or platform-independent?',
    options: [
      'Platform-dependent programs can run on any operating system without modification.',
      'Platform-independent programs can only run on specific operating systems.',
      'Platform-dependent programs are tied to a specific operating system and hardware architecture.',
      'Platform-independent programs do not require an operating system to run.',
    ],
    correctAnswer: 'Platform-dependent programs are tied to a specific operating system and hardware architecture.',
  },
  // Add more questions here
];

const EncryptIdeaQstn = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setAnswer('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="container">
      <h1>React Quiz App</h1>
      {!showResult && (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={option}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                <label htmlFor={option}>{option}</label>
              </li>
            ))}
          </ul>
          <label htmlFor="answer">Your Answer:</label>
          <textarea
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Type your answer here..."
          />
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
      {showResult && (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your Score: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default EncryptIdeaQstn;
