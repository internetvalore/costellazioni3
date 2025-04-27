import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sistema Costellazioni Valore</h3>
            <p className="text-gray-300">
              L'hub informativo per le soluzioni digitali innovative di Internet Valore srl.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Collegamenti Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sistema" className="text-gray-300 hover:text-white transition-colors">
                  Il Sistema
                </Link>
              </li>
              <li>
                <Link to="/metodologia" className="text-gray-300 hover:text-white transition-colors">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-gray-300 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                Internet Valore srl<br />
                Via Larga 31<br />
                20122 Milano (MI)
              </p>
              <a 
                href="tel:800931785" 
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Numero Verde: 800 931 785
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; {currentYear} Internet Valore srl - P.IVA 06767350967. Tutti i diritti riservati.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.iubenda.com/privacy-policy/77132692" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://www.iubenda.com/privacy-policy/77132692/cookie-policy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;