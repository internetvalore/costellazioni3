import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Shield, Target, BarChart, Users, Clock, Phone } from 'lucide-react';

const LandingPageTemplate: React.FC = () => {
  const { slug } = useParams();
  const whatsappUrl = `https://wa.me/393475012682?text=Richiesta%20dalla%20Landing%20Page:%20${encodeURIComponent(slug || 'SCV')}`;

  return (
    <>
      <Helmet>
        <title>Più Demo Qualificate, Meno Sprechi | Sistema Costellazioni Valore</title>
        <meta name="description" content="Attrai i decision-maker giusti e convertili in richieste demo pronte per la vendita con il nostro approccio integrato campagna-landing page" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Più Demo Qualificate, Meno Sprechi: Lead Generation Ottimizzata per SaaS
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-8">
                Attrai i decision-maker giusti e convertili in richieste demo pronte per la vendita con il nostro approccio integrato campagna-landing page
              </p>
              {/* Placeholder per visual/hero image */}
              <div className="aspect-video bg-white/10 rounded-xl backdrop-blur-sm p-8">
                <div className="h-full flex items-center justify-center">
                  <BarChart className="w-24 h-24 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                La Sfida delle Aziende SaaS B2B
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary-600" />
                    Il Problema
                  </h3>
                  <p className="text-gray-600">
                    Generare lead qualificati nel mercato SaaS è complesso. Cicli di vendita lunghi, necessità di educare il prospect e raggiungere i ruoli giusti richiedono un approccio mirato. Il Sistema Costellazioni Valore crea percorsi di conversione specifici per il tuo software.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-primary-600" />
                    La Soluzione
                  </h3>
                  <p className="text-gray-600">
                    Integriamo campagne ultra-mirate con landing page ottimizzate per ogni segmento e fase del funnel. Qualifichiamo i prospect attraverso contenuti tecnici e demo interattive, consegnando al tuo team commerciale solo lead pronti per la vendita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Risultati Concreti per il Tuo SaaS
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Aumento Tasso Conversione Visitatore -> Demo Richiesta",
                  "Focalizzazione su Lead con Reale Potenziale (ICP Fit)",
                  "Riduzione Costo Acquisizione per MQL/SQL",
                  "Reportistica Chiara sull'Efficacia delle Campagne SaaS"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-6 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Collaboriamo con Aziende SaaS Innovative
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="aspect-[3/2] bg-white rounded-lg shadow-sm flex items-center justify-center p-8">
                    <span className="text-gray-400">Logo Cliente {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Parliamo del Tuo Progetto
                </h2>
                
                <div className="space-y-8">
                  {/* WhatsApp Option */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                  >
                    Contattaci su WhatsApp
                  </a>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">oppure</span>
                    </div>
                  </div>

                  {/* Phone Option */}
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Chiamaci al Numero Verde</p>
                    <a 
                      href="tel:800931785"
                      className="inline-flex items-center gap-2 text-2xl font-bold text-primary-600 hover:text-primary-700"
                    >
                      <Phone className="w-6 h-6" />
                      800 931 785
                    </a>
                  </div>

                  <div className="flex items-center gap-2 justify-center text-sm text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>
                      I tuoi dati sono al sicuro secondo la nostra{' '}
                      <a 
                        href="https://www.iubenda.com/privacy-policy/77132692" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPageTemplate;