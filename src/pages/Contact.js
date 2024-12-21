import React from 'react';
import '../styles/global.css'; 

function Contact() {
  return (
    <main className="main-contact">
      <article className="article-contact">
      <h1 className="contact-title">Contactez-moi</h1>
        <p>
        Vous avez une question ou un projet à me confier ? Je serais ravie de vous accompagner !<br/>
        Veuillez remplir le formulaire de contact via le bouton ci-dessous :

        </p>
        <button
          className="buttonGoogleForm"
          onClick={() => window.open('https://forms.gle/EQ2JaD13LkmDBTLi6', '_blank')}
        >
          Remplir le formulaire de contact
        </button>
        <p> 
          Veuillez remplir le formulaire de demande de devis via le bouton ci-dessous :
        </p>
        <button
          className="buttonGoogleForm"
          onClick={() => window.open('https://forms.gle/LkaFWhAmyBAZ3Nsq9', '_blank')}
        >
          Remplir le formulaire pour demander un devis
        </button>
      </article>
    </main>
  );
}

export default Contact;
