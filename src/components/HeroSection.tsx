
import { useEffect, useRef } from 'react';
import { Phone, Calendar } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });
    
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" ref={sectionRef} className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-gradient-to-br from-dental-stone/30 via-white to-dental-olive/10 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full w-96 h-96 bg-dental-stone/20 -top-48 -right-48"></div>
        <div className="absolute rounded-full w-96 h-96 bg-dental-olive/10 -bottom-48 -left-48"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 stagger-animation">
            <div className="mb-6">
              <img src="/images/rocca-logo-def.png" alt="ROCCA Studio Odontoiatrico" className="max-w-[400px] md:max-w-[600px] mx-auto lg:mx-0" />
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Il nostro impegno è offrire cure odontoiatriche di eccellenza in un ambiente confortevole e accogliente, con particolare attenzione alle esigenze di ogni paziente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0362801081" className="flex items-center justify-center space-x-2 bg-dental-blue text-white font-medium py-3 px-6 rounded-md shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                <Phone size={20} />
                <span>Chiama ora per informazioni</span>
              </a>
              <a href="https://www.miodottore.it/alessio-mario-rocca/dentista/besana-in-brianza?prevent-patient-app-banner=true&utm_source=google&utm_medium=gmb&utm_campaign=516181&utm_content=book_visit&hl=it-IT&gei=RKcPaIjaKOCwi-gPxbSrUQ&rwg_token=AAiGsobvwMZVpbgL2LYEuA19yN8gCG0qSFRNVGqXOth-cmGh8nE-fegK3O7mAvHGd18QNdQIEP05vjJWdH8K0a399gZNydZijw%3D%3D#highlight-calendar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-dental-blue text-white font-medium py-3 px-6 rounded-md shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                <Calendar size={20} />
                <span>Prenota online</span>
              </a>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-dental-olive/10 flex items-center justify-center">
                  <span className="text-[#9a9a8f] font-bold text-lg">5.0</span>
                </div>
                <div>
                  <p className="font-medium text-dental-navy text-base">Valutazione eccellente</p>
                  <p className="text-gray-500 text-sm">Basato su 16 recensioni</p>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-dental-olive/10 flex items-center justify-center">
                  <span className="text-[#9a9a8f] font-bold text-lg">20+</span>
                </div>
                <div>
                  <p className="font-medium text-dental-navy text-base">Anni di esperienza</p>
                  <p className="text-gray-500 text-sm">Professionalità e competenza</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-dental-olive/20 rounded-full blur-3xl animate-pulse-soft"></div>
              <img src="/images/foto-rocca-16.jpg" alt="Studio dentistico in azione" className="relative z-10 rounded-2xl shadow-xl animate-fade-in-up object-cover w-full" />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 z-20 animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-dental-navy text-lg font-extrabold">5.0/5.0</span>
                </div>
                <p className="mt-1 text-gray-500 text-xs">basato su 16 recensioni</p>
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
