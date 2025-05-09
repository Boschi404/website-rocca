
import { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Owner profile (special layout)
const ownerProfile = {
  name: "Dott. Alessio Rocca",
  role: "DIRETTORE SANITARIO",
  image: "/images/foto-rocca-21.jpg",
  biography: "Si è laureato in odontoiatria e protesi dentaria nel 1998. Dal 1999 frequenta la Clinica Odontoiatrica dell'Ospedale S. Paolo di Milano, alternando attività di Tutor degli studenti del corso di laurea in Odontoiatria ad attività libero professionale e di medico frequentatore nei reparti di Protesi totale ed Implantoprotesi. Esercita attività professionale presso il proprio Studio. Presso lo Studio Dentistico Crosetto collabora da diversi anni per le specialitá di endodonzia, protesi fissa e mobile, ed implantoprotesi. Socio ordinario AIOP ed ANDI.\n\nIl suo approccio combina competenza tecnica, tecnologie all'avanguardia e una profonda comprensione delle esigenze dei pazienti, garantendo sempre i migliori risultati possibili."
};

// Regular team members
const teamMembers = [
  {
    name: "Dott.ssa Fiorenza Crosetto",
    role: "Ortodonzia - Pedodonzia",
    image: "/images/foto-rocca-8.jpg",
    description: "Specialista in implantologia e protesi dentali con un approccio mini-invasivo."
  }, 
  {
    name: "Dott. Alessandro Rossi",
    role: "Chirurgia Odontostomatologica",
    image: "/images/foto-rocca-9.jpg",
    description: "Esperto in ortodonzia e trattamenti estetici per tutte le età."
  }, 
  {
    name: "Dott.ssa Serena Di Santo",
    role: "Igienista Dentale",
    image: "/images/foto-rocca-10.jpg",
    description: "Specializzata nella prevenzione e nell'educazione all'igiene orale."
  }, 
  {
    name: "Antonella Saitta",
    role: "Coordinazione - Amministrazione",
    image: "/images/foto-rocca-18.jpg",
    description: "Gestione appuntamenti e accoglienza pazienti."
  }, 
  {
    name: "Giulia Lucisano",
    role: "Assistente alla Poltrona",
    image: "/images/foto-rocca-19.jpg",
    description: "Supporto durante gli interventi e preparazione strumentazione."
  }, 
  {
    name: "Dream",
    role: "Pet Therapy",
    image: "/images/dream2.jpeg",
    description: "Specializzato in coccole e grattini."
  }
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ownerRef = useRef<HTMLDivElement>(null);
  
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
          if (entry.target === ownerRef.current) {
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
    if (ownerRef.current) {
      observer.observe(ownerRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
      if (ownerRef.current) {
        observer.unobserve(ownerRef.current);
      }
    };
  }, []);
  
  return (
    <section id="team" className="py-20 bg-dental-stone/30">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-olive/10 text-dental-olive px-4 py-2 rounded-full text-sm font-medium mb-4">
            Il Nostro Team
          </span>
          <h2 className="section-title text-dental-olive font-bold text-3xl">
            Professionisti Esperti al Tuo Servizio
          </h2>
          <p className="section-subtitle">
            Il nostro team è composto da professionisti altamente qualificati e costantemente aggiornati sulle più recenti tecniche in campo odontoiatrico.
          </p>
        </div>

        {/* Owner profile with featured layout */}
        <div ref={ownerRef} className="mb-16 stagger-animation">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <div className="h-full flex flex-col items-center justify-center p-6 lg:p-10 bg-dental-olive/5">
                  <div className="mb-6 w-60 h-60 overflow-hidden rounded-full border-4 border-dental-stone">
                    <img src={ownerProfile.image} alt={ownerProfile.name} className="w-full h-full object-cover object-center" />
                  </div>
                  <h3 className="font-bold text-dental-olive mb-2 text-center text-3xl">
                    {ownerProfile.name}
                  </h3>
                  <p className="text-dental-olive/80 font-medium text-lg mb-3 text-center">
                    {ownerProfile.role}
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 lg:p-10">
                <h4 className="font-semibold text-dental-olive mb-4 text-3xl">Biografia</h4>
                <div className="text-gray-600 space-y-4">
                  {ownerProfile.biography.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular team members */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
              <AspectRatio ratio={3 / 4} className="overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" 
                />
              </AspectRatio>
              <div className="p-6">
                <h3 className="font-semibold text-dental-olive mb-1 text-xl">
                  {member.name}
                </h3>
                <p className="text-dental-olive/80 font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
                <button className="mt-4 text-dental-olive font-medium text-sm">
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
