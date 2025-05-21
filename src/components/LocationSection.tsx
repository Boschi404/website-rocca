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
          <span className="inline-block bg-dental-olive/10 text-dental-olive px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contatti
          </span>
          <h2 className="section-title">
            Come Raggiungerci
          </h2>
          <p className="section-subtitle">
            Lo studio si trova in una posizione facilmente raggiungibile nel centro di Besana in Brianza, con ampia disponibilità di parcheggio nelle vicinanze.
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
                  <div className="flex flex-col sm:flex-row gap-3 mt-3">
                    <a href="tel:0362801081" className="flex items-center justify-center space-x-2 bg-dental-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all text-sm">
                      <Phone size={16} />
                      <span>Chiama Ora</span>
                    </a>
                    <a href="https://www.miodottore.it/alessio-mario-rocca/dentista/besana-in-brianza?prevent-patient-app-banner=true&utm_source=google&utm_medium=gmb&utm_campaign=516181&utm_content=book_visit&hl=it-IT" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-dental-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all text-sm">
                      <Calendar size={16} />
                      <span>Prenota Online</span>
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
          
          <div className="rounded-xl overflow-hidden shadow-md h-96 relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.225775788553!2d9.279166!3d45.706945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bb93e1a78c91%3A0x76612ece5c70fd52!2sVia%20Dante%20Alighieri%2C%2023%2C%2020842%20Besana%20in%20Brianza%20MB!5e0!3m2!1sit!2sit!4v1626345679071!5m2!1sit!2sit" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen={false} loading="lazy" title="Mappa dello Studio Odontoiatrico Rocca" className="absolute inset-0"></iframe>
          </div>
        </div>
      </div>
    </section>;
};
export default LocationSection;