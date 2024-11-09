import React from 'react';
import './styles/App.css'; // Make sure your CSS file is correctly imported
import QuizPage from './components/QuizPage'; // Correct import for QuizPage component
import Navbar from './components/NavBar'; // Now it matches the file name

function App() {
    return (
        <div>
            <Navbar />
            <QuizPage />
        </div>
    );
}

export default App;
