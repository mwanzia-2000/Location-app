// src/App.tsx

// Import React library
import React from 'react';
// Import necessary components from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom CSS
import './App.css';

// Import the Landing component
import Landing from './Components/Landing';

// Define the App component
export const App: React.FC = () => {
  // Render the component
  return (
    // Router component to enable routing
    <Router>
      {/* Routes component to define routes */}
      <Routes>
        {/* Route component to define a route */}
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

// Export the App component
export default App;
