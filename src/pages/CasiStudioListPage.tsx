import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowRight, Filter } from 'lucide-react';

const CasiStudioListPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Esempi Illustrativi e Risultati | Sistema Costellazioni Valore</title>
        <meta name="description" content="Esempi illustrativi e benchmark di settore che mostrano il potenziale del Sistema Costellazioni Valore nella lead generation B2B" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Esempi Illustrativi e Risultati Potenziali</h1>
          <p className="text-xl md:text-2xl text-primary-100">
            In questa sezione presentiamo esempi basati su benchmark di settore e studi pubblici documentati per illustrare l'efficacia potenziale della metodologia del Sistema Costellazioni Valore. Il nostro impegno è aggiungere progressivamente casi studio reali di successo dei nostri clienti, non appena disponibili e autorizzati.
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Filter className="w-5 h-5" />
              <span className="text-sm">Filtri (coming soon)</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Settore', 'Obiettivo', 'Budget', 'Risultati'].map((filter) => (
                <div key={filter} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-500 cursor-not-allowed">
                  {filter}
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benchmark Case 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
                  alt="Dashboard di analisi SaaS mostrante metriche di riduzione costi e ROI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    Benchmark
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    SaaS
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3">Benchmark: Riduzione CPL nel Settore SaaS</h2>
                <p className="text-gray-600 mb-4">
                  Analisi basata su studi di settore che mostra come l'ottimizzazione integrata campagna-LP possa ridurre significativamente il Costo per Lead per aziende SaaS.
                </p>
                <Link 
                  to="/casi-studio/benchmark-cpl-saas"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                >
                  Leggi il caso studio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Benchmark Case 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg"
                  alt="Analisi di performance landing page con grafici di conversione e heatmap"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    Benchmark
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    PPC
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3">Benchmark: Ottimizzazione Landing Page PPC</h2>
                <p className="text-gray-600 mb-4">
                  Esempio illustrativo basato su best practice e dati pubblici (es. Unbounce) sull'impatto della CRO e del message match sulle conversioni da traffico PPC.
                </p>
                <Link 
                  to="/casi-studio/benchmark-lp-ppc"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                >
                  Leggi il caso studio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vuoi Risultati Simili?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Scopri come il Sistema Costellazioni Valore può aiutare la tua azienda a raggiungere obiettivi concreti nella lead generation B2B
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

export default CasiStudioListPage;