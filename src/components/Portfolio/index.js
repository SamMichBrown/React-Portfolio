import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'Team-Profile-Generator',
      description: 'Generate a Workplace team.',
      link: "https://sammichbrown.github.io/Team-Profile-Generator/",
      repo: "https://github.com/SamMichBrown/Team-Profile-Generator"
    },
    {
      name: 'Weather-Dashboard',
      description: 'Weather information app.',
      link: "https://sammichbrown.github.io/Weather-Dashboard/",
      repo: "https://github.com/SamMichBrown/Weather-Dashboard"
    },
    {
      name: 'Note-Taker',
      description: 'An app that allows you to take notes.',
      link: "https://intense-island-12484.herokuapp.com/",
      repo: "https://github.com/SamMichBrown/Note-Taker"
    },
    {
      name: 'SWATCH',
      description: 'Make-up Review Website - Group Project 2',
      link: "https://swatch-makeup-reviews.herokuapp.com/login",
      repo: "https://github.com/Project-Two-Group-Nine/SWATCH"
    },
    {
      name: 'BookEnd',
      description: 'Book Reccomendation Website - Group Project 3',
      link: "http://bookend-recommendations.herokuapp.com/",
      repo: "https://github.com/project3UOT/bookend"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
