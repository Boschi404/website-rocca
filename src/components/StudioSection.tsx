import React, { useRef, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const studioImages = [{
  src: "public/lovable-uploads/8e13033b-6345-44da-b5cb-c483214f1926.png",
  alt: "Studio dentistico - Consultazione con paziente"
}, {
  src: "public/lovable-uploads/c9b4e27c-4368-4b3f-9441-cd242552287e.png",
  alt: "Studio dentistico - Sala operativa"
}, {
  src: "public/lovable-uploads/c9b4e27c-4368-4b3f-9441-cd242552287e.png",
  alt: "Studio dentistico - Strumentazione"
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
          <h2 className="section-title text-3xl font-bold">
            Un Ambiente Moderno e Accogliente
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Il nostro studio dentistico è stato progettato pensando al comfort dei nostri pazienti. 
            Disponiamo di attrezzature all'avanguardia e ambienti confortevoli per garantirvi la migliore esperienza possibile.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent>
              {studioImages.map((image, index) => <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl aspect-video">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default StudioSection;