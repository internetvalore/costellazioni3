import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { Search, Filter, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const BlogListPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Sistema Costellazioni Valore</title>
        <meta name="description" content="Articoli, guide e approfondimenti sulla lead generation B2B e il Sistema Costellazioni Valore" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Approfondimenti e strategie per la lead generation B2B
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Cerca articoli..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Categorie</h2>
                <div className="space-y-2">
                  {['Lead Generation', 'Marketing B2B', 'Landing Page', 'CRO'].map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-4 py-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Tag</h2>
                <div className="flex flex-wrap gap-2">
                  {['SaaS', 'PPC', 'Analytics', 'ROI', 'CRO', 'B2B'].map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-gray-50 hover:bg-primary-50 text-gray-600 hover:text-primary-600 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="md:col-span-3">
              <div className="space-y-8">
                {/* Article 1 */}
                <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
                      alt="Team che lavora sull'ottimizzazione di landing page B2B"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full">
                        Lead Generation
                      </span>
                      <span className="text-sm text-gray-500">
                        15 Marzo 2025
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary-600 transition-colors">
                      <Link 
                        to="/risorse/blog/articolo-placeholder-1"
                      >
                        Come Ottimizzare le Landing Page B2B
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Una guida completa all'ottimizzazione delle landing page per 
                      la lead generation B2B, con focus su best practice e casi studio.
                    </p>
                    <Link 
                      to="/risorse/blog/articolo-placeholder-1"
                      className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group"
                    >
                      Leggi l'articolo
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>

                {/* Article 2 */}
                <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg"
                      alt="Dashboard di analisi CRO con grafici e metriche"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full">
                        CRO
                      </span>
                      <span className="text-sm text-gray-500">
                        10 Marzo 2025
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary-600 transition-colors">
                      <Link 
                        to="/risorse/blog/articolo-placeholder-2"
                      >
                        Il Ruolo della CRO nella Lead Generation
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Scopri come l'ottimizzazione del tasso di conversione può 
                      trasformare la tua strategia di lead generation B2B.
                    </p>
                    <Link 
                      to="/risorse/blog/articolo-placeholder-2"
                      className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group"
                    >
                      Leggi l'articolo
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">1</button>
                <button className="w-10 h-10 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors font-medium">2</button>
                <button className="w-10 h-10 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors font-medium">3</button>
                <button className="p-2 rounded-lg hover:bg-primary-50 text-gray-600 hover:text-primary-600 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogListPage;