import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowRight, Target, BarChart, LineChart, CheckCircle2 } from 'lucide-react';

const SoluzioniListPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Soluzioni per le Sfide della Lead Generation B2B | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri come il Sistema Costellazioni Valore affronta e risolve le sfide specifiche della lead generation B2B della tua azienda" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Soluzioni per le Sfide della Lead Generation B2B
          </h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Il Sistema Costellazioni Valore non è una soluzione unica, ma un approccio flessibile che si adatta per risolvere le sfide specifiche della tua azienda. Scopri come affrontiamo i problemi più comuni della lead generation B2B, trasformandoli in opportunità di crescita.
          </p>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <Target className="w-7 h-7 text-primary-600" />
                </div>
                <h2 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                  <Link 
                    to="/soluzioni/qualita-lead-b2b"
                  >
                    Migliorare la Qualità dei Lead B2B
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">
                  Stanco di lead che non convertono? Il nostro sistema filtra e qualifica i contatti, fornendo al tuo team commerciale solo opportunità concrete.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Lead scoring avanzato</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Qualificazione automatica</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Integrazione CRM</span>
                  </div>
                </div>
                <Link 
                  to="/soluzioni/qualita-lead-b2b"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group/link"
                >
                  Scopri la soluzione
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <BarChart className="w-7 h-7 text-primary-600" />
                </div>
                <h2 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                  <Link 
                    to="/soluzioni/riduzione-cpl"
                  >
                    Ridurre il Costo per Lead (CPL)
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">
                  Ottimizza la tua spesa pubblicitaria. Grazie all'integrazione campagna-landing page e alla CRO continua, abbattiamo i costi per acquisire lead qualificati.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Ottimizzazione budget</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>CRO avanzato</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>A/B testing continuo</span>
                  </div>
                </div>
                <Link 
                  to="/soluzioni/riduzione-cpl"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group/link"
                >
                  Scopri la soluzione
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <LineChart className="w-7 h-7 text-primary-600" />
                </div>
                <h2 className="text-xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                  <Link 
                    to="/soluzioni/roi-marketing-dimostrabile"
                  >
                    Dimostrare il ROI del Marketing
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">
                  Collega finalmente la spesa marketing ai risultati di business. Il nostro tracciamento end-to-end e la reportistica trasparente mostrano il reale ritorno sul tuo investimento.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Tracking avanzato</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Report automatizzati</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Dashboard personalizzate</span>
                  </div>
                </div>
                <Link 
                  to="/soluzioni/roi-marketing-dimostrabile"
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group/link"
                >
                  Scopri la soluzione
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Hai una Sfida Specifica?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contattaci per scoprire come il Sistema Costellazioni Valore può aiutarti 
            a risolvere le tue sfide specifiche nella lead generation B2B
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Parliamo della Tua Sfida
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default SoluzioniListPage;