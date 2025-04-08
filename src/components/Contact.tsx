
import { useEffect, useRef } from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.appear-animation');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.classList.remove('opacity-0');
              }, i * 200);
            });
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const whatsappUrl = "https://wa.me/5544999057697";
  const instagramUrl = "https://www.instagram.com/gsxdiagnosticosmaringa";
  const googleMapsUrl = "https://maps.google.com/?q=Av. Dr. Alexandre Rasgulaeff, 5486 - Jardim Imperial II, Maringá - PR, 87023-033";

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className="section-padding bg-gray-100"
    >
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title appear-animation inline-block mx-auto">Entre em Contato</h2>
          <p className="section-subtitle appear-animation">Estamos prontos para resolver seu problema automotivo</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-8 text-center transition-all hover:-translate-y-1 hover:shadow-md appear-animation"
          >
            <Phone size={36} className="text-gsx-red mx-auto mb-4" />
            <h3 className="font-rajdhani font-bold text-xl mb-2">WhatsApp</h3>
            <p className="text-gray-700">(44) 99905-7697</p>
          </a>
          
          {/* Instagram */}
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-8 text-center transition-all hover:-translate-y-1 hover:shadow-md appear-animation"
          >
            <Instagram size={36} className="text-gsx-red mx-auto mb-4" />
            <h3 className="font-rajdhani font-bold text-xl mb-2">Instagram</h3>
            <p className="text-gray-700">@gsxdiagnosticosmaringa</p>
          </a>
          
          {/* Location */}
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-sm p-8 text-center transition-all hover:-translate-y-1 hover:shadow-md appear-animation"
          >
            <MapPin size={36} className="text-gsx-red mx-auto mb-4" />
            <h3 className="font-rajdhani font-bold text-xl mb-2">Localização</h3>
            <p className="text-gray-700">Av. Dr. Alexandre Rasgulaeff, 5486 - Jardim Imperial II, Maringá - PR</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
