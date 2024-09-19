import React from 'react';
import TravelEntry from './TravelEntry.jsx';
import {travelData} from './travelData.js';

function TravelJournal() {
  return (
    <div className="travel-journal">
      {travelData.map(entry => (
        <TravelEntry key={entry.id} {...entry} /> 
      ))}
    </div>
  );
}

export default TravelJournal;