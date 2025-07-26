import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
const LocationSection = () => {
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
  return <section id="location" className="py-20 bg-dental-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-olive/10 text-dental-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contatti
          </span>
          <h2 className="section-title">
            Come Raggiungerci
          </h2>
          <p className="section-subtitle">
            Lo studio si trova in una posizione facilmente raggiungibile nel centro di Besana in Brianza, con ampia disponibilità di parcheggio nelle vicinanze. Inoltre, dista solo 100 metri dalla stazione ferroviaria Milano–Lecco (via Molteno).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-dental-blue/10 flex items-center justify-center">
                  <MapPin size={24} className="text-dental-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dental-navy mb-1">Indirizzo</h3>
                  <p className="text-gray-600">Via Dante Alighieri, 23<br />20842 Besana In Brianza MB</p>
                  <a href="https://maps.google.com/?q=Via+Dante+Alighieri+23+Besana+In+Brianza" target="_blank" rel="noreferrer" className="text-dental-teal font-medium mt-2 inline-block hover:underline">
                    Ottieni indicazioni
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-dental-blue/10 flex items-center justify-center">
                  <Phone size={24} className="text-dental-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dental-navy mb-1">Contatti</h3>
                  <p className="text-gray-600">
                    <a href="tel:0362801081" className="hover:text-dental-teal">0362 801081</a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:info@studiorocca.it" className="hover:text-dental-teal">info@studiorocca.it</a>
                  </p>
                  <br />
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:0362801081" className="flex items-center justify-center space-x-2 bg-dental-blue text-white font-medium py-3 px-6 rounded-md shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                      <Phone size={32} />
                      <span>Chiama ora per informazioni</span>
                    </a>
                    <a href="https://www.miodottore.it/strutture/studio-odontoiatrico-dr-alessio-rocca?saasonly=true" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-dental-blue text-white font-medium py-3 px-6 rounded-md shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                      <img src="/images/mio-dottore-logo.png" alt="logo mio dottore png" width={32} height={32}/>
                      <span>Prenota online</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-dental-teal/10 flex items-center justify-center">
                  <Clock size={24} className="text-dental-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dental-navy mb-1">Orari di Apertura</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-600">
                    <div>Lunedì - Venerdì:</div>
                    <div>09:00 - 19:00</div>
                    <div>Sabato:</div>
                    <div>09:00 - 13:00</div>
                    <div>Domenica:</div>
                    <div>Chiuso</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md h-100 relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.2700157238503!2d9.28300037692117!3d45.70217648978248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a4eb5b9bec2b%3A0xf4ec4677a37fa1a!2sStudio%20Odontoiatrico%20Dott.%20Alessio%20Rocca!5e1!3m2!1sit!2sit!4v1753548763566!5m2!1sit!2sit" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationSection;