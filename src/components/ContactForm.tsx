
import { useState, useRef, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-dental-teal/10 text-dental-teal px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contattaci
          </span>
          <h2 className="section-title">
            Prenota un Appuntamento
          </h2>
          <p className="section-subtitle">
            Compila il modulo sottostante per prenotare una visita o richiedere maggiori informazioni sui nostri servizi.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-dental-navy">Richiesta Inviata!</h3>
                <p className="text-gray-600">
                  Grazie per averci contattato. Ti risponderemo al più presto.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 inline-block text-dental-teal font-medium"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome e Cognome*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-teal/50 focus:border-dental-teal"
                      placeholder="Inserisci il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-teal/50 focus:border-dental-teal"
                      placeholder="Inserisci la tua email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefono*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-teal/50 focus:border-dental-teal"
                      placeholder="Inserisci il tuo numero"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Servizio Richiesto
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-teal/50 focus:border-dental-teal"
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="Prima visita">Prima visita</option>
                      <option value="Controllo">Controllo</option>
                      <option value="Igiene dentale">Igiene dentale</option>
                      <option value="Implantologia">Implantologia</option>
                      <option value="Ortodonzia">Ortodonzia</option>
                      <option value="Estetica dentale">Estetica dentale</option>
                      <option value="Altro">Altro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dental-teal/50 focus:border-dental-teal"
                    placeholder="Scrivi qui il tuo messaggio o la tua richiesta..."
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    id="privacy"
                    type="checkbox"
                    required
                    className="h-5 w-5 text-dental-teal border-gray-300 rounded focus:ring-dental-teal/50 mt-1"
                  />
                  <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
                    Accetto la <a href="#" className="text-dental-teal hover:underline">Privacy Policy</a> e autorizzo il trattamento dei miei dati personali*
                  </label>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Invio in corso...</span>
                      </span>
                    ) : 'Invia Richiesta'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
