import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowLeft, ArrowRight, Target, CheckCircle2, BarChart, Award, Monitor } from 'lucide-react';

const CasoStudioDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Placeholder data - in a real implementation, this would come from a data source
  const casoStudio = {
    title: "Benchmark: Ottimizzazione Landing Page PPC",
    description: "Studio dell'impatto dell'approccio 'Costellazioni' sul tasso di conversione delle landing page in campagne PPC B2B",
    type: "benchmark",
    source: "Dati aggregati da studi di settore (Unbounce Conversion Benchmark Report, WordStream)",
    sector: "B2B Cross-Industry",
    problem: "Molte campagne PPC B2B soffrono di bassi tassi di conversione perché il traffico atterra su pagine generiche o non ottimizzate. La mancanza di coerenza tra annuncio e pagina (message match) e un'esperienza utente scadente sprecano click e budget.",
    solution: "Il Sistema Costellazioni Valore affronta questa sfida creando landing page dedicate ('Costellazioni') in perfetta 'Simbiosi' con ogni gruppo di annunci PPC. Applichiamo rigorose tecniche CRO e A/B testing per ottimizzare headline, copy, CTA, form e layout, garantendo massima rilevanza e minimizzando l'attrito.",
    features: [
      {
        title: "Message Match",
        items: [
          "Dynamic Text Replacement",
          "Headline personalizzate",
          "CTA contestuali"
        ]
      },
      {
        title: "CRO Avanzata",
        items: [
          "Form ottimizzati",
          "Social proof dinamico",
          "A/B testing continuo"
        ]
      }
    ],
    metrics: [
      {
        label: "Conversione",
        value: "+85%",
        desc: "Aumento medio tasso conversione"
      },
      {
        label: "CPA",
        value: "-40%",
        desc: "Riduzione costo per acquisizione"
      },
      {
        label: "ROAS",
        value: "2.8x",
        desc: "Return on Ad Spend"
      }
    ],
    potential: [
      "Riduzione significativa del costo per lead qualificato",
      "Aumento della qualità dei lead generati",
      "Miglioramento del ROI delle campagne PPC",
      "Ottimizzazione continua basata su dati"
    ]
  };

  return (
    <>
      <Helmet>
        <title>{casoStudio.title} | Sistema Costellazioni Valore</title>
        <meta name="description" content={casoStudio.description} />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/casi-studio"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna ai Casi Studio
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">
              Benchmark
            </span>
            <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">
              {casoStudio.sector}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{casoStudio.title}</h1>
          <p className="text-xl text-primary-100">{casoStudio.description}</p>
        </div>
      </Section>

      {/* Content Sections */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Scenario/Challenge */}
          <div className="mb-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Lo Scenario</h2>
                <p className="text-gray-600 mb-4">{casoStudio.problem}</p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-3">Sfide Principali:</h3>
                  <ul className="space-y-2">
                    <li>• Basso tasso di conversione su pagine generiche</li>
                    <li>• Scarsa coerenza tra annunci e landing page</li>
                    <li>• Spreco di budget pubblicitario</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Monitor className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">La Soluzione SCV</h2>
                <p className="text-gray-600 mb-6">{casoStudio.solution}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {casoStudio.features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-semibold mb-3">{feature.title}</h3>
                      <ul className="space-y-2">
                        {feature.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <BarChart className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Risultati Benchmark</h2>
                <p className="text-gray-600 mb-6">
                  Studi di settore e best practice dimostrano che landing page dedicate e ottimizzate possono aumentare i tassi di conversione PPC mediamente dal 20% a oltre il 100% rispetto a pagine generiche. L'uso di tecniche come il Dynamic Text Replacement può portare a ulteriori incrementi.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {casoStudio.metrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">{metric.value}</div>
                      <div className="font-medium mb-1">{metric.label}</div>
                      <div className="text-sm text-gray-600">{metric.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                    alt="Dashboard di analisi mostrante i risultati del benchmark di ottimizzazione PPC con grafici di crescita delle conversioni e riduzione dei costi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Fonte: {casoStudio.source}
                </p>
              </div>
            </div>
          </div>

          {/* Potential/Application */}
          <div className="mb-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Potenziale di Applicazione</h2>
                <p className="text-gray-600 mb-6">
                  Applicando questi principi, potresti vedere un aumento significativo dei lead qualificati generati dalle tue campagne PPC, una riduzione del costo per acquisizione e un miglioramento complessivo del ROAS (Return on Ad Spend).
                </p>
                <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                  <ul className="space-y-3">
                    {casoStudio.potential.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
            Vuoi Risultati Simili per la Tua Azienda?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Scopri come il Sistema Costellazioni Valore può ottimizzare le tue campagne PPC
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Ottimizza le Tue Landing Page
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default CasoStudioDetailPage;