import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <img src={coverImage} className="flex-row" id="cover" alt="cover" />
      <div className="my-2">
        <p>
        My name is Samantha and I am a Student learning Full Stack Web development in a bootcamp course at the University of Toronto.
        I reside in the province of Newfoundland in Canada, and love my home by the water. 
        Currently, I find myself drawn to the Game Development aspect of coding, but am starting to really enjoy the in's and out's of backend coding!
        </p>
        <p>
        My goal is to absorb all of the information given in my current learning environment, and use it to push forward into the vast coding landscape!
        Gaining a job in this field, and using what I have learned is my primary motivation!
        </p>
      </div>
    </section>
  );
}

export default About;
