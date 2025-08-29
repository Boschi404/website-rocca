import { useEffect, useRef } from 'react';

// Define service objects with descriptions and icon paths
const services = [{
  title: "Ortodonzia",
  description: "Correzione delle malocclusioni e allineamento dentale nel rispetto dell'armonia facciale.",
  iconSrc: "/images/ortodonzia.png"
}, {
  title: "Invisalign ®",
  description: "Allineamento dentale e miglioramento del sorriso ottenuto tramite mascherine trasparenti.",
  iconSrc: "/images/invisalign.png"
}, {
  title: "Implantologia e Protesi",
  description: "Impianti in titanio osteointegrati di alta qualità per sostituire denti naturali mancanti in modo sicuro e duraturo.",
  iconSrc: "/images/implantologia.png"
}, {
  title: "Parodontologia",
  description: "Trattamenti per la cura delle gengive e dei tessuti di supporto del dente.",
  iconSrc: "/images/paradontologia.png"
}, {
  title: "Chirurgia Orale ed Estetica",
  description: "Mirta alla risoluzione di problematiche di natura patologica o estetica dei tessuti duri e molli del cavo orale.",
  iconSrc: "/images/chirurgia-orale.png"
}, {
  title: "Sbiancamento Dentale",
  description: "Tecniche professionali per schiarire e smacchiare i denti in modo sicuro ed efficace.",
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
            Le nostre terapie
          </span>
          <h2 className="section-title font-bold text-3xl">
            Cure Dentistiche Complete
          </h2>
          <p className="section-subtitle">
            Il Vostro sorriso è il nostro obbiettivo. Fatevi accompagnare in un percorso di cura personalizzata, sia per i trattamenti di routine che nella odontoiatria avanzata.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-xl border border-dental-stone/30 card-hover">
              <div className="mb-4 w-16 h-16 rounded-full bg-dental-olive/10 flex items-center justify-center shadow-xl">
                <img src={service.iconSrc} alt={`${service.title} icon`} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-dental-blue mb-3 text-xl font-bold">
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