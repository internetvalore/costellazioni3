import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import Breadcrumb from '../components/shared/Breadcrumb';
import { ArrowLeft, ArrowRight, Network, Zap, Target } from 'lucide-react';

const SimbiosiCostellazioniPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Sistema', path: '/sistema' },
    { label: 'Simbiosi & Costellazioni', path: '/sistema/simbiosi-costellazioni' }
  ];

  return (
    <>
      <Helmet>
        <title>Simbiosi e Costellazioni | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri come i concetti di Simbiosi e Costellazioni rendono il Sistema Costellazioni Valore un approccio rivoluzionario alla lead generation B2B" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <Link 
            to="/sistema"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna a Il Sistema
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simbiosi e Costellazioni: Il Cuore del Sistema SCV
          </h1>
          <p className="text-xl text-primary-100">
            I concetti di "Simbiosi" e "Costellazioni" sono i pilastri su cui si fonda l'efficacia del Sistema Costellazioni Valore. Comprendere come interagiscono è fondamentale per capire perché il nostro approccio supera la lead generation tradizionale.
          </p>
        </div>
      </Section>

      {/* Simbiosi Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">La Simbiosi Campagna-Landing Page: Coerenza Totale</h2>
              </div>
              <p className="text-lg text-gray-600">
                Definiamo "Simbiosi" la progettazione intrinsecamente collegata tra una campagna pubblicitaria specifica (su Google, LinkedIn, etc.) e la sua landing page dedicata. Non si tratta solo di allineare i messaggi (message match), ma di creare un percorso utente senza frizioni dove la landing page è l'estensione naturale e ottimizzata dell'annuncio, progettata per convertire esattamente l'intento intercettato dalla campagna. Questo massimizza la rilevanza, migliora i Quality Score e abbatte i costi.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
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
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Le Costellazioni di Landing Page: Precisione su Scala</h2>
              </div>
              <p className="text-lg text-gray-600">
                Una singola landing page non può rispondere efficacemente a tutti i bisogni. Le "Costellazioni" sono ecosistemi intelligenti di landing page multiple, ognuna dedicata a uno specifico segmento di pubblico, parola chiave, prodotto/servizio o fase del funnel. Questa architettura ci permette di personalizzare l'esperienza su larga scala, parlando la lingua di ogni prospect e aumentando esponenzialmente le probabilità di generare un lead qualificato. Ogni "stella" della costellazione è ottimizzata per il suo scopo specifico.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Integration Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Simbiosi + Costellazioni = Performance Superiore</h2>
              <p className="text-lg text-gray-600">
                La potenza di SCV deriva dalla combinazione di questi due concetti. Le campagne portano traffico mirato a specifiche landing page ("stelle") all'interno della "Costellazione", e ogni landing page lavora in "Simbiosi" con la sua campagna di riferimento per convertire al meglio quel traffico qualificato. Il risultato è un sistema adattivo, efficiente e focalizzato sulla qualità.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
            <Link
              to="/sistema"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Torna alla Panoramica del Sistema
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/metodologia"
              className="inline-flex items-center justify-center gap-2 bg-primary-100 text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-200 transition-colors"
            >
              Scopri la nostra Metodologia
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SimbiosiCostellazioniPage;