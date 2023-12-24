import React from 'react';
import { Col } from 'react-bootstrap';
import { Chrono } from 'react-chrono';

const ExperienceCard = ({ data }) => {
  const items = [
    {
      title: data.role,
      cardTitle: data.role,
      cardSubtitle: data.date,
      cardDetailedText: (
        <div>
          <img className="bg-white mb-3" src={data.companylogo} alt="" />
          <p className="lead">{data.role}</p>
        </div>
      ),
    },
  ];

  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    </Col>
  );
};

export default ExperienceCard;
