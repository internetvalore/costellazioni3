import React from 'react';
import { useParams } from 'react-router-dom';
import ContentPage from '../components/shared/ContentPage';
import { CheckCircle2 } from 'lucide-react';

// Definizione dei dati per ogni settore
const settoriData = {
  'ict-software-saas': {
    title: "ICT, Software e SaaS",
    description: "Soluzioni di lead generation B2B specifiche per aziende che operano nel settore tecnologico, con focus su software e servizi cloud",
    heroImage: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    sfide: "Cicli di vendita lunghi, necessità demo/trial qualificati, raggiungere ruoli tecnici specifici.",
    adattamentoSCV: "Campagne ultra-mirate (LinkedIn/Google), LP per feature/demo, lead magnet tecnici, focus su MQL.",
    benefici: [
      "Aumento delle richieste demo qualificate",
      "Riduzione del costo per acquisizione MQL/SQL",
      "Miglioramento tasso conversione trial->paid",
      "Accelerazione del ciclo di vendita"
    ],
    metriche: [
      {
        stat: "+75%",
        label: "Demo Qualificate",
        desc: "Aumento richieste demo"
      },
      {
        stat: "2.3x",
        label: "Conversione",
        desc: "Da trial a cliente"
      },
      {
        stat: "-35%",
        label: "CAC",
        desc: "Riduzione costi acquisizione"
      }
    ]
  },
  'manifatturiero': {
    title: "Aziende Manifatturiere",
    description: "Strategie di lead generation B2B per il settore manifatturiero, focalizzate su specifiche tecniche e buyer professionali",
    heroImage: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg",
    sfide: "Cicli vendita lunghi, specifiche tecniche complesse, raggiungere buyer tecnici/decisionali.",
    adattamentoSCV: "Campagne mirate (LinkedIn/Search), LP con specifiche/configuratori, white paper tecnici.",
    benefici: [
      "Lead qualificati per la forza vendita",
      "Aumento richieste preventivo mirate",
      "Miglior posizionamento tecnico",
      "Riduzione tempi qualificazione lead"
    ],
    metriche: [
      {
        stat: "+65%",
        label: "Lead Qualificati",
        desc: "Aumento lead tecnici"
      },
      {
        stat: "-40%",
        label: "Tempo Qualifica",
        desc: "Riduzione ciclo vendita"
      },
      {
        stat: "2.1x",
        label: "ROI",
        desc: "Return on Investment"
      }
    ]
  },
  'servizi-professionali-consulenza-finanza': {
    title: "Servizi Professionali e Consulenza",
    description: "Lead generation B2B per studi di consulenza e servizi professionali, con focus su autorevolezza e fiducia",
    heroImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    sfide: "Costruire fiducia, differenziarsi, raggiungere decisori aziendali.",
    adattamentoSCV: "Campagne basate su expertise (Search/LinkedIn), LP focalizzate su autorevolezza/case study, lead magnet (report/consulenze).",
    benefici: [
      "Lead qualificati per consulenti/partner",
      "Aumento richieste contatto qualificate",
      "Rafforzamento brand expertise",
      "Migliore targeting decisori"
    ],
    metriche: [
      {
        stat: "+85%",
        label: "Contatti Qualificati",
        desc: "Aumento lead value"
      },
      {
        stat: "3.2x",
        label: "Conversione",
        desc: "Lead to client"
      },
      {
        stat: "-30%",
        label: "CPL",
        desc: "Costo per lead"
      }
    ]
  },
  'medicale-farmaceutico': {
    title: "Medicale e Farmaceutico",
    description: "Lead generation B2B specializzata per il settore medicale e farmaceutico, con attenzione alla conformità normativa",
    heroImage: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg",
    sfide: "Normative stringenti, comunicazione accurata, raggiungere professionisti sanitari/enti.",
    adattamentoSCV: "Campagne conformi, LP con info dettagliate/studi, targeting preciso professionisti, webinar formativi.",
    benefici: [
      "Lead qualificati per informatori/sales",
      "Maggior engagement professionisti sanitari",
      "Comunicazione conforme alle normative",
      "Targeting preciso per specialità"
    ],
    metriche: [
      {
        stat: "+70%",
        label: "Lead HCP",
        desc: "Healthcare Professionals"
      },
      {
        stat: "-45%",
        label: "CAC",
        desc: "Cost per Acquisition"
      },
      {
        stat: "2.8x",
        label: "ROI",
        desc: "Return on Investment"
      }
    ]
  },
  'elettronica': {
    title: "Elettronica",
    description: "Strategie di lead generation B2B per il settore elettronico, focalizzate su specifiche tecniche e buyer professionali",
    heroImage: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg",
    sfide: "Mercato tecnico, raggiungere ingegneri/progettisti/uffici acquisti.",
    adattamentoSCV: "Campagne Search/Shopping/LinkedIn, LP con schede tecniche/configuratori/campioni, guide tecniche.",
    benefici: [
      "Aumento richieste preventivo specifiche",
      "Lead qualificati per ufficio tecnico/commerciale",
      "Maggiore visibilità su nicchie tecniche",
      "Riduzione tempi qualificazione"
    ],
    metriche: [
      {
        stat: "+80%",
        label: "Lead Tecnici",
        desc: "Aumento qualità"
      },
      {
        stat: "2.5x",
        label: "Conversione",
        desc: "Lead to opportunity"
      },
      {
        stat: "-35%",
        label: "CPL",
        desc: "Costo per lead"
      }
    ]
  },
  'legali-contabili': {
    title: "Studi Legali e Contabili",
    description: "Lead generation B2B per studi legali e contabili, con focus su autorevolezza locale e aree di pratica specifiche",
    heroImage: "https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg",
    sfide: "Costruire fiducia, competizione locale, target specifici (aziende/privati).",
    adattamentoSCV: "Campagne Google Ads locali/per area pratica, LP su expertise/consultazioni, guide fiscali/legali.",
    benefici: [
      "Aumento richieste consulenza qualificate",
      "Nuovi clienti per aree specifiche",
      "Maggiore visibilità locale",
      "Posizionamento expertise"
    ],
    metriche: [
      {
        stat: "+65%",
        label: "Lead Qualificati",
        desc: "Per area pratica"
      },
      {
        stat: "2.2x",
        label: "Conversione",
        desc: "Lead to client"
      },
      {
        stat: "-40%",
        label: "CAC",
        desc: "Cost per Acquisition"
      }
    ]
  },
  'studi-medici-cliniche': {
    title: "Studi Medici e Cliniche Private",
    description: "Lead generation B2B per studi medici e cliniche private, focalizzata su specializzazioni e target locali",
    heroImage: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg",
    sfide: "Fiducia paziente, normative sanitarie, competizione locale, target per specializzazione.",
    adattamentoSCV: "Campagne Google Ads locali/per specializzazione, LP informative (servizi/medici/testimonianze), form prenotazione.",
    benefici: [
      "Aumento richieste prenotazione",
      "Pazienti per specifiche specializzazioni",
      "Comunicazione etica e conforme",
      "Migliore presenza locale"
    ],
    metriche: [
      {
        stat: "+75%",
        label: "Prenotazioni",
        desc: "Nuovi pazienti"
      },
      {
        stat: "-35%",
        label: "CPA",
        desc: "Costo per acquisizione"
      },
      {
        stat: "2.4x",
        label: "ROI",
        desc: "Return on Investment"
      }
    ]
  },
  'servizi-supporto-aziendale': {
    title: "Servizi di Supporto Aziendale",
    description: "Lead generation B2B per servizi di supporto aziendale, con focus su efficienza e affidabilità",
    heroImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    sfide: "Dimostrare affidabilità/efficienza, raggiungere manager oberati, differenziarsi.",
    adattamentoSCV: "Campagne LinkedIn/Google Ads mirate, LP su benefici (delega/efficienza), offerte prova, checklist.",
    benefici: [
      "Aumento richieste preventivo/consulenza",
      "Contratti per servizi ricorrenti",
      "Posizionamento come partner affidabile",
      "Migliore targeting decisori"
    ],
    metriche: [
      {
        stat: "+70%",
        label: "Lead Qualificati",
        desc: "Aumento qualità"
      },
      {
        stat: "2.6x",
        label: "Conversione",
        desc: "Lead to contract"
      },
      {
        stat: "-30%",
        label: "CPL",
        desc: "Costo per lead"
      }
    ]
  }
};

const SettoreDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Recupera i dati del settore o usa un fallback
  const sectorData = slug ? settoriData[slug] : null;

  // Se il settore non esiste, mostra un contenuto di fallback
  if (!sectorData) {
    return (
      <ContentPage
        title="Settore non trovato"
        description="Il settore richiesto non è stato trovato. Esplora gli altri settori disponibili."
        breadcrumbItems={[
          { label: 'Settori', path: '/settori' },
          { label: 'Settore non trovato', path: '#' }
        ]}
        backLink={{
          to: '/settori',
          label: 'Torna ai Settori'
        }}
        content={
          <div className="text-center py-12">
            <p className="text-gray-600 mb-8">
              Ci dispiace, ma il settore che stai cercando non è stato trovato.
              Esplora gli altri settori disponibili o contattaci per discutere le tue esigenze specifiche.
            </p>
          </div>
        }
        ctaSection={{
          title: "Esplora Altri Settori",
          description: "Scopri come il Sistema Costellazioni Valore si adatta ad altri settori B2B",
          primaryCta: {
            to: '/settori',
            label: 'Vedi Tutti i Settori'
          }
        }}
      />
    );
  }

  const content = (
    <>
      <h2>Le Sfide del Settore {sectorData.title}</h2>
      <p className="text-gray-600 mb-8">
        {sectorData.sfide}
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Sfide Principali</h3>
          <ul className="space-y-3">
            {sectorData.benefici.map((beneficio, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span>{beneficio}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Il Nostro Approccio</h3>
          <p className="text-gray-600">{sectorData.adattamentoSCV}</p>
        </div>
      </div>

      <h2>Risultati per il Settore</h2>
      <div className="grid md:grid-cols-3 gap-6 my-8">
        {sectorData.metriche.map((metrica, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{metrica.stat}</div>
            <div className="font-medium mb-1">{metrica.label}</div>
            <div className="text-sm text-gray-600">{metrica.desc}</div>
          </div>
        ))}
      </div>

      <h2>Come Adattiamo SCV per {sectorData.title}</h2>
      <p className="text-gray-600 mb-8">
        Il Sistema Costellazioni Valore si adatta alle specificità del settore {sectorData.title.toLowerCase()} 
        attraverso una strategia multi-canale che integra contenuti specializzati con messaggi orientati 
        al valore di business.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold mb-4">Benefici Specifici per il Settore</h3>
        <ul className="space-y-3">
          {sectorData.benefici.map((beneficio, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span>{beneficio}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <ContentPage
      title={sectorData.title}
      description={sectorData.description}
      breadcrumbItems={[
        { label: 'Settori', path: '/settori' },
        { label: sectorData.title, path: '#' }
      ]}
      backLink={{
        to: '/settori',
        label: 'Torna ai Settori'
      }}
      heroImage={sectorData.heroImage}
      content={content}
      ctaSection={{
        title: `Vuoi Ottimizzare la Tua Lead Generation ${sectorData.title}?`,
        description: "Scopri come possiamo aiutarti a implementare queste soluzioni nella tua azienda",
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

export default SettoreDetailPage;