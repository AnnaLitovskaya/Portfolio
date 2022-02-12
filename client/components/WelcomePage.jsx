import React from 'react';

function WelcomePage() {
  return (
    <section className="app-screen" id="welcome-page-container">
      <div id="welcome-page-text">
        <span>Anna Litovskaya.</span>
        <span>Full Stack Web Developer based in New York City.</span>
        <img alt="Me" src="public/photos/Me.jpeg" />
      </div>
    </section>
  );
}

export default WelcomePage;
