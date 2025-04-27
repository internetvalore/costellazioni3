import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowRight, Target, BarChart, LineChart, CheckCircle2, TrendingUp } from 'lucide-react';

const BeneficiListPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Benefici | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri i benefici chiave del Sistema Costellazioni Valore per la tua lead generation B2B" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Benefici Chiave del Sistema Costellazioni Valore
          </h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Oltre a generare lead di qualità, il Sistema Costellazioni Valore è progettato per portare vantaggi strategici misurabili al tuo business. Scopri come il nostro approccio integrato ottimizza le tue performance e accelera la crescita.
          </p>
        </div>
      </Section>

      {/* Benefits Grid */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/benefici/efficienza-commerciale"
                  className="hover:text-primary-600"
                >
                  Efficienza Commerciale Aumentata
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Fornisci al tuo team commerciale solo lead qualificati e pronti all'acquisto, riducendo i tempi morti e massimizzando la produttività.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Lead più qualificati
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Ciclo di vendita ridotto
                </li>
              </ul>
              <Link 
                to="/benefici/efficienza-commerciale"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri di più
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/benefici/ottimizzazione-budget-ads"
                  className="hover:text-primary-600"
                >
                  Ottimizzazione Budget Pubblicitario
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Smetti di sprecare budget. Il nostro sistema garantisce che ogni euro speso in campagne sia finalizzato ad attrarre e convertire i clienti giusti.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  ROI aumentato
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Costi ridotti
                </li>
              </ul>
              <Link 
                to="/benefici/ottimizzazione-budget-ads"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri di più
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/benefici/crescita-prevedibile"
                  className="hover:text-primary-600"
                >
                  Crescita del Business Prevedibile
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Costruisci un motore di lead generation scalabile e affidabile che alimenta la tua crescita in modo costante e misurabile nel tempo.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Flusso lead costante
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                  Crescita pianificabile
                </li>
              </ul>
              <Link 
                to="/benefici/crescita-prevedibile"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri di più
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vuoi Ottenere Questi Benefici?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Scopri come il Sistema Costellazioni Valore può portare questi vantaggi alla tua azienda
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Parliamo dei Tuoi Obiettivi
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default BeneficiListPage;