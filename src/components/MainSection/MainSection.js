import React from 'react';
import './MainSection.css'; // Ensure this is the correct path to your CSS file

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="video-container">
      <iframe
    width="1280"
    height="720"
    src="https://www.youtube.com/embed/fzKURp_OJV0?autoplay=1&mute=1&loop=1&playlist=fzKURp_OJV0&controls=0&modestbranding=1&rel=0"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    title="Color Explosion on Black Background | FREE STOCK VIDEO 4K | NO COPYRIGHT VIDEO COMPILATION | 2021"
    className="background-video"
></iframe>

      </div>
      <div className="overlay-content">
        <h1>Otherworldly Iceland</h1>
        <p>With black sand beaches, volcanic fields blanketed in heavy moss, and over 3,000 species of mushrooms, the Icelandic landscape is the most sci-fi corner of planet earth.</p>
      </div>
    </section>
  );
};

export default MainSection;

