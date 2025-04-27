import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowRight, BookOpen, Download, Mail } from 'lucide-react';

const RisorsePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Risorse | Sistema Costellazioni Valore</title>
        <meta name="description" content="Risorse, guide e approfondimenti sulla lead generation B2B e il Sistema Costellazioni Valore" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Risorse</h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Approfondimenti, guide e strumenti per ottimizzare la tua lead generation B2B
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">
              Esplora la nostra collezione di risorse dedicate alla lead generation B2B. 
              Dal nostro blog ricco di approfondimenti alle guide pratiche scaricabili, 
              troverai tutto ciò che ti serve per migliorare le tue strategie di acquisizione lead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Section */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Blog</h2>
              <p className="text-gray-600 mb-6">
                Articoli, analisi e approfondimenti sulla lead generation B2B, 
                strategie di marketing e best practice del settore.
              </p>
              <Link 
                to="/risorse/blog"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Esplora il Blog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Guides Section */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Guide e Download</h2>
              <p className="text-gray-600 mb-6">
                Guide pratiche, template e risorse scaricabili per ottimizzare 
                le tue strategie di lead generation B2B.
              </p>
              <Link 
                to="/risorse/guide-download"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scarica le Guide Gratuite
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Rimani Aggiornato
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Iscriviti alla nostra newsletter per ricevere aggiornamenti, 
            nuove risorse e best practice sulla lead generation B2B
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="La tua email aziendale"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button 
                type="submit" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex-shrink-0"
              >
                Iscriviti
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default RisorsePage;