import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowRight, Zap, Target, Network, BarChart, CheckCircle2, LineChart, Library } from 'lucide-react';

const SistemaPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Il Sistema | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri come funziona il Sistema Costellazioni Valore: un approccio innovativo alla lead generation B2B basato su dati e metodologie scientifiche" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lead Generation B2B Scientifica e Misurabile
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            Un sistema innovativo che trasforma il tuo approccio alla lead generation B2B, basato su dati e metodologie scientifiche per massimizzare il ROI e la qualità dei lead
          </p>
        </div>
      </Section>

      {/* Simbiosi Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Il Concetto di "Simbiosi"</h2>
              <p className="text-lg text-gray-600 mb-6">
                La Simbiosi rappresenta l'integrazione perfetta tra campagne di lead generation e landing page ottimizzate, creando un ecosistema digitale che massimizza le conversioni. Ogni elemento lavora in sinergia per attrarre e convertire lead di alta qualità.
              </p>
              <ul className="space-y-4">
                {[
                  "Integrazione completa tra campagne e landing page",
                  "Ottimizzazione continua basata sui dati",
                  "Personalizzazione per il tuo settore specifico"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Team che analizza dati e metriche di marketing su schermi e dashboard"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Costellazioni Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
                alt="Rete interconnessa di nodi che rappresenta il concetto di Costellazioni di landing page"
                className="w-full h-full object-cover rounded-xl shadow-sm"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Il Concetto di "Costellazioni"</h2>
              <p className="text-lg text-gray-600 mb-6">
                Le Costellazioni rappresentano una rete interconnessa di landing page specializzate, ciascuna progettata per intercettare specifici momenti del customer journey B2B. Questo approccio garantisce la massima rilevanza e conversione in ogni fase del processo decisionale.
              </p>
              <ul className="space-y-4">
                {[
                  "Landing page multiple ottimizzate per conversione",
                  "Mappatura completa del customer journey",
                  "Contenuti personalizzati per ogni fase decisionale"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Conoscenza Settoriale Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Library className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Il Terzo Ingrediente: Conoscenza Settoriale Profonda</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                La vera forza della "Simbiosi" tra campagne e "Costellazioni" di landing page risiede nella nostra profonda conoscenza del mercato specifico del cliente, dei suoi competitor e del suo Ideal Customer Profile (ICP). Questa comprensione settoriale ci permette di creare messaggi ultra-pertinenti, campagne mirate e percorsi di conversione che parlano davvero la lingua del tuo pubblico, trasformando l'architettura SCV in risultati concreti.
              </p>
              <ul className="space-y-4">
                {[
                  "Analisi approfondita del mercato specifico",
                  "Comprensione delle dinamiche competitive",
                  "Messaggi mirati per il tuo settore"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Team che analizza dati di settore e competitor"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Output e Risultati Attesi</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                metric: "Qualità Lead",
                value: "+80%",
                desc: "Incremento medio della qualità dei lead generati"
              },
              {
                metric: "CPLQ",
                value: "-40%",
                desc: "Riduzione del costo per lead qualificato"
              },
              {
                metric: "ROI",
                value: "3.5x",
                desc: "Return on Investment medio nel primo anno"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">{stat.metric}</h3>
                <p className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <img 
              src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
              alt="Dashboard con grafici di crescita e metriche di performance marketing"
              className="w-full h-full object-cover rounded-xl"
            />
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Grafici basati su benchmark di settore e dati aggregati dei nostri clienti
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Scopri Come Implementare il Sistema
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/metodologia"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Approfondisci la Metodologia
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/casi-studio"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Vedi Esempi e Risultati
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SistemaPage;