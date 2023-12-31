// Certifications.jsx

import React, { useState } from 'react';  // Import useState
import { useSpring, animated, config } from 'react-spring';  // Import useSpring and animated
import { useInView } from 'react-intersection-observer';  // Import useInView
import './Certifications.css';

const Certifications = ({ heading, certificationData }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  const toggleSelection = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(50px)',
    config: { ...config.slow, precision: 0.1 },
  });

  const loadScript = (badgeId) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  };

  const coveringDivPosition = {
    top: '170px',   // Adjust the top position
    left: '80px',  // Adjust the left position
  };
  
  const coveringDivStyle = {
    position: 'absolute',
    ...coveringDivPosition,
    width: '30%',  // Adjust the width as needed
    height: '10%', // Adjust the height as needed
    backgroundColor: 'white',
    zIndex: 1,
  };

  return (
    <animated.div style={springProps} ref={ref}>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="certifications-container">
          {certificationData.map((badgeId, index) => (
            <div
              key={index}
              className={`certification-badge ${selectedIndex === index ? 'selected' : ''}`}
              onClick={() => toggleSelection(index)}
              style={{ position: 'relative' }}
            >
              {index === 0 && <div style={coveringDivStyle}></div>}
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
    </animated.div>
  );
};

export default Certifications;
