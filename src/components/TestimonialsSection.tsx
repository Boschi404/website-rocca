
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: "Marco Rossi",
    role: "Paziente dal 2019",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Da quando ho iniziato a farmi seguire dal Dr. Rocca, ho finalmente superato la mia paura del dentista. Professionalità e gentilezza contraddistinguono tutto lo staff.",
    rating: 5
  },
  {
    name: "Laura Bianchi",
    role: "Paziente dal 2020",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Grazie all'implantologia del Dott. Rocca ho ritrovato il sorriso. Intervento indolore e risultato impeccabile. Consiglio vivamente questo studio a chiunque.",
    rating: 5
  },
  {
    name: "Alessandro Verdi",
    role: "Paziente dal 2018",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "Esperienza eccellente con tutta l'equipe. Cure di alta qualità, strumentazione all'avanguardia e ambiente sempre pulito e accogliente.",
    rating: 5
  },
  {
    name: "Giulia Neri",
    role: "Paziente dal 2021",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    content: "Ho completato da poco il trattamento di ortodonzia e sono estremamente soddisfatta. Il Dr. Rocca ha seguito ogni fase con grande attenzione ai dettagli.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-teal/10 text-dental-teal px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonianze
          </span>
          <h2 className="section-title">
            Cosa Dicono i Nostri Pazienti
          </h2>
          <p className="section-subtitle">
            La soddisfazione dei nostri pazienti è la nostra migliore referenza. Ecco alcune delle loro esperienze con il nostro studio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 right-0 bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-all duration-500 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20 pointer-events-none'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-dental-teal"
                    />
                  </div>
                  <div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-600 italic mb-4">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <h4 className="font-semibold text-dental-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-dental-teal scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
