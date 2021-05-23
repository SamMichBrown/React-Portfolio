import React from 'react';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/project3UOT/bookend"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/samantha-brown-a8793b1b6"
    },
    {
      name: "fab fa-twitter",
      link: "https://twitter.com/SamAnActualLamb"
    },
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
