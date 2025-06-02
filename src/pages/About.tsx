import React from "react";
import "../App.css";


const About: React.FC = () => {
  return (
    <div className="container py-4">
    <h1 className="mb-3 text-center text-danger">About Game Library Tracker</h1>
      <p>
        This page was created to provide an overview of games that I've played, am currently playing, or plan to play in the future.
        It allows users to add, edit, and delete games from their personal library, prodiving a simple way to track gaming progress and reviews.
      </p>

      <hr className='text-danger' />

      <h2 className='text-danger'>Technologies Used</h2>
      <ul>
        <li>React + TypeScript</li>
        <li>React Router</li>
        <li>MockAPI (for backend simulation)</li>
        <li>Bootstrap (for styling)</li>
      </ul>

      <hr className='text-danger' />

      <h2 className='text-danger'>Developed By:</h2>
      <p>
        This was created by me, Ethan, as a final project for PromineoTech's Front End Web Development Bootcamp. I had a blast learning everything from HTML to React, and
        I cannot wait to continue building my skills in web development and using what I've learned to create more complex applications in the future.
        <br />
        <br />
        Thank you to my mentors and peers for their support and guidance throughout this journey.
      </p>
      <p>
  {" "}
  <a
    href="https://github.com/Ethanf25/Week-17-Final-Assignment.git"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>{" "}
  | <a href="https://www.linkedin.com/in/ethan-friend25" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
</p>
    </div>
  );
};

export default About;
