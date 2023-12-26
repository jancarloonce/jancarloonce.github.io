import React, { useState } from 'react';
import './Certifications.css';

const Certifications = ({ heading, certificationData }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleSelection = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const loadScript = (badgeId) => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;

    // Append script to the document body
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  };
  
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="certifications-container">
        {certificationData.map((badgeId, index) => (
          <div
            key={index}
            className={`certification-badge ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => toggleSelection(index)}
          >
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id={badgeId}
              data-share-badge-host="https://www.credly.com"
            ></div>
            {loadScript(badgeId)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
