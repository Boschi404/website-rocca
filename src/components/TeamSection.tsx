import { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Owner profile (special layout)
const ownerProfile = {
  name: "Dott. Alessio Rocca",
  role: "DIRETTORE SANITARIO",
  image: "/images/foto-rocca-21.jpg",
  biography:
    "Laureato in odontoiatria e protesi dentaria nel 1998 presso l'Università degli Studi di Siena, pratica la professione medica da oltre 30 anni. " +
    "Dal 1999 al 2020 ha frequentato la Clinica Odontoiatrica dell'Ospedale San Paolo di Milano, alternando attività di tutor per il corso di laurea in Odontoiatria ad attività libero professionale e di medico frequentatore nei reparti di protesi totale ed implantoprotesi. " +
    "Collabora da decenni con importanti studi dentistici lombardi. " +
    "Dal 2008 è direttore sanitario del proprio studio a Besana in Brianza. " +
    "È socio ordinario AIOP ed ANDI."
};

// Regular team members
const teamMembers = [{
  name: "Dott. Alessio Rocca",
  role: "Direttore Sanitario",
  image: "/images/foto-rocca-20.jpg",
  description: "Laureato in Odontoiatria e Protesi Dentaria, esercita da oltre 30 anni. Ha svolto attività clinica e di tutor presso l'Ospedale San Paolo di Milano, dedicandosi a protesi e implantoprotesi. Collabora con importanti studi dentistici ed è socio AIOP e ANDI. Dal 2008 è direttore sanitario presso il suo studio di Besana in Brianza."
}, {
  name: "Dott.ssa Fiorenza Crosetto",
  role: "Ortodonzia - Pedodonzia",
  image: "/images/crosetto-1.jpg",
  description: "Laureata in Odontoiatria, si dedica da oltre trent'anni alla cura dei più piccoli. Con competenza e sensibilità, accompagna i bambini in percorsi odontoiatrici mirati, trasmettendo fiducia e serenità. Specializzata in pedodonzia e ortodonzia, crede nell'importanza di far vivere ai giovani pazienti esperienze positive dal dentista."
}, {
  name: "Dott. Alessandro Rossi",
  role: "Chirurgia Odontostomatologica",
  image: "/images/rossi-1.jpg",
  description: "Laureato in Odontoiatria, ha sviluppato competenze approfondite in chirurgia orale e implantologia. Si occupa di estrazioni complesse, rigenerazioni ossee e riabilitazioni implantoprotesiche. Attento alla precisione chirurgica e al benessere del paziente, offre trattamenti avanzati e personalizzati per risolvere anche i casi più complessi."
}, {
  name: "Dott.ssa Arianna Perduca",
  role: "Pedodonzia",
  image: "/images/perduca-1.jpg",
  description: "Laureata in Odontoiatria, ha scelto di dedicarsi ai più piccoli, specializzandosi in pedodonzia. Accoglienza, ascolto e delicatezza sono al centro del suo approccio, per far vivere ai bambini esperienze serene e costruttive. Crede nell'importanza della prevenzione e dell'educazione alla salute orale sin dai primi anni di vita."
}, {
  name: "Dott.ssa Melissa Besana",
  role: "Ortodonzia - Medicina Estetica",
  image: "/images/foto-rocca-22.jpg",
  description: "Laureata in Odontoiatria, si dedica con passione all'ortodonzia e al benessere dei pazienti. Ha approfondito tecniche di ortodonzia intercettiva, fissa e con miniviti, conseguendo un master sugli allineatori trasparenti. Oggi arricchisce il suo percorso con studi in medicina estetica, per offrire un approccio completo che valorizzi sorriso e bellezza."
}, {
  name: "Antonella Saitta",
  role: "Coordinazione - Amministrazione",
  image: "/images/foto-rocca-18.jpg",
  description: "Punto di riferimento per l'organizzazione dello studio, si occupa di coordinamento e gestione amministrativa. Con precisione e disponibilità, accompagna i pazienti nei percorsi di cura, facilitando la comunicazione e la pianificazione dei trattamenti. La sua presenza garantisce un ambiente ordinato, accogliente ed efficiente."
}, {
  name: "Giulia Lucisano",
  role: "Assistente alla Poltrona",
  image: "/images/foto-rocca-19.jpg",
  description: "Assistente alla poltrona, si occupa di accoglienza e supporto ai pazienti durante i trattamenti. Collabora fianco a fianco con i medici, garantendo attenzione ai dettagli e un ambiente sereno. Con professionalità e gentilezza, contribuisce a rendere ogni visita più confortevole, instaurando un rapporto di fiducia con i pazienti."
}, {
  name: "Dream",
  role: "Pet Therapy",
  image: "/images/dream2.jpeg",
  description: "Membro speciale del team, porta serenità e sorrisi nello studio. Specializzato in coccole e grattini, accompagna i pazienti più piccoli e non solo, trasformando la visita odontoiatrica in un momento positivo. Con la sua presenza rassicurante, aiuta a ridurre ansia e paura, creando un ambiente accogliente e più umano."
}];

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
  return <section id="team" className="py-20 bg-dental-stone/30">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-olive/10 text-dental-olive px-4 py-2 rounded-full text-sm font-medium mb-4">
            Il Nostro Team
          </span>
          <h2 className="section-title font-bold text-3xl">
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
                  <h3 className="font-bold mb-2 text-center text-3xl text-dental-blue">
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
                  {ownerProfile.biography.split('\n\n').map((paragraph, index) => <p key={index} className="leading-relaxed text-lg">
                      {paragraph}
                    </p>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular team members */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
              <AspectRatio ratio={3 / 4} className="overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" />
              </AspectRatio>
              <div className="p-6">
                <h3 className="font-semibold mb-1 text-xl text-dental-blue">
                  {member.name}
                </h3>
                <p className="text-dental-olive/80 font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TeamSection;