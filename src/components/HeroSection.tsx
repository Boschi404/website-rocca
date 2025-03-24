
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-gradient-to-br from-dental-offwhite via-white to-dental-lightblue/20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full w-96 h-96 bg-dental-aqua/10 -top-48 -right-48"></div>
        <div className="absolute rounded-full w-96 h-96 bg-dental-teal/10 -bottom-48 -left-48"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 stagger-animation">
            <span className="inline-block bg-dental-teal/10 text-dental-teal px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Studio Odontoiatrico
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dental-navy mb-4 leading-tight">
              Dr. Alessio Mario <span className="text-dental-teal">Rocca</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Il nostro impegno è offrire cure odontoiatriche di eccellenza in un ambiente confortevole e accogliente, con particolare attenzione alle esigenze di ogni paziente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Prenota Visita
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-secondary"
              >
                Scopri i Servizi
              </button>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-dental-teal/10 flex items-center justify-center">
                  <span className="text-dental-teal font-bold">5.0</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-dental-navy">Valutazione eccellente</p>
                  <p className="text-xs text-gray-500">Basato su 4 recensioni</p>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-dental-teal/10 flex items-center justify-center">
                  <span className="text-dental-teal font-bold">15+</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-dental-navy">Anni di esperienza</p>
                  <p className="text-xs text-gray-500">Professionalità e competenza</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-dental-teal/20 rounded-full blur-3xl animate-pulse-soft"></div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Paziente sorridente"
                className="relative z-10 rounded-2xl shadow-xl animate-fade-in-up object-cover w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 z-20 animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-dental-navy">5.0/5.0</span>
                </div>
                <p className="text-xs mt-1 text-gray-500">basato su 4 recensioni</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,224C672,235,768,245,864,234.7C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
