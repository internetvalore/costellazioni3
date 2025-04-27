import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/shared/Section';

const CookiePolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Sistema Costellazioni Valore</title>
        <meta name="description" content="Informativa sui cookie del Sistema Costellazioni Valore" />
      </Helmet>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Qui troverai l'informativa dettagliata sull'utilizzo dei cookie tecnici e di terze parti su questo sito. 
              Potrai consultare l'elenco dei cookie utilizzati e gestire le tue preferenze tramite il banner dei cookie 
              o le impostazioni del tuo browser. Il contenuto è gestito dinamicamente per assicurare l'aderenza alle 
              normative vigenti.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CookiePolicyPage;