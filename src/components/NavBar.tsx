import { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="font-bold text-2xl text-dental-navy">
                <span className="text-dental-teal">ROCCA</span>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => scrollToSection('home')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('services')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors cursor-pointer"
            >
              Servizi
            </a>
            <a 
              onClick={() => scrollToSection('team')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors cursor-pointer"
            >
              Team
            </a>
            <a 
              onClick={() => scrollToSection('testimonials')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors cursor-pointer"
            >
              Recensioni
            </a>
            <a 
              onClick={() => scrollToSection('location')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors cursor-pointer"
            >
              Contatti
            </a>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:0362801081" 
                className="flex items-center space-x-2 bg-dental-teal text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
              >
                <Phone size={18} />
                <span>0362 801081</span>
              </a>
              <a 
                href="https://www.miodottore.it/alessio-mario-rocca/dentista/besana-in-brianza?prevent-patient-app-banner=true&utm_source=google&utm_medium=gmb&utm_campaign=516181&utm_content=book_visit&hl=it-IT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-dental-teal text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
              >
                <Calendar size={18} />
                <span>Prenota Online</span>
              </a>
            </div>
          </nav>

          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <div className="w-6 flex flex-col space-y-1.5">
              <span className={`block h-0.5 bg-dental-navy transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-dental-navy transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 bg-dental-navy transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 border-b border-gray-200' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-3 bg-white">
          <div className="flex flex-col space-y-4">
            <a 
              onClick={() => scrollToSection('home')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors py-2 cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('services')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors py-2 cursor-pointer"
            >
              Servizi
            </a>
            <a 
              onClick={() => scrollToSection('team')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors py-2 cursor-pointer"
            >
              Team
            </a>
            <a 
              onClick={() => scrollToSection('testimonials')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors py-2 cursor-pointer"
            >
              Recensioni
            </a>
            <a 
              onClick={() => scrollToSection('location')}
              className="font-medium text-gray-700 hover:text-dental-teal transition-colors py-2 cursor-pointer"
            >
              Contatti
            </a>
            <a 
              href="tel:0362801081" 
              className="flex items-center justify-center space-x-2 bg-dental-teal text-white px-4 py-3 rounded-md hover:bg-opacity-90 transition-all"
            >
              <Phone size={18} />
              <span>0362 801081</span>
            </a>
            <a 
              href="https://www.miodottore.it/alessio-mario-rocca/dentista/besana-in-brianza?prevent-patient-app-banner=true&utm_source=google&utm_medium=gmb&utm_campaign=516181&utm_content=book_visit&hl=it-IT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-dental-teal text-white px-4 py-3 rounded-md hover:bg-opacity-90 transition-all"
            >
              <Calendar size={18} />
              <span>Prenota Online</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
