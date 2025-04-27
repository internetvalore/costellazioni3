import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { Phone, Building2, ArrowRight, Shield } from 'lucide-react';

const ContattiPage: React.FC = () => {
  const whatsappUrl = "https://wa.me/393475012682?text=Vorrei%20informazioni%20sul%20Sistema%20Costellazioni%20Valore";

  return (
    <>
      <Helmet>
        <title>Contatti | Sistema Costellazioni Valore</title>
        <meta name="description" content="Parliamo del tuo progetto di lead generation B2B. Scopri come il Sistema Costellazioni Valore può trasformare il tuo approccio all'acquisizione clienti." />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Parliamo del Tuo Progetto di Lead Generation B2B
          </h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Scopri come possiamo aiutarti a trasformare il tuo approccio all'acquisizione clienti con una strategia data-driven e risultati misurabili
          </p>
        </div>
      </Section>

      {/* Contact Methods Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Come Contattarci</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Numero Verde</h3>
                    <a href="tel:800931785" className="text-primary-600 hover:text-primary-700 text-lg font-medium">
                      800 931 785
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sede</h3>
                    <p className="text-gray-600">
                      Via Larga 31<br />
                      20122 Milano (MI)<br />
                      Italia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Contattaci su WhatsApp</h3>
                <p className="text-gray-600 mb-6">
                  Ricevi assistenza immediata e personalizzata attraverso WhatsApp. Il nostro team è pronto a rispondere alle tue domande.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Chatta con Noi su WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Dove Siamo</h2>
              <div className="aspect-square bg-gray-100 rounded-xl shadow-sm overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.2353587444507!2d9.194595776907287!3d45.46238623656714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a5c07815cd%3A0x4c5f2c6efe7f31f5!2sVia%20Larga%2C%2031%2C%2020122%20Milano%20MI!5e0!3m2!1sen!2sit!4v1709913327044!5m2!1sen!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa sede Internet Valore srl"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContattiPage;