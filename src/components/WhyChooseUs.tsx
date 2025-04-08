
import { useEffect, useRef } from 'react';

const WhyChooseUs = () => {
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

  return (
    <section 
      id="porque-nos-escolher" 
      ref={sectionRef}
      className="section-padding bg-gsx-black text-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title appear-animation inline-block text-white after:bg-gsx-red mx-auto">Por Que Nos Escolher?</h2>
          <p className="section-subtitle appear-animation">Diagnóstico automotivo com precisão e qualidade</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-900 border border-gsx-red/30 rounded-lg p-6 card-hover appear-animation">
            <div className="bg-gsx-red rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="font-rajdhani font-bold text-xl mb-3 text-center">Tecnologia Avançada</h3>
            <p className="text-sm text-gray-300 text-center">Scanners e equipamentos de última geração para diagnósticos precisos</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gray-900 border border-gsx-red/30 rounded-lg p-6 card-hover appear-animation">
            <div className="bg-gsx-red rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <h3 className="font-rajdhani font-bold text-xl mb-3 text-center">Atendimento Móvel</h3>
            <p className="text-sm text-gray-300 text-center">Vamos até você, onde quer que esteja em Maringá e região</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gray-900 border border-gsx-red/30 rounded-lg p-6 card-hover appear-animation">
            <div className="bg-gsx-red rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                <path d="M7 7h.01" />
              </svg>
            </div>
            <h3 className="font-rajdhani font-bold text-xl mb-3 text-center">Especialistas em Eletrônica</h3>
            <p className="text-sm text-gray-300 text-center">Know-how em sistemas complexos de veículos modernos</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-gray-900 border border-gsx-red/30 rounded-lg p-6 card-hover appear-animation">
            <div className="bg-gsx-red rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
                <polyline points="8 10 12 14 16 10" />
              </svg>
            </div>
            <h3 className="font-rajdhani font-bold text-xl mb-3 text-center">Parceiro de Seguradoras</h3>
            <p className="text-sm text-gray-300 text-center">Emissão de notas fiscais diretas para companhias de seguros</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
