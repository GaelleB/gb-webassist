import React from 'react';

function Services() {
return (
    <section id="services">
        <div className="container">
            <h2>Nos Services</h2>
            <div className="service">
                <h3>Création de sites internet</h3>
                <p>
                    Nous créons des sites web performants et optimisés pour le référencement (SEO).
                </p>
                <ul>
                    <li>Conception sur mesure</li>
                    <li>Développement front-end et back-end</li>
                    <li>Optimisation SEO</li>
                    <li>Hébergement et maintenance</li>
                </ul>
            </div>
            <div className="service">
                <h3>Assistance informatique</h3>
                <p>
                    Nous offrons une assistance informatique complète pour les particuliers et les professionnels.
                </p>
                <ul>
                    <li>Dépannage informatique</li>
                    <li>Configuration d'ordinateurs et de réseaux</li>
                    <li>Installation de logiciels</li>
                    <li>Sécurité informatique</li>
                </ul>
            </div>
        </div>
    </section>
);
}

export default Services;