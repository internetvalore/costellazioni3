import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pagina non trovata | Sistema Costellazioni Valore</title>
        <meta name="description" content="La pagina richiesta non è stata trovata" />
      </Helmet>
      
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pagina non trovata</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;