import React from 'react';
import '../styles/global.css';

function Services() {
  return (
    <main className="main-services">
      <h1 className='service-title'>Mes services pour les TPE/PME</h1>
      <p className="intro-text">
        Mon objectif : accompagner les TPE et PME dans leur transformation digitale avec des solutions adaptées à leur budget et à leurs besoins. Que vous souhaitiez augmenter votre visibilité en ligne, vendre vos produits, ou optimiser vos outils numériques, je suis là pour vous aider à chaque étape.
      </p>
      <div className="cards-container">
        <article className="service-card">
          <h2>Création de site vitrine</h2>
          <h3 className='sous-titre'>
            Boostez votre visibilité en ligne avec un site vitrine professionnel. Je crée un site sur mesure qui reflète l’image de votre entreprise et capte l’attention de vos visiteurs.
          </h3>
          <ul>
            <li>Renforcez votre image de marque et gagnez la confiance de vos visiteurs.</li>
            <li>Présentez vos produits et services de manière professionnelle et impactante.</li>
            <li>Offrez un site moderne et responsive, accessible sur tous les appareils.</li>
          </ul>
          <p className="price">À partir de 600 €</p>
        </article>

        <article className="service-card">
          <h2>Création de site e-commerce</h2>
          <h3 className='sous-titre'>
            Transformez votre activité avec un site e-commerce performant, adapté à la gestion simplifiée pour les petites structures.
          </h3>
          <ul>
            <li>Multipliez vos ventes avec une boutique en ligne disponible 24/7.</li>
            <li>Gérez facilement vos produits et commandes grâce à un tableau de bord simple.</li>
            <li>Offrez une expérience d'achat sécurisée avec des options de paiement adaptées.</li>
          </ul>
          <p className="price">À partir de 1500 €</p>
        </article>

        <article className="service-card">
          <h2>Refonte & Modification de Site</h2>
          <h3 className='sous-titre'>
            Votre site ne répond plus à vos attentes ? Modernisez-le pour attirer plus de clients.
          </h3>
          <ul>
            <li>Modernisez votre site avec un design attractif et ergonomique.</li>
            <li>Améliorez votre référencement SEO pour être mieux positionné sur Google.</li>
            <li>Ajoutez des fonctionnalités pour répondre aux besoins actuels de vos clients.</li>
          </ul>
          <p className="price">Sur devis selon le travail</p>
        </article>

        <article className="service-card">
          <h2>Assistance Informatique</h2>
          <h3 className='sous-titre'>
            Un souci informatique ? Profitez d’une assistance rapide et adaptée, spécialement pour les petites entreprises.
          </h3>
          <ul>
            <li>Résolution de problèmes matériels et logiciels.</li>
            <li>Maintenance préventive pour éviter les pannes.</li>
            <li>Formation personnalisée pour utiliser vos outils numériques efficacement.</li>
          </ul>
          <p className="price">Sur devis selon le travail</p>
        </article>
      </div>
      <p className="call-to-action">
        Vous êtes une TPE ou une PME et souhaitez booster votre activité grâce au digital ? Contactez-moi dès aujourd'hui pour obtenir un devis gratuit et personnalisé.
      </p> 
    </main>
  );
}

export default Services;