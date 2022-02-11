import React from 'react';

function ProjectPage() {
  return (
    <section className="app-screen" id="project-page-container">
      <div className="project-container">
        <div className="project-box">
          <header className="project-title">E-Commerce Website - NO CAP</header>
          <img
            className="project-images"
            alt="No-Cap"
            src="public/photos/No-Cap.png"
          />
          <span>
            NoCap is a simple e-commerce hat shop build by 5 developers in two
            weeks.
          </span>
          <span>
            Technologies used: Node, Express, React, Postgresql, Sequelize
          </span>
          <a href="https://nocap-demo.herokuapp.com/">
            <button type="button">DEMO</button>
          </a>
          <a href="https://github.com/AnnaLitovskaya/No-Cap">
            <button type="button">CODE</button>
          </a>
        </div>
        <div className="project-box">
          <header className="project-title">
            Finance Management Application - FUNDIT
          </header>
          <img className="project-images" alt="FundIt" />
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
