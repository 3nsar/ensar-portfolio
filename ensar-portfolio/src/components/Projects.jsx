import React from 'react';

import lamp from '../assets/lamp.png';
import moon from '../assets/moon.png';

const Projects = () => {
  return (
    <div className='projects-container'>
   
      <div className="projects-card-container">
        <h1>LATEST WORK</h1>

        <div className="projects-card">
          <img src={lamp} alt="pic" />
          <h2>QUIZ APP</h2>
          <p>This quiz app allows you to advance to higher levels by answering 7 out of 10 questions correctly. The main goal is to unlock all the secret cards. For this project,
            I used React JS and Firebase V9.
            With the help of Firebase's assistance, your progress will be saved automatically.
          </p>
          <div className="projects-card-btn">
            <a href="https://github.com/3nsar/firebase-quiz-app" target="_blank">CODE</a>
            <a href="https://react-quiz-bd372.web.app/" target="_blank">LIVE</a>
            <a href="https://www.youtube.com/watch?v=9zcSNLiMEbE" target="_blank">VIDEO</a>
          </div>
        </div>

        <div className="projects-card">
          <img src={moon} alt="pic" />
          <h2>CRYPTO MOON</h2>
          <p>With the Crypto-Moon app, you are able to see the latest updates in the crypto market. This is possible, thanks to multiple APIs. You can also sort them in many categories. This app also contains a chat room where you can chat with people around the world.
            I mainly used React, Firebase v9, and Material UI.
          </p>
          <div className="projects-card-btn">
            <a href="https://github.com/3nsar/crypto-moon" target="_blank">CODE</a>
            <a href="https://crypto-moon-e93ab.web.app/" target="_blank">LIVE</a>
            <a href="https://www.youtube.com/watch?v=BlRrCEzMBp8" target="_blank">VIDEO</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
