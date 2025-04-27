import React from 'react';
import { useParams } from 'react-router-dom';
import ContentPage from '../components/shared/ContentPage';
import { CheckCircle2 } from 'lucide-react';

// Definizione dei dati per ogni soluzione
const soluzioniData = {
  'qualita-lead-b2b': {
    title: "Migliorare la Qualità dei Lead B2B",
    description: "Un approccio scientifico per generare lead più qualificati e ridurre il tempo di qualificazione del team commerciale",
    heroImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    sfide: "Molte aziende B2B investono budget significativi in marketing, ma ricevono lead poco qualificati che intasano la pipeline commerciale e demotivano il team di vendita. Identificare e attrarre prospect realmente interessati è una sfida costante.",
    soluzione: "Il Sistema Costellazioni Valore affronta questo problema alla radice. Attraverso la 'Simbiosi' tra campagne ultra-mirate e landing page dedicate ('Costellazioni'), filtriamo il traffico e qualifichiamo l'interesse fin dall'inizio. Il nostro processo CRO ottimizza ogni punto di contatto per massimizzare la pertinenza e convertire solo i lead più promettenti.",
    features: [
      {
        title: "Lead Scoring Avanzato",
        items: [
          "Profilazione comportamentale",
          "Intent data analysis",
          "Scoring predittivo"
        ]
      },
      {
        title: "Qualificazione Automatica",
        items: [
          "Form dinamici intelligenti",
          "Enrichment dati in tempo reale",
          "Filtri automatizzati"
        ]
      }
    ],
    metriche: [
      {
        stat: "+82%",
        label: "Lead Qualificati",
        desc: "Aumento medio della qualità"
      },
      {
        stat: "-45%",
        label: "Tempo Qualifica",
        desc: "Riduzione tempo team sales"
      },
      {
        stat: "2.4x",
        label: "Conversione",
        desc: "Miglioramento tasso MQL->SQL"
      }
    ],
    benefici: [
      "Aumento del tasso di conversione MQL->SQL",
      "Riduzione del tempo sprecato dal team Sales",
      "Miglioramento dell'efficienza della pipeline commerciale",
      "ROI marketing più elevato e prevedibile"
    ]
  },
  'riduzione-cpl': {
    title: "Ridurre il Costo per Lead (CPL)",
    description: "Ottimizza la tua spesa pubblicitaria e riduci il costo di acquisizione lead mantenendo o migliorando la qualità",
    heroImage: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg",
    sfide: "Budget pubblicitari sprecati su click che non convertono, costi per lead elevati e ROI difficile da dimostrare sono problemi comuni nella lead generation B2B. La mancanza di ottimizzazione integrata tra campagne e landing page porta a sprechi significativi.",
    soluzione: "Attraverso l'approccio SCV, ottimizziamo ogni aspetto del funnel di acquisizione. La Simbiosi campagna-LP migliora i Quality Score, mentre le Costellazioni di landing page assicurano la massima rilevanza per ogni segmento di target, riducendo il costo per lead qualificato.",
    features: [
      {
        title: "Ottimizzazione Budget",
        items: [
          "Quality Score improvement",
          "Targeting preciso",
          "Bid management avanzato"
        ]
      },
      {
        title: "CRO Continuo",
        items: [
          "A/B testing sistematico",
          "Ottimizzazione form",
          "Analisi comportamentale"
        ]
      }
    ],
    metriche: [
      {
        stat: "-40%",
        label: "CPL",
        desc: "Riduzione costo per lead"
      },
      {
        stat: "+65%",
        label: "Conversione",
        desc: "Aumento tasso conversione"
      },
      {
        stat: "2.8x",
        label: "ROAS",
        desc: "Return on Ad Spend"
      }
    ],
    benefici: [
      "Riduzione significativa del costo per lead",
      "Maggiore efficienza della spesa pubblicitaria",
      "Miglior rapporto qualità-costo dei lead",
      "Scalabilità sostenibile della lead generation"
    ]
  },
  'roi-marketing-dimostrabile': {
    title: "Dimostrare il ROI del Marketing",
    description: "Tracciamento end-to-end e reportistica trasparente per dimostrare il reale ritorno sull'investimento marketing",
    heroImage: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg",
    sfide: "La difficoltà nel tracciare il percorso completo dal click alla vendita rende complicato dimostrare il ROI delle attività di marketing. Questo porta spesso a vedere il marketing come un centro di costo anziché un driver di crescita.",
    soluzione: "Il Sistema Costellazioni Valore implementa un tracciamento completo del customer journey, dalla prima interazione alla vendita. Integriamo dati di campagne, CRM e vendite per fornire una visione chiara del ritorno sull'investimento.",
    features: [
      {
        title: "Tracking Avanzato",
        items: [
          "Tracciamento multi-touch",
          "Integrazione CRM",
          "Attribution modeling"
        ]
      },
      {
        title: "Reportistica",
        items: [
          "Dashboard personalizzate",
          "Report automatici",
          "KPI real-time"
        ]
      }
    ],
    metriche: [
      {
        stat: "100%",
        label: "Visibilità",
        desc: "Sul customer journey"
      },
      {
        stat: "3.2x",
        label: "ROI",
        desc: "Return on Investment"
      },
      {
        stat: "-25%",
        label: "Sprechi",
        desc: "Riduzione sprechi budget"
      }
    ],
    benefici: [
      "Visibilità completa sul customer journey",
      "Decisioni basate sui dati",
      "Ottimizzazione continua del budget",
      "Allineamento marketing-vendite"
    ]
  },
  'allineamento-vendite-marketing': {
    title: "Allineamento Vendite-Marketing",
    description: "Migliora la collaborazione tra team marketing e commerciale per massimizzare l'efficacia della lead generation",
    heroImage: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    sfide: "La mancanza di allineamento tra marketing e vendite porta a inefficienze, lead persi e frustrazione. Definizioni diverse di lead qualificato e processi non integrati causano attriti e risultati sub-ottimali.",
    soluzione: "SCV implementa un framework di collaborazione strutturato tra marketing e vendite. Definiamo insieme i criteri di qualificazione, automatizziamo il passaggio dei lead e forniamo feedback loop continui per l'ottimizzazione.",
    features: [
      {
        title: "Processo Integrato",
        items: [
          "Definizione MQL/SQL condivisa",
          "Workflow automatizzati",
          "Feedback strutturato"
        ]
      },
      {
        title: "Strumenti",
        items: [
          "CRM integration",
          "Lead routing automatico",
          "Dashboard condivise"
        ]
      }
    ],
    metriche: [
      {
        stat: "+75%",
        label: "Efficienza",
        desc: "Nel passaggio lead"
      },
      {
        stat: "-35%",
        label: "Lead Persi",
        desc: "Riduzione lead persi"
      },
      {
        stat: "2.5x",
        label: "Produttività",
        desc: "Team commerciale"
      }
    ],
    benefici: [
      "Processo fluido marketing-vendite",
      "Maggiore produttività commerciale",
      "Feedback loop ottimizzato",
      "Migliore qualità dei lead"
    ]
  }
};

const SoluzioneDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Recupera i dati della soluzione o usa un fallback
  const solutionData = slug ? soluzioniData[slug] : null;

  // Se la soluzione non esiste, mostra un contenuto di fallback
  if (!solutionData) {
    return (
      <ContentPage
        title="Soluzione non trovata"
        description="La soluzione richiesta non è stata trovata. Esplora le altre soluzioni disponibili."
        breadcrumbItems={[
          { label: 'Soluzioni', path: '/soluzioni' },
          { label: 'Soluzione non trovata', path: '#' }
        ]}
        backLink={{
          to: '/soluzioni',
          label: 'Torna alle Soluzioni'
        }}
        content={
          <div className="text-center py-12">
            <p className="text-gray-600 mb-8">
              Ci dispiace, ma la soluzione che stai cercando non è stata trovata.
              Esplora le altre soluzioni disponibili o contattaci per discutere le tue esigenze specifiche.
            </p>
          </div>
        }
        ctaSection={{
          title: "Esplora Altre Soluzioni",
          description: "Scopri come il Sistema Costellazioni Valore può risolvere altre sfide della lead generation B2B",
          primaryCta: {
            to: '/soluzioni',
            label: 'Vedi Tutte le Soluzioni'
          }
        }}
      />
    );
  }

  const content = (
    <>
      <h2>La Sfida</h2>
      <p className="text-gray-600 mb-8">{solutionData.sfide}</p>

      <h2>La Nostra Soluzione</h2>
      <p className="text-gray-600 mb-8">{solutionData.soluzione}</p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        {solutionData.features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <ul className="space-y-3">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Risultati Misurabili</h2>
      <div className="grid md:grid-cols-3 gap-6 my-8">
        {solutionData.metriche.map((metrica, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{metrica.stat}</div>
            <div className="font-medium mb-1">{metrica.label}</div>
            <div className="text-sm text-gray-600">{metrica.desc}</div>
          </div>
        ))}
      </div>

      <h2>Benefici per il Tuo Business</h2>
      <ul className="space-y-4">
        {solutionData.benefici.map((beneficio, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
            <span>{beneficio}</span>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <ContentPage
      title={solutionData.title}
      description={solutionData.description}
      breadcrumbItems={[
        { label: 'Soluzioni', path: '/soluzioni' },
        { label: solutionData.title, path: '#' }
      ]}
      backLink={{
        to: '/soluzioni',
        label: 'Torna alle Soluzioni'
      }}
      heroImage={solutionData.heroImage}
      content={content}
      ctaSection={{
        title: "Vuoi Implementare Questa Soluzione?",
        description: "Scopri come possiamo aiutarti a risolvere questa sfida nella tua azienda",
        primaryCta: {
          to: '/contatti',
          label: 'Richiedi una Consulenza'
        },
        secondaryCta: {
          to: '/casi-studio',
          label: 'Vedi i Casi Studio'
        }
      }}
    />
  );
};

export default SoluzioneDetailPage;