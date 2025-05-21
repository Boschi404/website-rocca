import { useEffect, useRef } from 'react';

// Define service objects with descriptions and icon paths
const services = [{
  title: "Ortodonzia",
  description: "Correzione delle malocclusioni e allineamento dentale nel rispetto dell'armonia facciale.",
  iconSrc: "/images/ortodonzia.png"
}, {
  title: "Invisalign ®",
  description: "Apparecchi trasparenti e rimovibili per l'allineamento dentale senza metallo visibile.",
  iconSrc: "/images/invisalign.png"
}, {
  title: "Implantologia e Protesi",
  description: "Sostituzione dei denti naturali con impianti e protesi funzionali ed estetiche.",
  iconSrc: "/images/impiantologia.png"
}, {
  title: "Parodontologia",
  description: "Trattamenti per la cura delle gengive e dei tessuti di supporto del dente.",
  iconSrc: "/images/parodontologia.png"
}, {
  title: "Chirurgia Orale",
  description: "Interventi chirurgici per risolvere problematiche dentali complesse e irreversibili.",
  iconSrc: "/images/chirurgia-orale.png"
}, {
  title: "Sbiancamento Dentale",
  description: "Tecniche professionali per schiarire i denti in modo sicuro ed efficace.",
  iconSrc: "/images/sbiancamento.png"
}, {
  title: "Pedodonzia",
  description: "Cure odontoiatriche pediatriche mirate alla prevenzione e al benessere del bambino.",
  iconSrc: "/images/pedodonzia.png"
}, {
  title: "Igiene Dentale",
  description: "Rimozione di placca e tartaro per mantenere la salute e l'igiene del cavo orale.",
  iconSrc: "/images/igiene-dentale.png"
}];
const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            entry.target.classList.add('animate-in');
          }
          if (entry.target === cardsRef.current) {
            entry.target.classList.add('animate-in');
          }
        }
      });
    }, {
      threshold: 0.1
    });
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
  return <section id="services" className="py-20 bg-dental-stone/20">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-olive/10 text-dental-olive px-4 py-2 rounded-full text-sm font-medium mb-4">
            I Nostri Servizi
          </span>
          <h2 className="section-title font-bold text-3xl">
            Cure Dentistiche Complete
          </h2>
          <p className="section-subtitle">
            La nostra clinica offre una vasta gamma di servizi odontoiatrici per rispondere a tutte le esigenze dei nostri pazienti, dai trattamenti di routine alla odontoiatria avanzata.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-dental-stone/30 card-hover">
              <div className="mb-4 w-16 h-16 rounded-full bg-dental-olive/10 flex items-center justify-center">
                <img src={service.iconSrc} alt={`${service.title} icon`} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-dental-olive mb-3 text-xl font-bold">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;