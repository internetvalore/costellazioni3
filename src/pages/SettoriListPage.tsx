import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Section from '../components/shared/Section';
import { 
  ArrowRight, 
  Monitor, 
  Factory, 
  Briefcase, 
  HeartPulse, 
  CircuitBoard,
  Scale,
  Stethoscope,
  Users
} from 'lucide-react';

const SettoriListPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Applicazioni Settoriali del Sistema Costellazioni Valore | Internet Valore</title>
        <meta name="description" content="Scopri come il Sistema Costellazioni Valore si adatta alle esigenze specifiche del tuo settore" />
      </Helmet>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Applicazioni Settoriali del Sistema Costellazioni Valore
          </h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Ogni settore B2B ha sfide e opportunità uniche. Il Sistema Costellazioni Valore è progettato per adattarsi alle specificità del tuo mercato, garantendo strategie di lead generation efficaci e pertinenti. Scopri come aiutiamo aziende come la tua a crescere.
          </p>
        </div>
      </Section>

      {/* Sectors Grid */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ICT, Software e SaaS */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/settori/ict-software-saas"
                  className="hover:text-primary-600"
                >
                  ICT, Software e SaaS
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Genera più demo qualificate e riduci il churn con campagne mirate e landing page ottimizzate per il ciclo di vendita SaaS.
              </p>
              <Link 
                to="/settori/ict-software-saas"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri le soluzioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Aziende Manifatturiere */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/settori/manifatturiero"
                  className="hover:text-primary-600"
                >
                  Aziende Manifatturiere
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Raggiungi buyer tecnici e decisionali con messaggi precisi e landing page focalizzate sulle specifiche tecniche, generando richieste di preventivo di valore.
              </p>
              <Link 
                to="/settori/manifatturiero"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri le soluzioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Servizi Professionali */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/settori/servizi-professionali-consulenza-finanza"
                  className="hover:text-primary-600"
                >
                  Servizi Professionali e Consulenza
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Costruisci fiducia e attrai clienti di alto valore per la tua attività di consulenza, legale, finanziaria o contabile con un approccio basato sull'autorevolezza.
              </p>
              <Link 
                to="/settori/servizi-professionali-consulenza-finanza"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri le soluzioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Medicale e Farmaceutico */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/settori/medicale-farmaceutico"
                  className="hover:text-primary-600"
                >
                  Medicale e Farmaceutico
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Naviga le complessità normative e raggiungi professionisti sanitari con campagne e landing page conformi e informative.
              </p>
              <Link 
                to="/settori/medicale-farmaceutico"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri le soluzioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Elettronica */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <CircuitBoard className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/settori/elettronica"
                  className="hover:text-primary-600"
                >
                  Elettronica
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Connetti la tua tecnologia con ingegneri e uffici acquisti B2B tramite LP tecniche e campagne mirate.
              </p>
              <Link 
                to="/settori/elettronica"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri le soluzioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Studi Legali e Contabili */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/settori/legali-contabili"
                  className="hover:text-primary-600"
                >
                  Studi Legali e Contabili
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Aumenta i clienti qualificati per il tuo studio costruendo fiducia e focalizzandoti sulle aree di pratica specifiche.
              </p>
              <Link 
                to="/settori/legali-contabili"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri le soluzioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Studi Medici e Cliniche Private */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/settori/studi-medici-cliniche"
                  className="hover:text-primary-600"
                >
                  Studi Medici e Cliniche Private
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Attrai nuovi pazienti per le tue specializzazioni con campagne locali mirate e landing page informative.
              </p>
              <Link 
                to="/settori/studi-medici-cliniche"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri le soluzioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Servizi di Supporto Aziendale */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link 
                  to="/settori/servizi-supporto-aziendale"
                  className="hover:text-primary-600"
                >
                  Servizi di Supporto Aziendale
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Genera lead da aziende target per servizi di supporto (outsourcing, segretariato, PA) dimostrando efficienza e affidabilità.
              </p>
              <Link 
                to="/settori/servizi-supporto-aziendale"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
              >
                Scopri le soluzioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Non Vedi il Tuo Settore?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Contattaci per scoprire come possiamo adattare il Sistema Costellazioni Valore 
            alle esigenze specifiche del tuo settore
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Parliamo del Tuo Settore
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default SettoriListPage;