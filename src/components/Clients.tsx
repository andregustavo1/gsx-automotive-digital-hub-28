
import { useEffect, useRef } from 'react';

const Clients = () => {
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
      id="clientes" 
      ref={sectionRef}
      className="section-padding bg-gsx-black text-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title appear-animation inline-block text-white after:bg-gsx-red mx-auto">Quem Confia em Nosso Trabalho</h2>
          <p className="section-subtitle appear-animation">Parcerias com as principais empresas do setor</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index}
              className="appear-animation bg-gray-900 h-28 rounded-lg flex items-center justify-center p-4"
            >
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <span className="ml-3 font-rajdhani font-bold text-lg">Cliente {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 appear-animation bg-gsx-red/20 px-6 py-3 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            <span className="text-lg">Atendemos as principais oficinas de funilaria e pintura de Maringá e seguradoras de todo o Brasil.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
