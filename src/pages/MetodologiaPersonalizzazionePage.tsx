import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import Breadcrumb from '../components/shared/Breadcrumb';
import { ArrowLeft, ArrowRight, Target, Users, Settings, Zap, BarChart } from 'lucide-react';

const MetodologiaPersonalizzazionePage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Metodologia', path: '/metodologia' },
    { label: 'Personalizzazione', path: '/metodologia/personalizzazione' }
  ];

  return (
    <>
      <Helmet>
        <title>Personalizzazione | Metodologia | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri come il Sistema Costellazioni Valore utilizza la personalizzazione avanzata per massimizzare la rilevanza e le conversioni nella lead generation B2B" />
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
            Personalizzazione: Esperienze Rilevanti su Scala
          </h1>
          <p className="text-xl text-primary-100">
            Nel marketing B2B moderno, un messaggio generico non basta più. La personalizzazione è fondamentale per catturare l'attenzione e guidare la conversione. Nel Sistema Costellazioni Valore, utilizziamo tecniche avanzate per adattare l'esperienza utente in base alla fonte di traffico, al comportamento e al profilo del prospect.
          </p>
        </div>
      </Section>

      {/* Dynamic Content Section */}
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
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                alt="Team che lavora sulla personalizzazione dei contenuti"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Advanced Segmentation Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                alt="Dashboard di segmentazione e analisi comportamentale"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Oltre il DTR: Segmentazione e Trigger</h2>
              </div>
              <p className="text-lg text-gray-600">
                La nostra personalizzazione va oltre il DTR. Possiamo segmentare l'esperienza in base a dati demografici/firmografici (se disponibili tramite integrazioni), geolocalizzazione, o comportamento di navigazione precedente sul sito. Questo ci permette di creare percorsi all'interno delle "Costellazioni" di landing page che sono veramente su misura per ogni tipologia di utente.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">I Vantaggi di un Approccio Personalizzato</h2>
              <p className="text-lg text-gray-600 mb-8">
                Personalizzare l'esperienza porta a: Tassi di conversione significativamente più alti, Miglioramento del Quality Score nelle campagne PPC, Maggiore engagement dell'utente, Lead più qualificati perché esposti a messaggi più pertinenti, Perfezionamento della "Simbiosi" campagna-landing page.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    stat: "+65%",
                    label: "Conversion Rate",
                    desc: "Aumento con contenuto personalizzato"
                  },
                  {
                    stat: "+45%",
                    label: "Quality Score",
                    desc: "Miglioramento medio PPC"
                  },
                  {
                    stat: "2.1x",
                    label: "Lead Quality",
                    desc: "Incremento qualità dei lead"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
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

      {/* Results Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <BarChart className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Risultati Misurabili</h2>
              <div className="bg-white p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Impatto sulla Performance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-primary-600">•</span>
                        <span>Riduzione del bounce rate fino al 45%</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-600">•</span>
                        <span>Aumento del tempo di permanenza del 75%</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-600">•</span>
                        <span>Miglioramento del ROI delle campagne del 55%</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Impatto sul Business</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-primary-600">•</span>
                        <span>Cicli di vendita più brevi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-600">•</span>
                        <span>Maggiore tasso di chiusura</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-600">•</span>
                        <span>Customer Lifetime Value più alto</span>
                      </li>
                    </ul>
                  </div>
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
            Vuoi Personalizzare la Tua Lead Generation?
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
              to="/metodologia/integrazione-tecnologica"
              className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Vedi Come Integriamo la Tecnologia
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default MetodologiaPersonalizzazionePage;