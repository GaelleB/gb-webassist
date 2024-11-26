import React from 'react';
import '../styles/global.css';

function Services() {
  return (
    <main className="main-services">
      <h2 className='service-title'>Mes services</h2>
      <div className="cards-container">
        <article className="service-card">
          <h3>Création de site vitrine</h3>
          <p className='sous-titre'>
            Boostez votre visibilité en ligne avec un site vitrine professionnel. Je crée un site sur mesure qui reflète l’image de votre entreprise et capte l’attention de vos visiteurs. Offrez une expérience utilisateur fluide et intuitive.
          </p>
          <ul>
            <li>Renforcez votre image de marque et gagnez la confiance de vos visiteurs</li>
            <li>Présentez vos produits et services de manière professionnelle et impactante</li>
            <li>Boostez vos ventes et générez des leads qualifiés</li>
            <li>Offrez un site moderne et responsive, accessible sur tous les appareils</li>
            <li>Optimisez votre présence en ligne avec un design personnalisé et un SEO performant</li>
          </ul>
          <p className="price">600 €</p>
        </article>

        <article className="service-card">
          <h3>Création de site e-commerce</h3>
          <p className='sous-titre'>
            Transformez votre activité avec un site e-commerce performant. Vendez vos produits en ligne 24/7, offrez une expérience d'achat fluide et suivez vos ventes grâce à une plateforme sur mesure.
          </p>
          <ul>
            <li>Multipliez vos ventes avec une boutique en ligne disponible 24/7, accessible de partout</li>
            <li>Gérez facilement vos produits, stocks et commandes grâce à un tableau de bord intuitif</li>
            <li>Offrez une expérience d'achat fluide et sécurisée avec des options de paiement optimisées</li>
            <li>Créez des relations durables avec vos clients grâce à des offres personnalisées et un programme de fidélité</li>
            <li>Optimisez votre gestion en automatisant des tâches comme la gestion des stocks ou l'envoi de notifications</li>
            <li>Suivez les performances de votre site en temps réel et ajustez votre stratégie de vente pour maximiser vos revenus</li>
          </ul>
          <p className="price">1500 €</p>
        </article>

        <article className="service-card">
          <h3>Refonte & Modification de Site</h3>
          <p className='sous-titre'>
            Votre site a vieilli ? Offrez-lui une nouvelle jeunesse ! Je réalise une refonte complète ou partielle pour moderniser le design, améliorer son SEO et optimiser l'expérience utilisateur.
          </p>
          <ul>
            <li>Redonnez vie à votre site avec un design moderne, élégant et ergonomique qui séduit vos visiteurs</li>
            <li>Boostez votre visibilité sur Google avec un SEO optimisé et améliorez la vitesse de chargement pour une meilleure expérience utilisateur</li>
            <li>Rendez votre site plus sécurisé et ajoutez de nouvelles fonctionnalités pour répondre aux besoins de vos utilisateurs</li>
            <li>Adaptez votre site aux dernières technologies pour rester compétitif et attirer de nouveaux visiteurs</li>
          </ul>
          <p className="price">Sur devis selon le travail</p>
        </article>

        <article className="service-card">
          <h3>Assistance Informatique</h3>
          <p className='sous-titre'>
            Vous avez un souci informatique ? Je vous propose une assistance rapide et personnalisée, à domicile ou à distance, pour résoudre tous vos problèmes informatiques.
          </p>
          <ul>
            <li>Résolvez rapidement vos problèmes informatiques grâce à un dépannage matériel et logiciel professionnel</li>
            <li>Installez et configurez vos logiciels et périphériques en toute simplicité, sans tracas</li>
            <li>Préservez la performance de vos systèmes avec une maintenance régulière et des solutions curatives sur mesure</li>
            <li>Protégez vos données et votre réseau contre les menaces grâce à une sécurité renforcée</li>
            <li>Bénéficiez de formations et de conseils personnalisés pour maîtriser vos outils informatiques et optimiser vos processus</li>
          </ul>
          <p className="price">Sur devis selon le travail</p>
        </article>

      </div>
      <p className="call-to-action">
        Les tarifs sont donnés à titre indicatif et peuvent varier selon la complexité du projet, les attentes du client et les frais occasionnés.
        Contactez-moi dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
      </p> 
    </main>
  );
}

export default Services;