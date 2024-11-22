import React from 'react';
import '../styles/global.css';
import imageOrdinateur from '../assets/image-ordinateur.jpg'; // Importez l'image

function Home() {
  return (
    <main className="main-home">
      <article>
      <h2 className="home-title">Bienvenue chez GB WebAssist</h2>
        <div class="home-intro"> 
        <p className="accroche">
            GB WebAssist : Votre partenaire web et informatique
          </p>
          <p className="proposition-valeur">
            Création de sites web sur mesure et assistance informatique pour les professionnels et les particuliers.
          </p>
            <img src={imageOrdinateur} alt="Personne travaillant sur un ordinateur portable" className="illustration"/> 
          <p>
            <strong>Depuis le 13 février 2024, je mets mes compétences à votre service pour :</strong>
          </p>
          <ul>
            <li>Augmentez votre visibilité et attirez de nouveaux clients avec un site vitrine qui met en valeur votre savoir-faire (présentation d'entreprise, portfolio, blog...).</li>
            <li>Développez votre activité en ligne et boostez vos ventes avec une boutique en ligne performante et attractive.</li>
            <li>Optimisez votre référencement pour attirer de nouveaux clients.</li> 
          </ul>

          <p>
            <strong>Je vous propose également une assistance informatique complète :</strong>
          </p>
          <ul>
            <li>Dépannage à domicile ou à distance : résolution de problèmes, installation de logiciels, sécurité...</li>
            <li>Maintenance de vos équipements.</li>
            <li>Formation et conseils personnalisés.</li>
          </ul>
          <p className='suggestion'>
          Besoin d'un dépannage urgent ? Contactez-moi par téléphone au 06 74 84 17 93 ou aller sur la page contact pour remplir un des formulaires.
          </p>
        </div>
      </article>
    </main>
  );
}

export default Home;