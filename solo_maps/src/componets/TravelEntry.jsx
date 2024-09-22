import React from 'react';

function TravelEntry(props) {
  const { location, title, date, description, imageUrl, googleMapsLink } = props;

  return (
    <div className="travel-entry"> 
      <img src={imageUrl} alt={title} className="entry-image" />
      <div className="entry-content">
        <div className="location">
          <span role="img" aria-label="location pin">📍</span> {location} 
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="google-maps-link">
            Destination Maps
          </a>
        </div>
        <h2 className="entry-title">{title}</h2>
        <p className="entry-date">{date}</p>
        <p className="entry-description">{description}</p>
      </div>
    </div>
  );
}

export default TravelEntry;