import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowLeft, ArrowRight, Clock, User, Tag, Download } from 'lucide-react';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Placeholder data - in a real implementation, this would come from a data source
  const article = {
    title: "Guida Pratica all'Ottimizzazione delle Landing Page B2B",
    description: "Best practice e strategie concrete per ottimizzare le tue landing page B2B e aumentare il tasso di conversione dei lead qualificati",
    author: "Team Internet Valore",
    date: "24 Aprile 2025",
    readTime: "6 min",
    category: "Lead Generation",
    tags: ["Landing Page", "CRO", "B2B", "Conversioni"],
    relatedGuide: "guida-landing-page-b2b",
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | Blog | Sistema Costellazioni Valore</title>
        <meta name="description" content={article.description} />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/risorse/blog"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna al Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
          <div className="flex items-center gap-6 text-primary-100">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} lettura</span>
            </div>
            <div>{article.date}</div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Featured Image */}
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
                <img 
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
                  alt="Team che lavora sull'ottimizzazione di landing page B2B"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p>
                  Le landing page sono il cuore della lead generation B2B. Ma come assicurarsi che convertano davvero? 
                  In questo articolo esploriamo le best practice fondamentali per ottimizzare le tue pagine di 
                  atterraggio e trasformare i visitatori in lead qualificati.
                </p>

                <h2>1. Il Principio Fondamentale: Message Match</h2>
                <p>
                  La coerenza tra il tuo annuncio (Google Ads, LinkedIn, etc.) e la tua landing page è cruciale. 
                  L'utente deve trovare esattamente ciò che l'annuncio promette. Parleremo di come usare il Dynamic 
                  Text Replacement e la progettazione mirata per garantire questa "Simbiosi".
                </p>

                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Team che analizza la coerenza tra annunci e landing page"
                  className="w-full rounded-xl"
                />

                <h2>2. Elementi Chiave di una Landing Page Efficace</h2>
                <p>
                  Una landing page B2B efficace deve essere progettata con attenzione a ogni dettaglio. 
                  Ecco gli elementi fondamentali:
                </p>
                <ul>
                  <li>
                    <strong>Headline chiara e mirata:</strong> Comunica immediatamente il valore principale 
                    e parla direttamente al tuo target
                  </li>
                  <li>
                    <strong>Copy orientato ai benefici:</strong> Evidenzia come la tua soluzione risolve 
                    problemi specifici del settore B2B
                  </li>
                  <li>
                    <strong>Social proof pertinente:</strong> Case study, testimonial e risultati concreti 
                    da aziende simili al target
                  </li>
                  <li>
                    <strong>Form ottimizzati:</strong> Richiedi solo le informazioni veramente necessarie 
                    nella fase attuale del funnel
                  </li>
                  <li>
                    <strong>CTA strategiche:</strong> Posizionate nei momenti giusti, con testo action-oriented 
                    e value proposition chiara
                  </li>
                </ul>

                <h2>3. Ottimizzazione Continua: Il Ruolo della CRO</h2>
                <p>
                  Non basta creare una buona pagina, bisogna ottimizzarla costantemente. Vedremo come impostare 
                  un processo di A/B testing efficace basato sui dati per migliorare progressivamente le performance.
                </p>

                <img 
                  src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg"
                  alt="Dashboard di analisi A/B testing e ottimizzazione CRO"
                  className="w-full rounded-xl"
                />

                <h3>Elementi da Testare</h3>
                <ul>
                  <li>Varianti di headline e sottotitoli</li>
                  <li>Posizionamento e design delle CTA</li>
                  <li>Lunghezza e struttura dei form</li>
                  <li>Tipologie di social proof</li>
                  <li>Layout e gerarchia visiva</li>
                </ul>

                <h2>Conclusioni e Prossimi Passi</h2>
                <p>
                  L'ottimizzazione delle landing page B2B è un processo continuo che richiede un approccio 
                  sistematico e data-driven. Inizia implementando questi principi fondamentali e continua a 
                  testare e ottimizzare in base ai dati reali del tuo pubblico.
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <div className="flex gap-2">
                    {article.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Author Box */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full mb-4 flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-2">{article.author}</h3>
                <p className="text-gray-600 text-sm">
                  Team di esperti in lead generation B2B e ottimizzazione delle conversioni di Internet Valore.
                </p>
              </div>

              {/* Related Guide CTA */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Approfondisci l'Argomento</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Scarica la nostra guida completa all'ottimizzazione delle landing page B2B
                </p>
                <Link
                  to={`/risorse/guide-download/${article.relatedGuide}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                >
                  <Download className="w-4 h-4" />
                  Scarica la Guida Gratuita
                </Link>
              </div>

              {/* CTA Box */}
              <div className="bg-primary-900 text-white rounded-xl p-6 mt-8">
                <h3 className="font-semibold mb-4">Vuoi Applicare Questi Principi?</h3>
                <p className="text-sm text-primary-100 mb-4">
                  Scopri come il Sistema Costellazioni Valore può ottimizzare le tue landing page B2B
                </p>
                <Link
                  to="/sistema"
                  className="inline-flex items-center gap-2 bg-white text-primary-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors w-full justify-center"
                >
                  Scopri il Sistema
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogDetailPage;