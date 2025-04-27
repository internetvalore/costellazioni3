import React from 'react';
import GuidaContentPage from './GuidaContentPage';

const ChecklistLPContentPage: React.FC = () => {
  const contenutoGuida = `
<h2>Checklist Ottimizzazione Landing Page</h2>
<p>Usa questa checklist completa per assicurarti che le tue landing page B2B siano ottimizzate per la massima conversione.</p>

<h2>1. Headline e Value Proposition</h2>
<ul>
  <li>[ ] La headline è chiara e orientata ai benefici?</li>
  <li>[ ] C'è coerenza con l'annuncio (message match)?</li>
  <li>[ ] La value proposition è immediatamente comprensibile?</li>
  <li>[ ] Il sottotitolo supporta e amplia la headline principale?</li>
</ul>

<h2>2. Copy e Contenuto</h2>
<ul>
  <li>[ ] Il copy è focalizzato sui benefici specifici per il target?</li>
  <li>[ ] Il testo è facilmente scansionabile (bullet points, paragrafi brevi)?</li>
  <li>[ ] Sono presenti prove sociali rilevanti (testimonial, case study)?</li>
  <li>[ ] Il linguaggio è appropriato per il target B2B?</li>
</ul>

<h2>3. Call-to-Action (CTA)</h2>
<ul>
  <li>[ ] Il CTA è visibile e ha un colore contrastante?</li>
  <li>[ ] Il testo del CTA è chiaro e orientato all'azione?</li>
  <li>[ ] Ci sono CTA secondari per prospect non ancora pronti?</li>
  <li>[ ] La posizione del CTA è ottimale nella pagina?</li>
</ul>

<h2>4. Form di Conversione</h2>
<ul>
  <li>[ ] Il form richiede solo i campi essenziali?</li>
  <li>[ ] I campi del form sono logicamente organizzati?</li>
  <li>[ ] Sono presenti validazioni in tempo reale?</li>
  <li>[ ] C'è una chiara politica sulla privacy?</li>
</ul>

<h2>5. Design e User Experience</h2>
<ul>
  <li>[ ] Il design è professionale e coerente con il brand?</li>
  <li>[ ] La pagina è responsive su tutti i dispositivi?</li>
  <li>[ ] I tempi di caricamento sono ottimizzati?</li>
  <li>[ ] La gerarchia visiva guida l'attenzione verso il CTA?</li>
</ul>

<h2>6. Tracking e Analytics</h2>
<ul>
  <li>[ ] Il tracking degli eventi è configurato correttamente?</li>
  <li>[ ] Sono impostati gli obiettivi in Google Analytics?</li>
  <li>[ ] È attivo il monitoraggio del comportamento utente?</li>
  <li>[ ] Sono configurati test A/B per elementi chiave?</li>
</ul>

<h2>Note Finali</h2>
<p>Ricorda che l'ottimizzazione è un processo continuo. Usa questa checklist come punto di partenza e adattala in base ai tuoi risultati specifici e al feedback degli utenti.</p>
`;

  return (
    <GuidaContentPage 
      titoloGuida="Checklist Definitiva per l'Ottimizzazione delle Landing Page"
      contenutoGuida={contenutoGuida}
    />
  );
};

export default ChecklistLPContentPage;