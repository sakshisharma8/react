import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
    <p>This is home page :-</p>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  );
}

export default Home;
