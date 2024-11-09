import React, { useState } from 'react';

const IntermediateQuiz = ({ onComplete }) => {
  const [answers, setAnswers] = useState({
    q1: '', q2: '', q3: '', q4: '', q5: ''
  });
  const [feedback, setFeedback] = useState({});

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleCompletion = () => {
    const newFeedback = {
      q1: answers.q1.toLowerCase() === 'mars' ? 'Correct!' : 'Incorrect. It’s Mars.',
      q2: answers.q2.toLowerCase() === 'neptune' ? 'Correct!' : 'Incorrect. It’s Neptune.',
      q3: answers.q3.toLowerCase() === 'black hole' ? 'Correct!' : 'Incorrect. It’s a black hole.',
      q4: answers.q4.toLowerCase() === 'andromeda' ? 'Correct!' : 'Incorrect. It’s the Andromeda galaxy.',
      q5: answers.q5.toLowerCase() === 'telescope' ? 'Correct!' : 'Incorrect. It’s a telescope.'
    };
    setFeedback(newFeedback);

    if (Object.values(newFeedback).every((msg) => msg === 'Correct!')) {
      onComplete();
    }
  };

  return (
    <div className="quiz intermediate">
      <h3>Intermediate Level Quiz</h3>
      <p>Answer the following questions about space!</p>

      <div className="question">
        <p>1. Which planet is known as the "Red Planet"?</p>
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
        <p>2. Which is the eighth planet from the Sun?</p>
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
        <p>3. What is the name of the region in space where gravity is so strong that nothing can escape it?</p>
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
        <p>4. What is the name of the closest galaxy to the Milky Way?</p>
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
        <p>5. What is the name of the tool used to observe distant celestial objects?</p>
        <input
          type="text"
          name="q5"
          value={answers.q5}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q5 && <p className="feedback">{feedback.q5}</p>}
      </div>

      <button onClick={handleCompletion}>Complete Intermediate Quiz</button>
    </div>
  );
};

export default IntermediateQuiz;
