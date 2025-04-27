import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Section from '../components/shared/Section';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const GuideDownloadPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Placeholder data - in a real implementation, this would come from a data source
  const guide = {
    title: "Guida Completa alla Lead Generation B2B in Italia",
    description: "Scarica la nostra guida completa e scopri le strategie più efficaci, le tattiche operative e gli strumenti indispensabili per costruire un motore di lead generation B2B di successo nel mercato italiano. Impara a definire il tuo ICP, ottimizzare le campagne, creare landing page che convertono e misurare il ROI.",
    category: "Lead Generation",
    benefits: [
      "Framework completo per la lead generation B2B",
      "Template pronti all'uso per landing page e campagne",
      "Checklist di implementazione step-by-step",
      "Esempi pratici e casi studio italiani",
      "Metriche chiave da monitorare",
      "Tool e risorse consigliate"
    ],
  };

  const redirectUrl = `/risorse/guide-download/${slug}/contenuto`;
  const whatsappUrl = `https://wa.me/393475012682?text=Vorrei%20ricevere%20la%20guida:%20${encodeURIComponent(guide.title)}`;

  return (
    <>
      <Helmet>
        <title>{guide.title} | Guide | Sistema Costellazioni Valore</title>
        <meta name="description" content={guide.description} />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/risorse/guide-download"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alle Guide
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full">
              {guide.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{guide.title}</h1>
          <p className="text-xl text-primary-100">{guide.description}</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Guide Info */}
            <div>
              <div className="relative aspect-[3/4] mb-8 rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Copertina della guida lead generation B2B"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-white/90 text-primary-600 text-sm font-medium rounded-full mb-3">
                    Guida Completa
                  </span>
                  <h2 className="text-xl font-bold text-white">
                    Lead Generation B2B
                  </h2>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">Cosa Include la Guida</h2>
                <ul className="space-y-4">
                  {guide.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Access Options */}
            <div className="md:sticky md:top-24">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Accedi Subito alla Guida!</h2>
                <p className="text-gray-600 mb-8">
                  Scegli il metodo che preferisci per ricevere la guida:
                </p>

                <div className="space-y-6">
                  {/* Direct Access Button */}
                  <a
                    href={redirectUrl}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Leggi la Guida Online
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* WhatsApp Option */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">oppure</span>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Ricevi la Guida su WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <p className="text-sm text-gray-500 text-center">
                    Scegli WhatsApp per ricevere anche supporto personalizzato
                  </p>

                  <div className="text-sm text-gray-500 text-center">
                    Accedendo alla guida accetti la nostra{' '}
                    <a 
                      href="https://www.iubenda.com/privacy-policy/77132692" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default GuideDownloadPage;