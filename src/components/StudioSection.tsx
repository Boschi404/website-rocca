import React, { useRef, useEffect } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const studioImages = [{
  src: "/images/foto-rocca-1.jpg",
  alt: "Studio dentistico - Consultazione"
}, {
  src: "/images/foto-rocca-2.jpg",
  alt: "Studio dentistico - Sala operativa"
}, {
  src: "/images/foto-rocca-3.jpg",
  alt: "Studio dentistico - Strumentazione"
}, {
  src: "/images/foto-rocca-4.jpg",
  alt: "Studio dentistico - Vista sala"
}, {
  src: "/images/foto-rocca-5.jpg",
  alt: "Studio dentistico - Dettaglio"
}, {
  src: "/images/foto-rocca-6.jpg",
  alt: "Studio dentistico - Ambiente"
}, {
  src: "/images/foto-rocca-7.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-8.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-9.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-10.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-11.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-12.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-13.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-14.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-15.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-16.jpg",
  alt: "Studio dentistico - Ingresso"
}, {
  src: "/images/foto-rocca-17.jpg",
  alt: "Studio dentistico - Ingresso"
}];
const StudioSection = () => {
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
  return <section id="studio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-olive/10 text-dental-olive px-4 py-2 rounded-full text-sm font-medium mb-4">
            Il Nostro Studio
          </span>
          <h2 className="section-title text-3xl font-bold text-dental-blue">
            Un Ambiente Moderno e Accogliente
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Il nostro studio dentistico è stato progettato pensando al comfort dei nostri pazienti. 
            Disponiamo di attrezzature all'avanguardia e ambienti confortevoli per garantirvi la migliore esperienza possibile.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {studioImages.map((image, index) => <div key={index} className="group overflow-hidden rounded-xl">
                <AspectRatio ratio={4 / 3} className="bg-muted">
                  <img src={image.src} alt={image.alt} className="w-full h-full transition-all duration-300 group-hover:scale-105 shadow-md object-cover" />
                </AspectRatio>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default StudioSection;