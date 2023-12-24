import React from 'react';
import { Jumbotron } from './migration';
import { Container, Row } from 'react-bootstrap';
import { Chrono } from 'react-chrono';

const Experience = ({ experiences }) => {
  const items = experiences.data.map((data, index) => ({
    title: data.date,
    subtitle: data.role,
    cardDetailedText: (
      <div
        style={{
          backgroundColor: '#ecf0f1', // Set the background color to match the card's background color
          padding: '10px', // Adjust padding as needed
        }}
      >
        <p className="lead" style={{ color: '#000000', fontWeight: 'bold' }}>
          {data.date}
        </p>
        <p className="lead" style={{ color: '#000000', fontWeight: 'bold' }}>
          {data.company}
        </p>
        <p className="lead" style={{ color: '#000000', fontWeight: 'bold' }}>
          {data.role}
        </p>
        <div
          style={{
            width: '100px',
            height: '100px',
            background: '#ecf0f1', // Set the background color to match the card's background color
            borderRadius: '100%',
            overflow: 'hidden', // Hide overflow to maintain circular shape
          }}
        >
          <img
            className="bg-white mb-3 custom-logo"
            src={data.companylogo}
            alt=""
            style={{
              width: '100%', // Ensure the image takes up the entire circle
              height: '100%', // Ensure the image takes up the entire circle
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    ),
  }));

  const customTheme = {
    primary: '#3498db', // Change this to your desired highlight color (light blue in this example)
    secondary: '#2c3e50',
    cardBgColor: '#ecf0f1',
  };

  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <div className="row justify-content-center">
            <h2 className="display-4 mb-5 text-center">{experiences.heading}</h2>
            <Row>
              <Chrono mode="VERTICAL_ALTERNATING" theme={customTheme} scrollable={false} hideControls={true} disableTimelinePoint={true}>
                
                {items.map((item, index) => (
                  <div key={index}>
                    {item.cardDetailedText}
                  </div>
                ))}
              </Chrono>
            </Row>
          </div>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
