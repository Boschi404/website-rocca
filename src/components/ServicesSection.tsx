
import { useEffect, useRef } from 'react';
import { Stethoscope, AlignCenter, Glasses, Heart, Smile, Scissors, Baby, Activity } from 'lucide-react';

const services = [
  {
    title: "Ortodonzia",
    description: "Correzione delle malocclusioni e allineamento dentale nel rispetto dell'armonia facciale.",
    icon: AlignCenter,
  },
  {
    title: "Invisalign ®",
    description: "Apparecchi trasparenti e rimovibili per l'allineamento dentale senza metallo visibile.",
    icon: Glasses,
  },
  {
    title: "Implantologia e Protesi",
    description: "Sostituzione dei denti naturali con impianti e protesi funzionali ed estetiche.",
    icon: Heart,
  },
  {
    title: "Parodontologia",
    description: "Trattamenti per la cura delle gengive e dei tessuti di supporto del dente.",
    icon: Smile,
  },
  {
    title: "Chirurgia Orale",
    description: "Interventi chirurgici per risolvere problematiche dentali complesse e irreversibili.",
    icon: Scissors,
  },
  {
    title: "Sbiancamento Dentale",
    description: "Tecniche professionali per schiarire i denti in modo sicuro ed efficace.",
    icon: Activity,
  },
  {
    title: "Pedodonzia",
    description: "Cure odontoiatriche pediatriche mirate alla prevenzione e al benessere del bambino.",
    icon: Baby,
  },
  {
    title: "Igiene Dentale",
    description: "Rimozione di placca e tartaro per mantenere la salute e l'igiene del cavo orale.",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation"
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
