import React from 'react';

function Tarifs() {
    return (
        <section id="tarifs">
            <div className="container">
                <h2>Tarifs</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Prestation</th>
                            <th>Tarif</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Création de site vitrine</td>
                            <td>à partir de 600€</td>
                        </tr>
                        <tr>
                            <td>Création de site e-commerce</td>
                            <td>à partir de 1500€</td>
                        </tr>
                        <tr>
                            <td>Dépannage informatique à domicile</td>
                            <td>30€/heure</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                * Ces tarifs sont donnés à titre indicatif et peuvent varier en fonction de la complexité du projet.
                </p>
            </div>
        </section>
    );
}

export default Tarifs;