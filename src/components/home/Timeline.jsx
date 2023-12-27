import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const StarIcon = () => <i className="fas fa-star"></i>;

const CustomIcon = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: '100%', height: '100%' }} />
);

const Timeline = ({ heading, experiences }) => {
  return (
    <div id="experience" style={{ textAlign: 'center', margin: '20px' }}>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <VerticalTimeline lineColor="Gray">
        {experiences.data.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--work${experience.role === 'Senior Python Developer' ? '-blue' : ''}`}
            contentStyle={{
              background: experience.role === 'Senior Python Developer' ? 'rgb(33, 150, 243)' : 'white',
              color: experience.role === 'Senior Python Developer' ? '#fff' : '#000',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              position: 'relative', // Make the container relative
            }}
            contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
            date={<span style={{ color: 'black' }}>{experience.date}</span>}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            shadowSize="large"
            icon={<CustomIcon src={experience.companylogo} alt={experience.company} />}
          >
            {/* Apply a blue border only to the top */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                backgroundColor: 'rgb(33, 150, 243)', // Always blue
              }}
            />
            <h3 className="vertical-timeline-element-title">
              {experience.company} - {experience.location}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">{experience.role}</h5>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
