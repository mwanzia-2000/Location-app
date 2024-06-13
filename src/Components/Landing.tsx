import React, { useState } from 'react';

// Define the interface for a location
interface Location {
  id: number;
  name: string;
  description: string;
}

// Define an array of initial locations
const initialLocations: Location[] = [
  { id: 1, name: 'Nairobi', description: 'The capital city of kenya.' },
  { id: 2, name: 'kiambu', description: 'a county with fertile soils which nesseciate crop farming.' },
  { id: 3, name: 'makueni', description: 'semi arid county in lower eastern known for mango production.' },
];

// Define the Landing component
export const Landing: React.FC = () => {
  // State hooks to manage locations, current location index, selected location, and showing details
  const [locations] = useState<Location[]>(initialLocations);
  const [currentLocationIndex, setCurrentLocationIndex] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // Function to handle location selection
  const handleSelectLocation = (index: number) => {
    setCurrentLocationIndex(index);
    setShowDetails(true);
  };

  // Function to go back to the location list
  const handleBackToList = () => {
    setShowDetails(false);
  };

  // JSX rendering of the component
  return (
    <div className="container">
      <h1>Location Finder</h1>
      {showDetails ? (
        <div className="details-section">
          <h2>{locations[currentLocationIndex].name}</h2>
          <p>{locations[currentLocationIndex].description}</p>
          <button className="btn btn-secondary mt-3" onClick={handleBackToList}>
            Back to List
          </button>
        </div>
      ) : (
        <div className="list-section">
          <h2>Locations</h2>
          <ul className="list-group">
            {locations.map((location, index) => (
              <li key={location.id} className="list-group-item">
                <button className="btn btn-link" onClick={() => handleSelectLocation(index)}>
                  {location.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Export the Landing component
export default Landing;
