import React from 'react';
import '../styles/global.css'; 
import myPhoto from '../assets/pixOfMe.webp';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={myPhoto} alt="moi professionnelle" className="about-photo" />
        <div className="about-text">
          <h1>À propos</h1>
          <p>
            Mon parcours atypique, entre le secteur médical et ma fascination 
            pour l'informatique, m'a finalement conduite à ma véritable passion : 
            le développement web, et plus particulièrement la création de sites 
            web sur mesure pour les TPE/PME. 
          </p>
          <p>
            Après des études d'auxiliaire de puériculture et une expérience 
            enrichissante auprès des enfants, j'ai découvert en 2021 le pouvoir 
            du code pour créer des solutions digitales innovantes. J'ai développé 
            une expertise en React.js, confirmant ma soif d'apprendre et ma 
            capacité à maîtriser rapidement de nouvelles technologies.
          </p>
          <p>
            Aujourd'hui, développeuse web freelance (GB WebAssist), je mets mes 
            compétences en JavaScript et React.js au service des entreprises 
            comme la vôtre qui souhaitent se démarquer avec un site web performant 
            et adapté à leurs besoins. Je suis à votre écoute pour discuter de 
            votre projet et vous proposer des solutions web innovantes.
          </p>
          <p>
            Et parce que l'équilibre est essentiel, je me ressource dans la 
            lecture et les séries télévisées, qui nourrissent ma créativité et 
            me permettent d'aborder chaque projet avec une vision nouvelle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;