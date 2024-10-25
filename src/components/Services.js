import React from 'react';

function Services() {
    return (
    <section id="services">
        <div className="container">
            <h2>Mes Services</h2>
          <div className="services-grid"> {/* Conteneur pour les cartes */}
            <div className="service-card"> 
                <div className="service-card-inner">
                <div className="service-card-front">
                    <h3>Création de sites internet</h3>
                    <p>
                    Je crée des sites web performants et optimisés pour le référencement (SEO).
                    </p>
                </div>
                <div className="service-card-back">
                    <ul>
                        <li>Conception sur mesure</li>
                        <li>Développement front-end et back-end</li>
                        <li>Optimisation SEO</li>
                        <li>Hébergement et maintenance</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="service-card">
                <div className="service-card-inner">
                    <div className="service-card-front">
                    <h3>Assistance informatique</h3>
                    <p>
                        J'offre une assistance informatique complète pour les particuliers et les professionnels.
                    </p>
                    </div>
                    <div className="service-card-back">
                    <ul>
                        <li>Dépannage informatique</li>
                        <li>Configuration d'ordinateurs et de réseaux</li>
                        <li>Installation de logiciels</li>
                        <li>Sécurité informatique</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
}

export default Services;