import React, { useEffect } from 'react';
import './Certifications.css';

const Certifications = ({ certificationData }) => {
  const addHoverClass = (element) => {
    element.classList.add('hovered');
  };

  const removeHoverClass = (element) => {
    element.classList.remove('hovered');
  };

  const loadScript = (badgeId, index) => {
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

  useEffect(() => {
    const badges = document.querySelectorAll('.certification-badge');

    // Add event listeners for touch devices
    badges.forEach((badge) => {
      badge.addEventListener('touchstart', () => addHoverClass(badge));
      badge.addEventListener('touchend', () => removeHoverClass(badge));
    });

    // Cleanup event listeners on component unmount
    return () => {
      badges.forEach((badge) => {
        badge.removeEventListener('touchstart', () => addHoverClass(badge));
        badge.removeEventListener('touchend', () => removeHoverClass(badge));
      });
    };
  }, []);

  return (
    <div className="certifications-container">
      {certificationData.map((badgeId, index) => (
        <div key={index} className="certification-badge">
          <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id={badgeId}
            data-share-badge-host="https://www.credly.com"
          ></div>
          {loadScript(badgeId, index)}
        </div>
      ))}
    </div>
  );
};

export default Certifications;
