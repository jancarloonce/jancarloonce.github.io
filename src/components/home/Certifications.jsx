import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Certifications.css';

const Certifications = ({ heading, certificationData }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  const toggleSelection = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(50px)', // Adjust the distance and direction here
    config: { ...config.slow, precision: 0.1 }, // Adjust the speed here (precision controls the smoothness)
  });

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
    <animated.div style={springProps} ref={ref}>
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
    </animated.div>
  );
};

export default Certifications;
