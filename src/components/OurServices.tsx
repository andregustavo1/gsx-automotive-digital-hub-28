
import { useEffect, useRef } from 'react';

const OurServices = () => {
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
              }, i * 150);
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

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      ),
      title: "Diagnóstico de Módulos de Airbag",
      description: "Verificação e reprogramação de sistemas de segurança com equipamentos específicos"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
          <circle cx="12" cy="12" r="10" />
          <polyline points="8 12 12 16 16 12" />
          <line x1="12" x2="12" y1="8" y2="16" />
        </svg>
      ),
      title: "Programação de ABS",
      description: "Configuração e ajuste de sistemas de freios para maior segurança veicular"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
      title: "Injeção Eletrônica",
      description: "Diagnóstico e correção de falhas em sistemas de injeção para melhor desempenho"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      ),
      title: "Calibração de Sistemas ADAS",
      description: "Ajuste de sistemas avançados de assistência ao condutor"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
        </svg>
      ),
      title: "Direção Elétrica",
      description: "Diagnóstico e programação de módulos de direção para maior controle"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
          <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
      ),
      title: "Sensores de Estacionamento",
      description: "Instalação e programação de sensores para maior comodidade"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red">
          <path d="M6.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-2.3" />
          <rect x="9" y="14" width="6" height="6" rx="3" />
        </svg>
      ),
      title: "Veículos Híbridos e Elétricos",
      description: "Diagnóstico especializado em novos sistemas propulsores e baterias"
    },
  ];

  return (
    <section 
      id="servicos" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title appear-animation inline-block mx-auto">Serviços Especializados</h2>
          <p className="section-subtitle appear-animation">Soluções completas em eletrônica automotiva</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all appear-animation"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="font-rajdhani font-bold text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center appear-animation">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Agendar Serviço
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
