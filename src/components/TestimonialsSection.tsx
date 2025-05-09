import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Maria Cristina Redaelli",
    content: "Consigliatissimo. Staff super professionale che ti fa sentire a tuo agio, in ambiente ricercato e rilassante.",
    rating: 5
  },
  {
    name: "Lansel",
    content: "Studio dentistico eccellente! Personale cortese e professionale, ambiente pulito e moderno. Trattamenti eseguiti con precisione e senza stress. Consigliatissimo!",
    rating: 5
  },
  {
    name: "Annalisa Riva",
    content: "Super consigliato! Ottima accoglienza e grande attenzione alla cura del paziente.",
    rating: 5
  },
  {
    name: "Leonardo D'apote",
    content: "Ottimo studio , il dottore un grande professionista molto professionale lo consiglio.",
    rating: 5
  },
  {
    name: "Gabriele Busato",
    content: "Personale cordiale e gentile, massima competenza e professionalità.",
    rating: 5
  },
  {
    name: "Melissa Matarazzo",
    content: "Professionali e competenti, lo consiglio vivamente!",
    rating: 5
  },
  {
    name: "Palma Martucci",
    content: "Tanta professionalità in un ambiente molto sofisticato.",
    rating: 5
  },
  {
    name: "E. Vi",
    content: "Studio dentistico in centro a Besana vicino alla stazione, studio molto pulito, per me molto importante! Personale che ti mette a tuo agio, molto attento alla cura. Ormai da anni è il mio dentista",
    rating: 5
  },
  {
    name: "Master Mind",
    content: "Professionalità ad alti livelli.",
    rating: 5
  },
  {
    name: "Rosario De Angelis",
    content: "Ho avuto un'esperienza eccellente presso lo Studio Odontoiatrico del Dott. Alessio Rocca. Fin dal primo momento, mi sono sentito accolto con professionalità e cortesia.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-olive/10 text-dental-olive px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonianze
          </span>
          <h2 className="section-title">
            Cosa Dicono i Nostri Pazienti
          </h2>
          <p className="section-subtitle">
            La soddisfazione dei nostri pazienti è la nostra migliore referenza. Ecco alcune delle loro esperienze con il nostro studio.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
                    <div className="flex flex-col h-full">
                      <div>
                        <h4 className="text-lg font-semibold text-dental-olive mb-2 text-center">
                          {testimonial.name}
                        </h4>
                        <div className="flex justify-center mb-2">
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
                        <blockquote className="text-gray-600 italic mb-4 text-center">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
