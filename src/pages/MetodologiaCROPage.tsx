import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import Breadcrumb from '../components/shared/Breadcrumb';
import { ArrowLeft, ArrowRight, LineChart, Target, BarChart, Zap, RefreshCw } from 'lucide-react';

const MetodologiaCROPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Metodologia', path: '/metodologia' },
    { label: 'CRO & A/B Testing', path: '/metodologia/cro-ab-testing' }
  ];

  return (
    <>
      <Helmet>
        <title>CRO e A/B Testing | Metodologia | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri come l'ottimizzazione continua attraverso CRO e A/B testing sistematico massimizza l'efficacia del Sistema Costellazioni Valore" />
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
            CRO e A/B Testing: Ottimizzazione Continua per Massimizzare i Risultati
          </h1>
          <p className="text-xl text-primary-100">
            L'ottimizzazione continua attraverso la Conversion Rate Optimization (CRO) e l'A/B testing sistematico è parte integrante del nostro DNA. Questo ci permette di migliorare costantemente le performance e il ROI del tuo investimento.
          </p>
        </div>
      </Section>

      {/* CRO Process Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Il Nostro Processo Strutturato di CRO</h2>
              <p className="text-lg text-gray-600 mb-8">
                Seguiamo un ciclo iterativo basato sui dati: 1. Analisi Performance (identifichiamo aree di miglioramento basandoci su dati quantitativi e qualitativi). 2. Formulazione Ipotesi (sviluppiamo ipotesi testabili su come migliorare le conversioni). 3. Prioritizzazione Test (valutiamo l'impatto potenziale e la fattibilità). 4. Esecuzione A/B Test (creiamo varianti e testiamo in modo statisticamente valido). 5. Analisi Risultati (determiniamo le varianti vincenti). 6. Implementazione e Iterazione.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Target className="w-5 h-5" />,
                    title: "Analisi Dati",
                    items: ["Analytics review", "Heatmap analysis", "User recordings"]
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Formulazione Ipotesi",
                    items: ["Research-based", "Data-driven", "User-focused"]
                  },
                  {
                    icon: <BarChart className="w-5 h-5" />,
                    title: "Test & Ottimizzazione",
                    items: ["A/B testing", "Multivariate", "Iterative improvement"]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600">{section.icon}</span>
                      </div>
                      <h3 className="font-semibold">{section.title}</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-primary-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* A/B Testing Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <LineChart className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">A/B Testing: Testare per Vincere</h2>
              <p className="text-lg text-gray-600 mb-8">
                Non ci affidiamo a intuizioni. Utilizziamo A/B test rigorosi per confrontare diverse versioni di elementi chiave: dalle headline degli annunci ai testi delle landing page, dalle Call-to-Action ai layout e ai campi dei form. Solo le varianti che dimostrano un miglioramento statisticamente significativo vengono implementate.
              </p>
              <div className="bg-white p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-6">Il Nostro Approccio al Testing</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Test Quantitativi</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        <span>Split testing A/B</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        <span>Multivariate testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        <span>Statistical significance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-4">Test Qualitativi</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        <span>User testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        <span>Session recordings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary-600">•</span>
                        <span>Feedback surveys</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Elements Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Elementi Chiave Sotto Esame</h2>
              <p className="text-lg text-gray-600 mb-8">
                Testiamo continuamente elementi ad alto impatto come: Titoli e Testi degli annunci, Headline e Copy delle Landing Page, Design e Testo delle CTA, Lunghezza e Campi dei Form, Layout e Struttura delle Pagine, Offerte e Lead Magnet, Immagini e Video.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Elementi di Contenuto</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Headlines & Value Proposition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Copy & Messaging</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>CTA Text & Design</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Elementi di Design</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Layout & Visual Hierarchy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Form Design & Fields</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Social Proof Placement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <BarChart className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Perché l'Ottimizzazione Non Finisce Mai</h2>
              <p className="text-lg text-gray-600 mb-8">
                Il mercato e il comportamento degli utenti cambiano continuamente. L'ottimizzazione costante garantisce che le tue campagne e landing page rimangano performanti nel tempo, massimizzando la qualità dei lead, riducendo il CPLQ e assicurando il miglior ROI possibile.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    stat: "+45%",
                    label: "Conversion Rate",
                    desc: "Incremento medio dopo ottimizzazione"
                  },
                  {
                    stat: "-35%",
                    label: "Cost per Lead",
                    desc: "Riduzione media dei costi"
                  },
                  {
                    stat: "2.5x",
                    label: "ROI",
                    desc: "Miglioramento del ritorno sull'investimento"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{item.stat}</div>
                    <div className="font-medium mb-1">{item.label}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vuoi Ottimizzare le Tue Performance?
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
              to="/casi-studio"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Vedi i Risultati dei Nostri Test
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default MetodologiaCROPage;