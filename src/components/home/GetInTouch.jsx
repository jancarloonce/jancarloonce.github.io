// GetInTouch.jsx
import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const GetInTouch = ({ heading, message, email }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50px)",
    config: config.slow, // Adjust the speed here
  });

  return (
    <animated.div style={springProps} ref={ref}>
      <div id="contact">
        <h2 className="display-4 pb-3 text-center">{heading}</h2>
        <p className="lead text-center pb-3">
          {message},{" "}
          <a className="text-decoration-none" href={`mailto:${email}`}>
            {email}
          </a>
          .
        </p>
      </div>
    </animated.div>
  );
};

export default GetInTouch;