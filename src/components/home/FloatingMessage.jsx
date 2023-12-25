import React, { useState } from 'react';

const FloatingMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSendMessage = () => {
    // Here you can implement the logic to send an email
    // using the user's message and email address.
    // For simplicity, I'll just log the details for now.
    console.log(`User Email: ${userEmail}`);
    console.log(`User Message: ${userMessage}`);

    // You can add your logic here to send an email.

    // After handling the message, clear the input fields and hide the component.
    setUserMessage('');
    setUserEmail('');
    setIsVisible(false);
  };

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    transition: 'transform 0.3s ease-in-out',
    animation: isVisible
      ? 'moveEmoji 0.5s ease-in-out infinite'
      : 'none', // Apply move animation when visible
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '50%', // Make the button circular
    padding: '10px',
    cursor: 'pointer',
  };

  const messageStyle = {
    backgroundColor: '#fff',
    border: '1px solid #007bff',
    borderRadius: '10px', // Make the message box circular
    padding: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '10px',
  };

  const emojiStyle = {
    animation: isVisible ? 'moveEmoji 0.5s ease-in-out infinite' : 'none', // Apply move animation when visible
  };

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div style={containerStyle}>
      <button style={{ ...buttonStyle, ...emojiStyle }} onClick={toggleVisibility}>
        <span role="img" aria-label="Chat Icon" style={{ display: 'inline-block' }}>
          💬
        </span>
      </button>
      {isVisible && (
        <div style={messageStyle}>
          <p>Hello! How can we assist you today?</p>
          <textarea
            placeholder="Type your message here..."
            value={userMessage}
            onChange={handleMessageChange}
          />
          <p>
            We are currently away, please provide your email, and we'll get back to you as soon
            as possible.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            value={userEmail}
            onChange={handleEmailChange}
          />
          <button onClick={handleSendMessage}>Send Message</button>
        </div>
      )}
    </div>
  );
};

export default FloatingMessage;
