import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import Breadcrumb from '../components/shared/Breadcrumb';
import { ArrowLeft, ArrowRight, BarChart, LineChart, Target, Search } from 'lucide-react';

const MetodologiaAnalisiDatiPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Metodologia', path: '/metodologia' },
    { label: 'Analisi Dati', path: '/metodologia/analisi-dati' }
  ];

  return (
    <>
      <Helmet>
        <title>Analisi dei Dati | Metodologia | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri come l'analisi approfondita dei dati guida ogni aspetto del Sistema Costellazioni Valore per massimizzare l'efficacia della lead generation B2B" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <Link 
            to="/metodologia"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla Metodologia
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Analisi dei Dati: Il Fondamento della Nostra Metodologia
          </h1>
          <p className="text-xl text-primary-100">
            Nel Sistema Costellazioni Valore, ogni decisione strategica e ogni ottimizzazione operativa si basa su un'analisi approfondita dei dati. Utilizziamo un approccio multi-livello per comprendere il tuo mercato, i tuoi clienti e le performance delle campagne.
          </p>
        </div>
      </Section>

      {/* Quantitative Analysis Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Analisi Quantitativa: Capire il "Cosa"</h2>
              </div>
              <p className="text-lg text-gray-600">
                Utilizziamo strumenti di web analytics (come GA4) per analizzare i dati di traffico, le conversioni, i percorsi utente e le performance delle campagne. Identifichiamo pattern, colli di bottiglia e opportunità basate su metriche oggettive.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Metriche Chiave Monitorate</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Tassi di conversione per segmento</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Performance per canale e campagna</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Costo per lead qualificato (CPLQ)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                alt="Dashboard di analisi quantitativa con grafici e metriche"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Qualitative Analysis Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg"
                alt="Heatmap e analisi comportamentale degli utenti"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Analisi Qualitativa: Capire il "Perché"</h2>
              </div>
              <p className="text-lg text-gray-600">
                I numeri da soli non bastano. Integriamo l'analisi quantitativa con strumenti qualitativi come heatmap, registrazioni di sessioni e sondaggi on-page per comprendere il comportamento reale degli utenti, le loro motivazioni e le loro frustrazioni.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Strumenti di Analisi</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Heatmap e scroll map</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Registrazioni delle sessioni utente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Sondaggi di feedback contestuali</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Strategic Analysis Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Analisi Strategica: Contesto e Opportunità</h2>
              <p className="text-lg text-gray-600 mb-8">
                Include l'analisi dei competitor, la keyword research approfondita per identificare l'intento di ricerca, la definizione precisa dell'Ideal Customer Profile (ICP) e l'audit delle tue attuali attività di marketing per stabilire una baseline.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Analisi Competitiva</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Benchmark di settore</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Gap analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Opportunità di differenziazione</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Keyword Research</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Analisi dell'intento di ricerca</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Mappatura del customer journey</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Identificazione gap di contenuto</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Data to Action Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <LineChart className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Dai Dati alle Azioni Concrete</h2>
              <p className="text-lg text-gray-600 mb-8">
                L'obiettivo finale dell'analisi è generare insight azionabili. Questi insight informano la strategia delle campagne, la progettazione delle landing page, la formulazione delle ipotesi per gli A/B test e l'ottimizzazione continua dell'intero sistema SCV.
              </p>
              <div className="bg-white p-8 rounded-xl">
                <h3 className="font-semibold mb-6">Processo di Ottimizzazione Continua</h3>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  {[
                    'Raccolta Dati',
                    'Analisi',
                    'Ipotesi',
                    'Test & Implementazione'
                  ].map((step, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary-600 font-semibold">{index + 1}</span>
                      </div>
                      <span className="font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vuoi un'Analisi Approfondita del Tuo Marketing B2B?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/metodologia"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Scopri le altre Fasi della Metodologia
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Richiedi una Consulenza sui Dati
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default MetodologiaAnalisiDatiPage;