import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import Breadcrumb from '../components/shared/Breadcrumb';
import { ArrowLeft, ArrowRight, Laptop, Database, Workflow, Settings, RefreshCw } from 'lucide-react';

const MetodologiaIntegrazionePage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Metodologia', path: '/metodologia' },
    { label: 'Integrazione Tecnologica', path: '/metodologia/integrazione-tecnologica' }
  ];

  return (
    <>
      <Helmet>
        <title>Integrazione Tecnologica | Metodologia | Sistema Costellazioni Valore</title>
        <meta name="description" content="Scopri come il Sistema Costellazioni Valore si integra perfettamente con i tuoi sistemi CRM e Marketing Automation per massimizzare l'efficienza della lead generation B2B" />
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
            Integrazione Tecnologica: Flussi di Lavoro Efficaci
          </h1>
          <p className="text-xl text-primary-100">
            Un lead generato è solo l'inizio. Per trasformarlo in cliente, è essenziale un flusso di lavoro efficiente e integrato. Il Sistema Costellazioni Valore pone grande enfasi sull'integrazione tecnologica fluida con i tuoi sistemi CRM e Marketing Automation esistenti.
          </p>
        </div>
      </Section>

      {/* CRM/MAP Role Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Connettere Marketing e Vendite</h2>
              </div>
              <p className="text-lg text-gray-600">
                L'integrazione con piattaforme come HubSpot, Salesforce, Marketo o altre è cruciale. Permette di trasferire automaticamente i dati dei lead raccolti dalle landing page, eliminando errori manuali e garantendo che il team commerciale riceva informazioni complete e tempestive.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Team che lavora su integrazione CRM e automazione"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Data Sync Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
                alt="Dashboard di sincronizzazione dati e automazione"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold">Dati Puliti e Azionabili</h2>
              </div>
              <p className="text-lg text-gray-600">
                Configuriamo l'integrazione per mappare correttamente i campi dei form ai record del tuo CRM/MAP. Ci assicuriamo che i dati siano sincronizzati in modo affidabile, fornendo una visione unica del cliente e abilitando segmentazione e lead scoring accurati.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Workflow Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Workflow className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Attivare Azioni Automatiche</h2>
              <p className="text-lg text-gray-600 mb-8">
                L'integrazione sblocca la potenza dell'automazione. La compilazione di un form può attivare workflow personalizzati: invio di email di benvenuto, assegnazione del lead al venditore giusto, avvio di sequenze di nurturing, aggiornamento dello stato del lead, tutto in modo automatico ed efficiente.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Lead Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Routing automatico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Lead scoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Notifiche real-time</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Nurturing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Email automatiche</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Content drip</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Follow-up trigger</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Reporting</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Pipeline tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>ROI analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary-600">•</span>
                      <span>Custom dashboard</span>
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
              <Settings className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">I Vantaggi di un Ecosistema Connesso</h2>
              <p className="text-lg text-gray-600 mb-8">
                Un'integrazione tecnologica ben eseguita porta a: Miglior allineamento Marketing-Vendite, Follow-up più rapido ed efficace sui lead, Processi di nurturing personalizzati e scalabili, Reporting "closed-loop" per misurare l'impatto reale sul fatturato, Maggiore efficienza operativa.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    stat: "-65%",
                    label: "Tempo di Gestione",
                    desc: "Riduzione attività manuali"
                  },
                  {
                    stat: "+85%",
                    label: "Velocità Follow-up",
                    desc: "Risposta più rapida ai lead"
                  },
                  {
                    stat: "100%",
                    label: "Data Accuracy",
                    desc: "Precisione sincronizzazione"
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
            Vuoi Ottimizzare i Tuoi Flussi di Lavoro?
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
              Discuti le Tue Esigenze di Integrazione
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default MetodologiaIntegrazionePage;