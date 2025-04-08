
import { useEffect, useRef } from 'react';

const MobileService = () => {
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

  return (
    <section 
      id="atendimento" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title appear-animation">Atendimento Onde Você Estiver</h2>
            <p className="text-lg mb-6 appear-animation">
              Levamos nossa tecnologia até sua oficina ou residência
            </p>
            
            <p className="mb-8 appear-animation">
              A GSX Diagnósticos Maringá oferece atendimento móvel em toda Maringá e região, levando até você os equipamentos e a expertise necessária para diagnóstico e programação de módulos automotivos. Uma solução completa que economiza seu tempo e proporciona comodidade.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-6 mb-8 appear-animation">
              <h3 className="font-rajdhani font-bold text-xl mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red mr-2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
                Área de Cobertura
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red mr-2">
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                  </svg>
                  <span>Maringá</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red mr-2">
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                  </svg>
                  <span>Sarandi</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red mr-2">
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                  </svg>
                  <span>Paiçandu</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red mr-2">
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                  </svg>
                  <span>Mandaguaçu</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red mr-2">
                    <path d="m9 12 2 2 4-4" />
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                  </svg>
                  <span>Outras cidades sob consulta</span>
                </li>
              </ul>
            </div>
            
            <div className="appear-animation">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Solicitar Atendimento Móvel
              </a>
            </div>
          </div>
          
          <div className="appear-animation">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1469&auto=format&fit=crop" 
                alt="Atendimento móvel da GSX Diagnósticos" 
                className="rounded-lg shadow-lg object-cover w-full h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gsx-black/70 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-gsx-red text-white px-6 py-4 rounded inline-block">
                  <h3 className="font-rajdhani font-bold text-xl mb-1">Atendimento Móvel</h3>
                  <p className="text-sm">Comodidade e rapidez para seu veículo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileService;
