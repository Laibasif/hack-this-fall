// src/components/BeginnerQuiz.js
import React, { useState } from 'react';

const BeginnerQuiz = ({ onComplete }) => {
  const [answers, setAnswers] = useState({
    q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: ''
  });
  const [feedback, setFeedback] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleCompletion = () => {
    const newFeedback = {
      q1: answers.q1.toLowerCase() === 'mercury' ? 'Correct!' : 'Incorrect. It’s Mercury.',
      q2: answers.q2.toLowerCase() === 'jupiter' ? 'Correct!' : 'Incorrect. It’s Jupiter.',
      q3: answers.q3.toLowerCase() === 'earth' ? 'Correct!' : 'Incorrect. It’s Earth.',
      q4: answers.q4.toLowerCase() === 'saturn' ? 'Correct!' : 'Incorrect. It’s Saturn.',
      q5: answers.q5.toLowerCase() === 'neil armstrong' ? 'Correct!' : 'Incorrect. It’s Neil Armstrong.',
      q6: answers.q6.toLowerCase() === 'sun' ? 'Correct!' : 'Incorrect. It’s the Sun.',
      q7: answers.q7.toLowerCase() === 'venus' ? 'Correct!' : 'Incorrect. It’s Venus.',
    };
    setFeedback(newFeedback);

    if (Object.values(newFeedback).every((msg) => msg === 'Correct!')) {
      setIsCompleted(true);
      onComplete();
    }
  };

  return (
    <div className="quiz beginner">
      <h3>Beginner Level Quiz</h3>
      <p>Answer the questions below to learn more about space!</p>

      <div className="question">
        <p>1. Which planet is closest to the Sun?</p>
        <input
          type="text"
          name="q1"
          value={answers.q1}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q1 && <p className="feedback">{feedback.q1}</p>}
      </div>

      <div className="question">
        <p>2. Which planet is the largest in our solar system?</p>
        <input
          type="text"
          name="q2"
          value={answers.q2}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q2 && <p className="feedback">{feedback.q2}</p>}
      </div>

      <div className="question">
        <p>3. Which planet do humans live on?</p>
        <input
          type="text"
          name="q3"
          value={answers.q3}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q3 && <p className="feedback">{feedback.q3}</p>}
      </div>

      <div className="question">
        <p>4. Which planet is known for its beautiful rings?</p>
        <input
          type="text"
          name="q4"
          value={answers.q4}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q4 && <p className="feedback">{feedback.q4}</p>}
      </div>

      <div className="question">
        <p>5. Who was the first person to walk on the moon?</p>
        <input
          type="text"
          name="q5"
          value={answers.q5}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q5 && <p className="feedback">{feedback.q5}</p>}
      </div>

      <div className="question">
        <p>6. What is the main source of energy for our solar system?</p>
        <input
          type="text"
          name="q6"
          value={answers.q6}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q6 && <p className="feedback">{feedback.q6}</p>}
      </div>

      <div className="question">
        <p>7. Which planet is the hottest in our solar system?</p>
        <input
          type="text"
          name="q7"
          value={answers.q7}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q7 && <p className="feedback">{feedback.q7}</p>}
      </div>

      <button onClick={handleCompletion} disabled={isCompleted}>
        {isCompleted ? 'Quiz Completed' : 'Complete Beginner Quiz'}
      </button>
    </div>
  );
};

export default BeginnerQuiz;
