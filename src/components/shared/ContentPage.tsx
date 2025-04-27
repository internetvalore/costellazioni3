import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from './Section';
import Breadcrumb from './Breadcrumb';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ContentPageProps {
  title: string;
  description: string;
  breadcrumbItems: Array<{ label: string; path: string }>;
  backLink: {
    to: string;
    label: string;
  };
  heroImage?: string;
  content: React.ReactNode;
  ctaSection?: {
    title: string;
    description: string;
    primaryCta: {
      to: string;
      label: string;
    };
    secondaryCta?: {
      to: string;
      label: string;
    };
  };
}

const ContentPage: React.FC<ContentPageProps> = ({
  title,
  description,
  breadcrumbItems,
  backLink,
  heroImage,
  content,
  ctaSection
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | Sistema Costellazioni Valore</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <Link 
            to={backLink.to}
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLink.label}
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-primary-100">{description}</p>
            </div>
            {heroImage && (
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      {ctaSection && (
        <Section className="bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {ctaSection.title}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {ctaSection.description}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                to={ctaSection.primaryCta.to}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                {ctaSection.primaryCta.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
              {ctaSection.secondaryCta && (
                <Link
                  to={ctaSection.secondaryCta.to}
                  className="inline-flex items-center justify-center gap-2 bg-primary-800 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  {ctaSection.secondaryCta.label}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </Section>
      )}
    </>
  );
};

export default ContentPage;