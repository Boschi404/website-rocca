import { Phone, MapPin, Clock, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-dental-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-3">
            <div className="mb-6">
                <img src="/images/Logo.png" alt="ROCCA Studio Odontoiatrico" className="max-w-[300px] md:max-w-[400px] mx-auto lg:mx-0" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Servizi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-dental-aqua transition-colors">Odontoiatria Generale</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dental-aqua transition-colors">Implantologia</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dental-aqua transition-colors">Ortodonzia</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dental-aqua transition-colors">Estetica Dentale</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dental-aqua transition-colors">Igiene Dentale</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dental-aqua transition-colors">Chirurgia Orale</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-0.5" />
                <span className="text-gray-300">Via Dante Alighieri, 23<br />20842 Besana In Brianza MB</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:0362801081" className="text-gray-300 hover:text-dental-aqua transition-colors">0362 801081</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:info@studiorocca.it" className="text-gray-300 hover:text-dental-aqua transition-colors">info@studiorocca.it</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Studio Odontoiatrico Dott. Alessio Rocca. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Designed and Created By <a href="https://leonardoboschi.com" className="text-white hover:underline text-lg font-bold" target="_blank" rel="noopener noreferrer">Leonardo Boschi</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;