import React from 'react';
import welcomeImg from '../assets/IA.png';

function Welcome(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={welcomeImg} alt="Welcome" />
    </div>
  );
}

export default Welcome;
