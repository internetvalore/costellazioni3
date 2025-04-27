import React from 'react';
import { useParams } from 'react-router-dom';
import ContentPage from '../components/shared/ContentPage';
import { CheckCircle2 } from 'lucide-react';

// Definizione dei dati per ogni beneficio
const beneficiData = {
  'efficienza-commerciale': {
    title: "Efficienza Commerciale Aumentata",
    description: "Massimizza la produttività del tuo team commerciale fornendo solo lead realmente qualificati e pronti all'acquisto",
    heroImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    spiegazione: "Il tuo team commerciale perde tempo prezioso inseguendo lead poco qualificati o non pronti all'acquisto? Il Sistema Costellazioni Valore massimizza l'efficienza delle tue vendite, garantendo che ogni lead trasmesso sia una reale opportunità.",
    comeSCV: "Attraverso un targeting preciso delle campagne e landing page ottimizzate per la conversione ('Costellazioni'), qualifichiamo l'interesse e raccogliamo informazioni strategiche fin dalle prime fasi. Il nostro focus sulla 'Simbiosi' campagna-LP assicura che solo i prospect più allineati entrino nel tuo funnel di vendita.",
    risultati: [
      "Riduzione del 45% del tempo speso su lead non qualificati",
      "Aumento del 60% del tasso di conversione lead-opportunità",
      "Riduzione del 30% del ciclo di vendita medio",
      "Incremento del 40% della produttività del team commerciale"
    ],
    features: [
      {
        title: "Qualificazione Avanzata",
        items: [
          "Scoring predittivo dei lead",
          "Analisi comportamentale",
          "Intent signals tracking"
        ]
      },
      {
        title: "Automazione Intelligente",
        items: [
          "Routing automatico dei lead",
          "Nurturing personalizzato",
          "Enrichment dati in tempo reale"
        ]
      }
    ],
    impact: [
      "Migliore allocazione delle risorse commerciali",
      "Aumento della produttività del team",
      "Maggiore focus sulle opportunità di valore"
    ],
    metriche: [
      {
        stat: "-45%",
        label: "Tempo Spreco",
        desc: "Su lead non qualificati"
      },
      {
        stat: "+60%",
        label: "Conversione",
        desc: "Lead to opportunity"
      },
      {
        stat: "2.4x",
        label: "Produttività",
        desc: "Team commerciale"
      }
    ]
  },
  'ottimizzazione-budget-ads': {
    title: "Ottimizzazione Budget Pubblicitario",
    description: "Smetti di sprecare budget. Il nostro sistema garantisce che ogni euro speso in campagne sia finalizzato ad attrarre e convertire i clienti giusti",
    heroImage: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg",
    spiegazione: "Stanco di vedere il tuo budget pubblicitario bruciato su click che non convertono? Il Sistema Costellazioni Valore ottimizza ogni aspetto delle tue campagne per massimizzare il ritorno sull'investimento.",
    comeSCV: "La Simbiosi tra campagne e landing page migliora i Quality Score e riduce i costi per click, mentre le Costellazioni assicurano che ogni visitatore trovi esattamente ciò che cerca. Il nostro processo di ottimizzazione continua affina costantemente targeting e messaggi.",
    risultati: [
      "Riduzione del 40% del costo per lead qualificato",
      "Aumento del 85% del tasso di conversione delle landing page",
      "Miglioramento del 65% del Quality Score medio",
      "Incremento del 120% del ROAS (Return on Ad Spend)"
    ],
    features: [
      {
        title: "Ottimizzazione Campagne",
        items: [
          "Quality Score improvement",
          "Bid management avanzato",
          "Targeting preciso"
        ]
      },
      {
        title: "CRO Landing Page",
        items: [
          "A/B testing continuo",
          "Personalizzazione dinamica",
          "Analisi comportamentale"
        ]
      }
    ],
    impact: [
      "Riduzione significativa dei costi di acquisizione",
      "Maggiore efficienza della spesa pubblicitaria",
      "ROI pubblicitario dimostrabile"
    ],
    metriche: [
      {
        stat: "-40%",
        label: "CPL",
        desc: "Costo per lead"
      },
      {
        stat: "+85%",
        label: "Conversione",
        desc: "Tasso landing page"
      },
      {
        stat: "2.2x",
        label: "ROAS",
        desc: "Return on Ad Spend"
      }
    ]
  },
  'crescita-prevedibile': {
    title: "Crescita del Business Prevedibile",
    description: "Costruisci un motore di lead generation scalabile e affidabile che alimenta la tua crescita in modo costante e misurabile nel tempo",
    heroImage: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg",
    spiegazione: "La lead generation B2B è spesso imprevedibile, con alti e bassi che rendono difficile pianificare la crescita. Il Sistema Costellazioni Valore trasforma questo processo in un sistema affidabile e scalabile.",
    comeSCV: "Implementiamo un sistema data-driven che combina campagne mirate, landing page ottimizzate e processi di nurturing automatizzati. Questo crea un flusso costante di lead qualificati che puoi scalare in base alle tue esigenze di crescita.",
    risultati: [
      "Creazione di un flusso costante di lead qualificati",
      "Riduzione della variabilità mensile nei risultati",
      "Maggiore prevedibilità della pipeline commerciale",
      "Scalabilità controllata della lead generation"
    ],
    features: [
      {
        title: "Sistema Scalabile",
        items: [
          "Processi automatizzati",
          "Framework replicabile",
          "Ottimizzazione continua"
        ]
      },
      {
        title: "Monitoraggio Avanzato",
        items: [
          "Dashboard real-time",
          "Previsioni basate sui dati",
          "Alert automatici"
        ]
      }
    ],
    impact: [
      "Crescita controllata e sostenibile",
      "Pianificazione accurata delle risorse",
      "Maggiore confidenza nelle previsioni"
    ],
    metriche: [
      {
        stat: "+90%",
        label: "Prevedibilità",
        desc: "Risultati mensili"
      },
      {
        stat: "3.5x",
        label: "Scalabilità",
        desc: "Crescita controllata"
      },
      {
        stat: "-65%",
        label: "Variabilità",
        desc: "Risultati mensili"
      }
    ]
  }
};

const BeneficioDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Recupera i dati del beneficio o usa un fallback
  const beneficioData = slug ? beneficiData[slug] : null;

  // Se il beneficio non esiste, mostra un contenuto di fallback
  if (!beneficioData) {
    return (
      <ContentPage
        title="Beneficio non trovato"
        description="Il beneficio richiesto non è stato trovato. Esplora gli altri benefici disponibili."
        breadcrumbItems={[
          { label: 'Benefici', path: '/benefici' },
          { label: 'Beneficio non trovato', path: '#' }
        ]}
        backLink={{
          to: '/benefici',
          label: 'Torna ai Benefici'
        }}
        content={
          <div className="text-center py-12">
            <p className="text-gray-600 mb-8">
              Ci dispiace, ma il beneficio che stai cercando non è stato trovato.
              Esplora gli altri benefici disponibili o contattaci per discutere le tue esigenze specifiche.
            </p>
          </div>
        }
        ctaSection={{
          title: "Esplora Altri Benefici",
          description: "Scopri gli altri vantaggi del Sistema Costellazioni Valore",
          primaryCta: {
            to: '/benefici',
            label: 'Vedi Tutti i Benefici'
          }
        }}
      />
    );
  }

  const content = (
    <>
      <h2>Il Beneficio in Dettaglio</h2>
      <p className="text-gray-600 mb-8">{beneficioData.spiegazione}</p>

      <h2>Come SCV Garantisce Questo Beneficio</h2>
      <p className="text-gray-600 mb-8">{beneficioData.comeSCV}</p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        {beneficioData.features.map((feature, index) => (
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
        {beneficioData.metriche.map((metrica, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{metrica.stat}</div>
            <div className="font-medium mb-1">{metrica.label}</div>
            <div className="text-sm text-gray-600">{metrica.desc}</div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4">Impatto sul Business</h3>
        <ul className="space-y-3">
          {beneficioData.impact.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Risultati Dettagliati</h2>
      <ul className="space-y-4">
        {beneficioData.risultati.map((risultato, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
            <span>{risultato}</span>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <ContentPage
      title={beneficioData.title}
      description={beneficioData.description}
      breadcrumbItems={[
        { label: 'Benefici', path: '/benefici' },
        { label: beneficioData.title, path: '#' }
      ]}
      backLink={{
        to: '/benefici',
        label: 'Torna ai Benefici'
      }}
      heroImage={beneficioData.heroImage}
      content={content}
      ctaSection={{
        title: "Vuoi Ottenere Questi Risultati?",
        description: "Scopri come possiamo aiutarti a raggiungere questi obiettivi nella tua azienda",
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

export default BeneficioDetailPage;