import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/shared/Section';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sistema Costellazioni Valore</title>
        <meta name="description" content="Informativa sulla privacy del Sistema Costellazioni Valore" />
      </Helmet>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              In questa sezione verrà visualizzata l'informativa completa sul trattamento dei dati personali ai sensi del GDPR. 
              Il contenuto dettagliato è gestito tramite servizio esterno per garantire l'aggiornamento costante e la conformità normativa. 
              Consulta il banner dei cookie per gestire le tue preferenze.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPolicyPage;