import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import Breadcrumb from '../components/shared/Breadcrumb';
import { ArrowLeft } from 'lucide-react';

interface GuidaContentPageProps {
  titoloGuida: string;
  contenutoGuida: string;
}

const GuidaContentPage: React.FC<GuidaContentPageProps> = ({ titoloGuida, contenutoGuida }) => {
  const breadcrumbItems = [
    { label: 'Risorse', path: '/risorse' },
    { label: 'Guide', path: '/risorse/guide-download' },
    { label: titoloGuida, path: '#' }
  ];

  return (
    <>
      <Helmet>
        <title>{titoloGuida} | Guide | Sistema Costellazioni Valore</title>
        <meta name="description" content={`Leggi la guida completa: ${titoloGuida}`} />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <Link 
            to="/risorse/guide-download"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alle Guide
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">{titoloGuida}</h1>
        </div>
      </Section>

      {/* Content Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {contenutoGuida.split('\n').map((paragraph, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default GuidaContentPage;