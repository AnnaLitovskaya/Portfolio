import React from 'react';

function AboutPage() {
  return (
    <section className="app-screen" id="about-page-container">
      <div id="about-page-text">
        <span>About Me</span>
        <span>
          My background is in mechanical engineering and industrial design.
          Before I became a Full Stack Web Developer I worked in manufacturing
          as a CNC machine programmer for 6 years.
        </span>
        <span>
          I graduated Fullstack Academy software engineering immersive program
          which focuses on full stack development using JavaScript including
          Node.js, Express, Sequelize, PostgreSQL, React, Redux, and CS
          fundamentals including data structures and algorithms.
        </span>
        <span>
          When I&apos;m not coding, I&apos;m making widgets on my 3D printer,
          hiking, reading, playing music, or eating a burrito.
        </span>
      </div>
      <img alt="Me" src="public/photos/Me.jpeg" />
    </section>
  );
}

export default AboutPage;
