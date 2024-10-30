import React from 'react';

function Services() {
    return (
    <section id="services">
        <div className="container">
            <h2>Mes Services</h2>
            <div className="services-grid">
                <div className="service-card"> 
                    <div className="service-card-inner">
                    <div className="service-card-front">
                        <h3>Création de sites internet</h3>
                        <p>
                        GB WebAssist conçoit et développe des sites web performants, optimisés pour le référencement (SEO) et qui vous aideront à atteindre vos objectifs en ligne.
                        </p>
                    </div>
                    <div className="service-card-back">
                        <ul>
                            <li>Sites vitrines ou e-commerce</li>
                            <li>Nom de domaine et hébergement</li>
                            <li>Design responsive (s'adapte à tous les appareils)</li>
                            <li>Optimisation pour le référencement (SEO)</li>
                            <li>Protection contre les attaques et les piratages</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service-card-inner">
                        <div className="service-card-front">
                        <h3>Assistance informatique</h3>
                        <p>
                        Disponible et à l'écoute, GB WebAssist vous propose une assistance informatique personnalisée pour répondre à vos besoins.
                        </p>
                        </div>
                        <div className="service-card-back">
                        <ul>
                            <li>Résolution de problèmes matériels et logiciels</li>
                            <li>Installation de nouveaux logiciels et configuration de périphériques (imprimantes, scanners).</li>
                            <li>Nettoyage et optimisation du système, mises à jour logicielles, sauvegarde des données.</li>
                            <li>Protection contre les virus et les logiciels malveillants.</li>
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