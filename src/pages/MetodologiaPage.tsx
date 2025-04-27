import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowRight, Zap, Target, Network, BarChart, CheckCircle2, LineChart, Laptop } from 'lucide-react';

const MetodologiaPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Metodologia | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri la metodologia scientifica e data-driven del Sistema Costellazioni Valore per la lead generation B2B" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lead Generation B2B Scientifica e Misurabile
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            Crediamo che la lead generation efficace non sia frutto del caso, ma di un processo rigoroso, misurabile e ottimizzato costantemente. La nostra metodologia combina strategia, analisi avanzate potenziate dall'AI per definire struttura e contenuti iniziali, tecnologia e un approccio data-driven per trasformare il tuo investimento marketing in un flusso prevedibile di lead qualificati e pronti per la vendita, liberandoti dall'onere della stesura iniziale dei testi.
          </p>
        </div>
      </Section>

      {/* Fasi Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Fase 1 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg"
                  alt="Analisi dati e ricerca strategica"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold">Fase 1: Analisi Strategica</h2>
            </div>
            <div className="pl-16">
              <p className="text-lg text-gray-600 mb-6">
                Iniziamo con un'analisi approfondita del tuo mercato e target per definire una strategia vincente e personalizzata:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Audit completo della situazione attuale",
                  "Definizione dell'Ideal Customer Profile",
                  "Analisi competitiva approfondita",
                  "Keyword research strategica"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                  alt="Team che lavora su progettazione integrata"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold">Fase 2: Progettazione Integrata</h2>
            </div>
            <div className="pl-16">
              <p className="text-lg text-gray-600 mb-6">
                Sviluppiamo una strategia integrata che combina campagne mirate e landing page ottimizzate per massimizzare le conversioni:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary-600" />
                    Campagne
                  </h3>
                  <ul className="space-y-3">
                    <li>Strategia multi-canale integrata</li>
                    <li>Segmentazione avanzata del target</li>
                    <li>Messaging personalizzato per fase</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Network className="w-5 h-5 text-primary-600" />
                    Costellazioni LP
                  </h3>
                  <ul className="space-y-3">
                    <li>Architettura conversion-focused</li>
                    <li>Design basato su best practice B2B</li>
                    <li>Content strategy specializzata</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Fase 3 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Team che implementa soluzioni tecniche"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold">Fase 3: Implementazione Tecnica</h2>
            </div>
            <div className="pl-16">
              <p className="text-lg text-gray-600 mb-6">
                Implementiamo la strategia utilizzando le migliori tecnologie e pratiche del settore:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Laptop className="w-5 h-5" />,
                    title: "Stack Tecnologico",
                    items: ["CMS headless", "Analytics avanzata", "CRM integration"]
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Performance",
                    items: ["Core Web Vitals", "Mobile-first", "Cache avanzata"]
                  },
                  {
                    icon: <BarChart className="w-5 h-5" />,
                    title: "Tracking",
                    items: ["Event tracking", "Goal setup", "Custom dimensions"]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="text-primary-600">{section.icon}</span>
                      {section.title}
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fase 4 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
                  alt="Dashboard di monitoraggio e analisi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold">Fase 4: Lancio e Monitoraggio</h2>
            </div>
            <div className="pl-16">
              <p className="text-lg text-gray-600 mb-6">
                Eseguiamo un lancio controllato con monitoraggio costante delle performance:
              </p>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Processo di Lancio</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-600" />
                        Checklist pre-lancio completa
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-600" />
                        Test multi-browser e dispositivi
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-600" />
                        Verifica tracking completo
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Monitoraggio</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-600" />
                        Dashboard real-time personalizzata
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-600" />
                        Sistema di alert automatici
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-600" />
                        Report settimanali dettagliati
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fase 5 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg"
                  alt="Team che analizza risultati e ottimizza performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold">Fase 5: Ottimizzazione Continua</h2>
            </div>
            <div className="pl-16">
              <p className="text-lg text-gray-600 mb-6">
                Implementiamo un processo continuo di ottimizzazione basato su dati e test:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">CRO</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Analisi comportamentale utenti</li>
                    <li>Heatmap e registrazioni</li>
                    <li>Ottimizzazione form e CTA</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">A/B Testing</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Test multivariati avanzati</li>
                    <li>Split testing continuo</li>
                    <li>Analisi statistica rigorosa</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Reportistica</h3>
                  <ul className="space-y-2 text-sm">
                    <li>KPI tracking automatizzato</li>
                    <li>Report personalizzati</li>
                    <li>Insights actionable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Diagramma di Flusso Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Diagramma di Flusso della Metodologia</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <img 
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
              alt="Diagramma di flusso della metodologia Sistema Costellazioni Valore"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </Section>

      {/* Tecnologie Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Stack Tecnologico</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Analytics & Tracking",
              "CRM & Automation",
              "Testing & Optimization",
              "Development & Deployment"
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <Laptop className="w-8 h-8 text-primary-600" />
                </div>
                <p className="text-sm text-gray-600">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto a Implementare la Metodologia?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Richiedi una Consulenza
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Parliamo del Tuo Progetto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default MetodologiaPage;