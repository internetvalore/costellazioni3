import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Il Sistema', path: '/sistema' },
    { name: 'Metodologia', path: '/metodologia' },
    { name: 'Casi Studio', path: '/casi-studio' },
    { name: 'Risorse', path: '/risorse' },
    { name: 'Contatti', path: '/contatti' },
  ];

  const dropdownItems = [
    { name: 'Soluzioni', path: '/soluzioni' },
    { name: 'Benefici', path: '/benefici' },
    { name: 'Settori', path: '/settori' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" role="banner">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-primary-600 font-bold text-xl"
            aria-label="Sistema Costellazioni Valore - Home"
          >
            Sistema Costellazioni Valore
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Menu principale">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-controls="desktop-dropdown"
              >
                Approfondimenti
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              
              {isDropdownOpen && (
                <div 
                  id="desktop-dropdown"
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  role="menu"
                >
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-menu" 
            className="md:hidden pt-4 pb-2"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Dropdown */}
              <div className="space-y-1">
                <button
                  className="flex items-center gap-1 text-gray-600 w-full"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                  aria-controls="mobile-dropdown"
                >
                  Approfondimenti
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                
                {isDropdownOpen && (
                  <div 
                    id="mobile-dropdown"
                    className="pl-4 space-y-3"
                    role="menu"
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-gray-600 hover:text-primary-600 transition-colors"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        role="menuitem"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;