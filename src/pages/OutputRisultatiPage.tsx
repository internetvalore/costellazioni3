import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import Breadcrumb from '../components/shared/Breadcrumb';
import { ArrowLeft, ArrowRight, Target, CheckCircle2, BarChart, Award, TrendingUp } from 'lucide-react';

const OutputRisultatiPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Sistema', path: '/sistema' },
    { label: 'Output e Risultati', path: '/sistema/output-risultati' }
  ];

  return (
    <>
      <Helmet>
        <title>Output e Risultati | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri i risultati concreti e misurabili che il Sistema Costellazioni Valore può portare alla tua lead generation B2B" />
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
            Output e Risultati Attesi dal Sistema SCV
          </h1>
          <p className="text-xl text-primary-100">
            Il Sistema Costellazioni Valore è progettato non solo per generare lead, ma per produrre risultati di business tangibili e misurabili. Ci concentriamo su metriche chiave che dimostrano l'efficacia reale del tuo investimento marketing.
          </p>
        </div>
      </Section>

      {/* Lead Quality Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Oltre il Contatto: Lead Veramente Qualificati (MQL/SQL)</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Basta sprecare tempo con contatti generici. SCV mira a generare Marketing Qualified Leads (MQL) e Sales Qualified Leads (SQL) – prospect che corrispondono al tuo Ideal Customer Profile, hanno mostrato un interesse concreto e sono pronti per essere ingaggiati dal tuo team commerciale. Questo si traduce in cicli di vendita più brevi e tassi di chiusura più alti.
              </p>
              <ul className="space-y-4">
                {[
                  "+80% lead che corrispondono all'ICP",
                  "Riduzione del 60% dei lead non qualificati",
                  "Aumento del 45% del tasso di conversione MQL → SQL"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
                alt="Dashboard di analisi qualità dei lead"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CPLQ Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg"
                alt="Grafici e metriche di costo per lead"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Efficienza Massima: Ridurre il Costo per Lead Qualificato (CPLQ)</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Il vero risparmio non sta nel generare più lead economici, ma nel ridurre il costo per acquisire lead di qualità. Attraverso l'ottimizzazione continua delle campagne e delle landing page, miglioriamo progressivamente il CPLQ mantenendo o aumentando la qualità dei contatti generati.
              </p>
              <ul className="space-y-4">
                {[
                  "-40% costo medio per lead qualificato",
                  "+65% efficienza della spesa pubblicitaria",
                  "Riduzione del 35% degli sprechi di budget"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ROI Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">ROI Dimostrabile: Metriche che Contano</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Il nostro sistema di tracking end-to-end ti permette di vedere esattamente come il tuo investimento si traduce in risultati di business. Monitoriamo non solo i lead generati, ma l'intero percorso fino alla conversione in cliente.
              </p>
              <ul className="space-y-4">
                {[
                  "3.5x ROI medio nel primo anno",
                  "Tracking completo del customer journey",
                  "Dashboard personalizzata con KPI chiave"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                alt="Dashboard ROI e metriche di performance"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vuoi Risultati Simili per la Tua Azienda?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Scopri come il Sistema Costellazioni Valore può trasformare la tua lead generation B2B
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Richiedi una Consulenza
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/casi-studio"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Vedi i Casi Studio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default OutputRisultatiPage;