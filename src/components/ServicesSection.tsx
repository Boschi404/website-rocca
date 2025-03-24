
import { useEffect, useRef } from 'react';
import { Stethoscope } from 'lucide-react';

const services = [
  {
    title: "Odontoiatria Generale",
    description: "Cure dentali preventive e terapeutiche per mantenere la salute orale e prevenire problemi futuri.",
    icon: Stethoscope,
  },
  {
    title: "Implantologia",
    description: "Sostituzione di denti mancanti con impianti dentali di alta qualità per un sorriso naturale e funzionale.",
    icon: Stethoscope,
  },
  {
    title: "Ortodonzia",
    description: "Trattamenti per correggere il posizionamento dei denti e migliorare l'occlusione dentale.",
    icon: Stethoscope,
  },
  {
    title: "Chirurgia Orale",
    description: "Interventi chirurgici per risolvere problemi complessi della cavità orale e delle strutture circostanti.",
    icon: Stethoscope,
  },
  {
    title: "Estetica Dentale",
    description: "Trattamenti per migliorare l'aspetto del sorriso, inclusi sbiancamento e faccette dentali.",
    icon: Stethoscope,
  },
  {
    title: "Igiene Dentale",
    description: "Pulizia professionale e consigli personalizzati per mantenere una corretta igiene orale quotidiana.",
    icon: Stethoscope,
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animate-in');
            }
            if (entry.target === cardsRef.current) {
              entry.target.classList.add('animate-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-teal/10 text-dental-teal px-4 py-2 rounded-full text-sm font-medium mb-4">
            I Nostri Servizi
          </span>
          <h2 className="section-title">
            Cure Dentistiche Complete
          </h2>
          <p className="section-subtitle">
            La nostra clinica offre una vasta gamma di servizi odontoiatrici per rispondere a tutte le esigenze dei nostri pazienti, dai trattamenti di routine alla odontoiatria avanzata.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
            >
              <div className="mb-4 w-14 h-14 rounded-full bg-dental-teal/10 flex items-center justify-center">
                <service.icon size={28} className="text-dental-teal" />
              </div>
              <h3 className="text-xl font-semibold text-dental-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              <button className="mt-4 text-dental-teal font-medium flex items-center space-x-1 group">
                <span>Scopri di più</span>
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
