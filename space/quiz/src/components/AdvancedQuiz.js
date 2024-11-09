import React, { useState } from 'react';

const AdvancedQuiz = ({ onComplete }) => {
  const [answers, setAnswers] = useState({
    q1: '', q2: '', q3: '', q4: '', q5: ''
  });
  const [feedback, setFeedback] = useState({});

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleCompletion = () => {
    const newFeedback = {
      q1: answers.q1.toLowerCase() === 'event horizon' ? 'Correct!' : 'Incorrect. It’s Event Horizon.',
      q2: answers.q2.toLowerCase() === 'dark matter' ? 'Correct!' : 'Incorrect. It’s Dark Matter.',
      q3: answers.q3.toLowerCase() === 'hawking radiation' ? 'Correct!' : 'Incorrect. It’s Hawking Radiation.',
      q4: answers.q4.toLowerCase() === 'black hole merger' ? 'Correct!' : 'Incorrect. It’s a Black Hole Merger.',
      q5: answers.q5.toLowerCase() === 'quasar' ? 'Correct!' : 'Incorrect. It’s a Quasar.'
    };
    setFeedback(newFeedback);

    if (Object.values(newFeedback).every((msg) => msg === 'Correct!')) {
      onComplete();
    }
  };

  return (
    <div className="quiz advanced">
      <h3>Advanced Level Quiz</h3>
      <p>Answer the following challenging questions about galaxies, black holes, and advanced space concepts!</p>

      <div className="question">
        <p>1. What is the boundary around a black hole beyond which nothing can escape, including light?</p>
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
        <p>2. What is the name of the mysterious substance that makes up about 27% of the universe's mass-energy content, but cannot be seen directly?</p>
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
        <p>3. What phenomenon, predicted by Stephen Hawking, allows black holes to emit radiation and slowly lose mass over time?</p>
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
        <p>4. What event occurs when two black holes collide and merge to form a larger black hole?</p>
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
        <p>5. What is the name of the extremely energetic and distant active galactic nucleus, typically associated with a supermassive black hole at its center?</p>
        <input
          type="text"
          name="q5"
          value={answers.q5}
          onChange={handleChange}
          placeholder="Your answer"
        />
        {feedback.q5 && <p className="feedback">{feedback.q5}</p>}
      </div>

      <button onClick={handleCompletion}>Complete Advanced Quiz</button>
    </div>
  );
};

export default AdvancedQuiz;
