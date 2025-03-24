
import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: "Dr. Alessio Mario Rocca",
    role: "Odontoiatra",
    image: "public/lovable-uploads/c9b4e27c-4368-4b3f-9441-cd242552287e.png",
    description: "Fondatore dello studio con oltre 15 anni di esperienza in odontoiatria generale e chirurgia orale."
  },
  {
    name: "Dott. Filippo Varegio",
    role: "Odontoiatra",
    image: "public/lovable-uploads/c9b4e27c-4368-4b3f-9441-cd242552287e.png",
    description: "Specialista in implantologia e protesi dentali con un approccio mini-invasivo."
  },
  {
    name: "Dott. Carlo Cantu",
    role: "Odontoiatra",
    image: "public/lovable-uploads/c9b4e27c-4368-4b3f-9441-cd242552287e.png",
    description: "Esperto in ortodonzia e trattamenti estetici per tutte le età."
  },
  {
    name: "Dott.ssa Elisabetta Moro",
    role: "Igienista Dentale",
    image: "public/lovable-uploads/c9b4e27c-4368-4b3f-9441-cd242552287e.png",
    description: "Specializzata nella prevenzione e nell'educazione all'igiene orale."
  }
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    <section id="team" className="py-20 bg-dental-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-teal/10 text-dental-teal px-4 py-2 rounded-full text-sm font-medium mb-4">
            Il Nostro Team
          </span>
          <h2 className="section-title">
            Professionisti Esperti al Tuo Servizio
          </h2>
          <p className="section-subtitle">
            Il nostro team è composto da professionisti altamente qualificati e costantemente aggiornati sulle più recenti tecniche in campo odontoiatrico.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-dental-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-dental-teal font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
                <button className="mt-4 text-dental-teal font-medium text-sm">
                  Scopri di più
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
