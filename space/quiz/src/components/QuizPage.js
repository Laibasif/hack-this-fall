// src/components/QuizPage.js
import React, { useState } from 'react';

const QuizPage = () => {
  const [question, setQuestion] = useState('What is the largest planet in our solar system?');
  const [answer, setAnswer] = useState('');
  const [modelResponse, setModelResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to call the Aria model API
  const callAriaModel = async (userAnswer) => {
    setLoading(true);
    setError(null);
    const API_KEY = process.env.REACT_APP_ARIA_API_KEY;
    const ARIA_API_URL = 'https://api.aria.com/endpoint'; // Replace with the actual endpoint

    try {
      const response = await fetch(ARIA_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer: userAnswer }),
      });

      if (!response.ok) {
        throw new Error('Failed to get a response from the Aria API');
      }

      const data = await response.json();
      setModelResponse(data); // Assuming `data` has the response structure you need
    } catch (err) {
      setError('Error fetching data from Aria API');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    callAriaModel(answer);
  };

  return (
    <div className="quiz-page">
      <h2>Quiz Page</h2>
      <div className="question">
        <h3>Question:</h3>
        <p>{question}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Your Answer:
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Answer'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {modelResponse && (
        <div className="model-response">
          <h3>Aria Model's Feedback:</h3>
          <pre>{JSON.stringify(modelResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
