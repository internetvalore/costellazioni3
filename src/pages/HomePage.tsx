import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/homepage/Section';
import { ArrowRight, CheckCircle, BarChart as ChartBar, Target, Lightbulb, Users, Award, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sistema Costellazioni Valore | Internet Valore</title>
        <meta name="description" content="Trasforma la tua lead generation B2B con il Sistema Costellazioni Valore di Internet Valore srl" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Stop ai Lead Inutili. Trasforma il Tuo Marketing B2B in Crescita Misurabile.
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Generiamo lead pronti per la vendita orchestrando campagne pubblicitarie e "costellazioni" di landing page in perfetta simbiosi. Con il Sistema Costellazioni Valore (SCV), ogni euro investito in marketing lavora per il tuo ROI.
            </h2>
            <Link 
              to="/sistema"
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center"
            >
              Scopri il Sistema Costellazioni Valore
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                alt="Dashboard di analisi dati che mostra grafici di crescita e metriche di performance marketing"
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                Sistema Ingegnerizzato
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem/Solution Section */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Stanco di Budget Pubblicitario Sprecato e Lead di Bassa Qualità?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Molte aziende B2B lottano con campagne marketing che generano contatti poco qualificati, difficili da convertire e che fanno perdere tempo prezioso al team commerciale. Landing page generiche e campagne scollegate dalla realtà della vendita portano a costi per lead (CPL) elevati e a un ROI del marketing difficile da dimostrare. Il Sistema Costellazioni Valore (SCV) rompe questo schema. Integriamo profondamente campagne mirate e landing page ottimizzate ("Simbiosi" e "Costellazioni") per attrarre solo prospect realmente interessati e qualificarli efficacemente, prima che arrivino alle tue vendite.
          </p>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Come Trasformiamo il Tuo Marketing in un Motore di Lead Qualificati
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Il nostro approccio si basa su due concetti chiave: la Simbiosi tra campagne pubblicitarie e landing page dedicate, e le Costellazioni di pagine ottimizzate per ogni specifico segmento di pubblico e intento di ricerca. Unito a un processo rigoroso di analisi dati, CRO (Conversion Rate Optimization) e ottimizzazione continua, creiamo un ecosistema che massimizza la rilevanza del messaggio e la probabilità di conversione.
          </p>
          <div className="space-y-16">
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Simbiosi</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Un approccio unico che integra la tua expertise di settore con il nostro sistema di lead generation, creando sinergie perfette per il tuo mercato B2B.
                </p>
                <Link to="/sistema" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group">
                  Scopri il processo di Simbiosi
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Costellazioni</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Una metodologia innovativa che mappa e connette i punti di contatto ideali nel processo decisionale B2B del tuo target.
                </p>
                <Link to="/metodologia" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group">
                  Esplora la metodologia
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Us Section */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">
            Perché Scegliere SCV per la Tua Lead Generation B2B?
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {[
              {
                icon: <Users className="w-6 h-6 text-primary-600" />,
                title: "Focus Ossessivo sulla Qualità",
                desc: "Non contiamo i lead, generiamo opportunità concrete per le tue vendite"
              },
              {
                icon: <ChartBar className="w-6 h-6 text-primary-600" />,
                title: "Approccio Olistico Unico",
                desc: "Progettiamo campagne e landing page come un unico sistema integrato, non come parti separate"
              },
              {
                icon: <Award className="w-6 h-6 text-primary-600" />,
                title: "Metodologia Rigorosa",
                desc: "Il nostro processo data-driven (CRO, A/B test) ottimizza ogni fase del funnel"
              },
              {
                icon: <Zap className="w-6 h-6 text-primary-600" />,
                title: "ROI Dimostrabile",
                desc: "Tracciamo le performance end-to-end per garantirti trasparenza e risultati misurabili"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 p-8 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="p-4 bg-primary-50 rounded-xl group-hover:bg-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Risultati Concreti: Esempi e Benchmark</h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Scopri come il nostro approccio integrato porta a risultati tangibili. Esplora esempi illustrativi basati su benchmark di settore che dimostrano il potenziale di SCV nel ridurre i costi e aumentare le conversioni qualificate.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Settore Manufacturing",
                result: "+150% lead qualificati",
                desc: "Come abbiamo trasformato il processo di acquisizione clienti",
                image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
                alt: "Ambiente di produzione industriale moderno con controllo qualità automatizzato"
              },
              {
                title: "Settore IT Services",
                result: "-40% costo per lead",
                desc: "Ottimizzazione del budget e incremento della qualità",
                image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
                alt: "Team IT che lavora su soluzioni software enterprise"
              }
            ].map((case_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={case_.image}
                    alt={case_.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{case_.title}</h3>
                  <p className="text-primary-600 font-medium text-lg">{case_.result}</p>
                  <p className="text-gray-600">{case_.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/casi-studio" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group">
              Vedi Esempi e Risultati
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Recent Resources Section */}
      <Section className="py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
            Approfondisci: Guide e Articoli sulla Lead Generation B2B
          </h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Rimani aggiornato sulle ultime strategie e best practice per ottimizzare la tua lead generation B2B. Scarica le nostre guide gratuite ed esplora gli articoli del nostro blog.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Guida Strategica",
                desc: "Lead Generation B2B: trend e strategie per il 2025"
              },
              {
                title: "White Paper",
                desc: "L'impatto dell'AI nella lead generation B2B"
              },
              {
                title: "Case Study",
                desc: "Come ottimizzare il ROI nella lead generation"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.desc}</p>
                <Link to="/risorse" className="text-primary-600 hover:text-primary-700 font-medium">
                  Leggi di più →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/risorse" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group">
              Esplora le Risorse
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-primary-900 text-white py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-primary-800/50 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Pronto a Generare Lead di Qualità Superiore?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
              Discuti con i nostri specialisti come il Sistema Costellazioni Valore può trasformare il tuo marketing B2B e alimentare la tua crescita.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-3 bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
            >
              Richiedi Consulenza Strategica Gratuita
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePage;