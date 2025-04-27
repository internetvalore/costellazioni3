import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowRight, Download } from 'lucide-react';

const GuideListPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Guide Gratuite e White Paper per la Lead Generation B2B | Sistema Costellazioni Valore</title>
        <meta name="description" content="Approfondisci le tue conoscenze con le nostre guide pratiche e white paper strategici. Scarica gratuitamente risorse di valore per ottimizzare le tue campagne, migliorare le conversioni e far crescere il tuo business B2B." />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Guide Gratuite e White Paper per la Lead Generation B2B</h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Approfondisci le tue conoscenze con le nostre guide pratiche e white paper strategici. Scarica gratuitamente risorse di valore per ottimizzare le tue campagne, migliorare le conversioni e far crescere il tuo business B2B.
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Guide 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Copertina Guida Lead Generation B2B"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    Lead Generation
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  <Link 
                    to="/risorse/guide-download/guida-lead-gen-b2b"
                  >
                    Guida Completa alla Lead Generation B2B in Italia
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Strategie, tattiche e strumenti essenziali per generare lead qualificati nel mercato B2B italiano. Un must-have per ogni marketing manager.
                </p>
                <Link 
                  to="/risorse/guide-download/guida-lead-gen-b2b"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group/link"
                >
                  <Download className="w-4 h-4" />
                  <span className="group-hover/link:underline">Scarica Gratis</span>
                </Link>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg"
                  alt="Copertina Checklist Ottimizzazione Landing Page"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    CRO
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  <Link 
                    to="/risorse/guide-download/checklist-ottimizzazione-lp"
                  >
                    Checklist Definitiva per l'Ottimizzazione delle Landing Page
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Non lasciare nulla al caso. Usa questa checklist dettagliata per assicurarti che le tue landing page siano progettate per la massima conversione.
                </p>
                <Link 
                  to="/risorse/guide-download/checklist-ottimizzazione-lp"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group/link"
                >
                  <Download className="w-4 h-4" />
                  <span className="group-hover/link:underline">Scarica Gratis</span>
                </Link>
              </div>
            </div>

            {/* Guide 3 - Placeholder for future guides */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden opacity-50">
              <div className="aspect-[4/3] bg-gray-100"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    Coming Soon
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3">Nuova Guida in Arrivo</h2>
                <p className="text-gray-600 mb-4">
                  Stiamo preparando nuove risorse per aiutarti a migliorare la tua lead generation B2B.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vuoi Contenuti Personalizzati?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contattaci per ricevere contenuti e guide specifiche per il tuo settore
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Richiedi una Consulenza
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default GuideListPage;