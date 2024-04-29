// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  // State to store the URL of the dog image
  const [dogImageUrl, setDogImageUrl] = useState(null);

  // useEffect hook to fetch dog image data on component mount
  useEffect(() => {
    // Fetch a random dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update state with the fetched image URL
        setDogImageUrl(data.message);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures this effect only runs once after the initial render

  // Conditional rendering based on whether the dog image URL has been set
  if (!dogImageUrl) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  // Render the dog image if the URL is available
  return <img src={dogImageUrl} alt="A Random Dog" />;
}

export default App;
