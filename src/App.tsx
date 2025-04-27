import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Eager load critical pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// Lazy load other pages
const SistemaPage = lazy(() => import('./pages/SistemaPage'));
const SimbiosiCostellazioniPage = lazy(() => import('./pages/SimbiosiCostellazioniPage'));
const OutputRisultatiPage = lazy(() => import('./pages/OutputRisultatiPage'));
const MetodologiaPage = lazy(() => import('./pages/MetodologiaPage'));
const MetodologiaAnalisiDatiPage = lazy(() => import('./pages/MetodologiaAnalisiDatiPage'));
const MetodologiaCROPage = lazy(() => import('./pages/MetodologiaCROPage'));
const MetodologiaPersonalizzazionePage = lazy(() => import('./pages/MetodologiaPersonalizzazionePage'));
const MetodologiaIntegrazionePage = lazy(() => import('./pages/MetodologiaIntegrazionePage'));
const ContattiPage = lazy(() => import('./pages/ContattiPage'));
const CasiStudioListPage = lazy(() => import('./pages/CasiStudioListPage'));
const CasoStudioDetailPage = lazy(() => import('./pages/CasoStudioDetailPage'));
const RisorsePage = lazy(() => import('./pages/RisorsePage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const GuideListPage = lazy(() => import('./pages/GuideListPage'));
const GuideDownloadPage = lazy(() => import('./pages/GuideDownloadPage'));
const GuidaLeadGenB2BContentPage = lazy(() => import('./pages/GuidaLeadGenB2BContentPage'));
const ChecklistLPContentPage = lazy(() => import('./pages/ChecklistLPContentPage'));
const SoluzioniListPage = lazy(() => import('./pages/SoluzioniListPage'));
const SoluzioneDetailPage = lazy(() => import('./pages/SoluzioneDetailPage'));
const BeneficiListPage = lazy(() => import('./pages/BeneficiListPage'));
const BeneficioDetailPage = lazy(() => import('./pages/BeneficioDetailPage'));
const SettoriListPage = lazy(() => import('./pages/SettoriListPage'));
const SettoreDetailPage = lazy(() => import('./pages/SettoreDetailPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const LandingPageTemplate = lazy(() => import('./pages/lp/LandingPageTemplate'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sistema">
          <Route index element={<SistemaPage />} />
          <Route path="simbiosi-costellazioni" element={<SimbiosiCostellazioniPage />} />
          <Route path="output-risultati" element={<OutputRisultatiPage />} />
        </Route>
        <Route path="metodologia">
          <Route index element={<MetodologiaPage />} />
          <Route path="analisi-dati" element={<MetodologiaAnalisiDatiPage />} />
          <Route path="cro-ab-testing" element={<MetodologiaCROPage />} />
          <Route path="personalizzazione" element={<MetodologiaPersonalizzazionePage />} />
          <Route path="integrazione-tecnologica" element={<MetodologiaIntegrazionePage />} />
        </Route>
        <Route path="contatti" element={<ContattiPage />} />
        <Route path="casi-studio">
          <Route index element={<CasiStudioListPage />} />
          <Route path=":slug" element={<CasoStudioDetailPage />} />
        </Route>
        <Route path="risorse">
          <Route index element={<RisorsePage />} />
          <Route path="blog">
            <Route index element={<BlogListPage />} />
            <Route path=":slug" element={<BlogDetailPage />} />
          </Route>
          <Route path="guide-download">
            <Route index element={<GuideListPage />} />
            <Route path=":slug" element={<GuideDownloadPage />} />
            <Route path="guida-lead-gen-b2b/contenuto" element={<GuidaLeadGenB2BContentPage />} />
            <Route path="checklist-ottimizzazione-lp/contenuto" element={<ChecklistLPContentPage />} />
          </Route>
        </Route>
        <Route path="soluzioni">
          <Route index element={<SoluzioniListPage />} />
          <Route path=":slug" element={<SoluzioneDetailPage />} />
        </Route>
        <Route path="benefici">
          <Route index element={<BeneficiListPage />} />
          <Route path=":slug" element={<BeneficioDetailPage />} />
        </Route>
        <Route path="settori">
          <Route index element={<SettoriListPage />} />
          <Route path=":slug" element={<SettoreDetailPage />} />
        </Route>
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="cookie-policy" element={<CookiePolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {/* Landing Pages Route - Outside main Layout */}
      <Route path="lp/:slug" element={<LandingPageTemplate />} />
    </Routes>
  );
}

export default App;