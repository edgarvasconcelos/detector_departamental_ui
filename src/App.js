import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResultPage from './components/ResultPage';
import Popup from './components/Popup';
import Spinner from './components/Spinner';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // State to control loading spinner
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cache, setCache] = useState({}); // Cache object to store results

  const apiUrl = process.env.REACT_APP_API_URL; // Use environment variable for API URL

  const handleResumeSubmit = async (resume) => {
    // Check if the result is already in cache
    if (cache[resume]) {
      setResults(cache[resume]);
      setIsPopupOpen(true);
      return;
    }

    setLoading(true); // Show the spinner
    try {
      const response = await fetch(`${apiUrl}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: resume }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const predictions = data.predictions;

      // Update the cache with the new results
      setCache(prevCache => ({ ...prevCache, [resume]: predictions }));
      
      setResults(predictions);
      setIsPopupOpen(true);
    } catch (error) {
      console.error('Error submitting resume:', error.message);
    } finally {
      setLoading(false); // Hide the spinner
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        <ResumeForm onSubmit={handleResumeSubmit} />
      </div>
      {loading && <Spinner />}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <ResultPage results={results} />
      </Popup>
    </div>
  );
}

export default App;
