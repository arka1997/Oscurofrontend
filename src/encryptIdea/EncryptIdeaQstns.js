import React, { useState } from 'react';
import './EncryptIdeaQstns.css';

const questions = [
    {
      question: "What is Assembler?",
    },
    {
      question: "Can I use assembler to convert HLL -> MLL?",
    },
    // Add more questions here
  ];

// [
//   "What is Assembler?",
//   "Can I use assembler to convert HLL -> MLL?",
//   "What is Compiler?",
//   "What is Programme?",
//   "Does compiler Helps ALL to convert to MLL?",
//   "What is API?",
//   "Can platform dependent languages can be run on Mac, windows, ubuntu?",
//   "Example of a Platform dependent language? And why it is said so?",
//   "One difference between compiler and interpreter?",
//   "How compiler works when a source code is given to it and what is its output?",
//   "Levels of Programming Language (HLL, LLL, ALL): Define and differentiate between high-level, low-level, and assembly languages. Provide examples of tasks that are better suited for each level of programming language.",
//   "How does platform independence impact software development and deployment? IDE -> Source Code -> Compiler -> Extension -> Windows/Mac/Ubuntu: Describe the typical workflow of software development using an Integrated Development Environment (IDE). Explain the role of a compiler in the software development process. Explain the significance of .java and .class files in the Java development process. Discuss the role of the Java Virtual Machine (JVM) in enabling Java's platform independence. Provide examples of programming languages that are typically compiled and interpreted."
// ];

const EncryptIdeaQstns = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleAnswerChange = (e) => {
      setAnswer(e.target.value);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
        setSelectedImage(file);
      }
    };
  
    const handleNextQuestion = () => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswer('');
        setImageUrl('');
        setSelectedImage(null);
      } else {
        alert('You have reached the end of the questions.');
      }
    };
  
    const handlePreviousQuestion = () => {
      if (currentQuestion - 1 >= 0) {
        setCurrentQuestion(currentQuestion - 1);
        setAnswer('');
        setImageUrl('');
        setSelectedImage(null);
      } else {
        alert('You are at the first question.');
      }
    };
  
    return (
      <div className="container">
        <h1>Question {currentQuestion + 1}</h1>
        <p>{questions[currentQuestion].question}</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="image-upload"
        />
        {imageUrl && <img src={imageUrl} alt="Question" className="question-image" />}
        <textarea
          value={answer}
          onChange={handleAnswerChange}
          placeholder="Type your answer here..."
          className="answer-box"
        />
        <div className="buttons">
          <button onClick={handlePreviousQuestion}>Back</button>
          <button className="button-container" onClick={handleNextQuestion}>Next</button>
        </div>
      </div>
    );
  };
export default EncryptIdeaQstns;
