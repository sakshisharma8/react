import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate(-1);
  };

  return (
    <div>
        <p>This is about page :-</p>

      <button onClick={handleNav}>Go Back</button>
    </div>
  );
}

export default About;
{/* Sakshi's code */}
