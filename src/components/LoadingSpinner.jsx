import React from 'react';

export default function LoadingSpinner({ message = 'Curating Luxury Residences...' }) {
  return (
    <div className="luxury-spinner-container">
      <div className="luxury-spinner-ring">
        <div className="ring-inner" />
      </div>
      <p className="luxury-spinnerText">{message}</p>
    </div>
  );
}

