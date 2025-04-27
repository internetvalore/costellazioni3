# Sistema Costellazioni Valore

Hub informativo per l'agenzia Internet Valore srl.

## Panoramica del Progetto

Questo progetto implementa l'hub informativo "Sistema Costellazioni Valore" per Internet Valore srl, seguendo le linee guida del documento "Piano Dettagliato Realizzazione Hub".

## Stack Tecnologico

- **Frontend:** React con TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Metadata:** React Helmet Async
- **Build Tool:** Vite
- **Deployment:** Netlify

## Struttura del Progetto

```
sistema-costellazioni-valore/
├── public/               # Asset statici
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       # Componenti React riutilizzabili
│   │   └── layout/       # Componenti di layout
│   ├── pages/            # Componenti pagina
│   ├── types/            # Definizioni TypeScript
│   ├── utils/            # Utility e helper
│   ├── App.tsx           # Componente principale
│   ├── index.css         # Stili globali
│   └── main.tsx          # Entry point
├── index.html            # Template HTML
├── netlify.toml          # Configurazione Netlify
├── package.json          # Dipendenze e script
├── tailwind.config.js    # Configurazione Tailwind
└── vite.config.ts        # Configurazione Vite
```

## Caratteristiche Principali

- Design responsive mobile-first
- Integrazione Google Tag Manager (placeholder)
- Ottimizzazione SEO di base
- Configurazione per il deploy continuo su Netlify

## Getting Started

1. Clona il repository
2. Installa le dipendenze: `npm install`
3. Avvia il server di sviluppo: `npm run dev`
4. Per il build: `npm run build`

## Deployment

Il progetto è configurato per il deploy continuo su Netlify. Collegare il repository GitHub a Netlify per attivare il deployment automatico.