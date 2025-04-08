
import { useEffect, useRef, useState } from 'react';

const Technology = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Simulated technology equipment data
  const equipments = [
    {
      name: "Scanner Automotivo Avançado",
      description: "Análise completa de sistemas eletrônicos, compatível com mais de 80 marcas de veículos.",
      features: ["Diagnóstico rápido", "Gráficos em tempo real", "Programação de módulos"],
      image: "https://images.unsplash.com/photo-1611274294270-84bbf887afd7?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Equipamento de Calibração ADAS",
      description: "Calibração precisa de sensores e câmeras para sistemas avançados de assistência ao condutor.",
      features: ["Alinhamento de câmeras", "Ajuste de sensores de radar", "Configuração de sistema de frenagem"],
      image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?q=80&w=1374&auto=format&fit=crop"
    },
    {
      name: "Programador de ECU",
      description: "Ferramenta para programação e reprogramação de módulos eletrônicos de controle.",
      features: ["Suporte para múltiplas ECUs", "Programação de imobilizadores", "Atualização de firmware"],
      image: "https://images.unsplash.com/photo-1563057558-98e9121d371b?q=80&w=1471&auto=format&fit=crop"
    }
  ];

  const whatsappUrl = "https://wa.me/5544999057697";

  return (
    <section 
      id="tecnologia" 
      ref={sectionRef}
      className="section-padding bg-gray-100"
    >
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title appear-animation inline-block mx-auto">Tecnologia de Ponta</h2>
          <p className="section-subtitle appear-animation">Equipamentos avançados para diagnósticos precisos</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="appear-animation order-2 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-rajdhani font-bold text-2xl mb-4 text-gsx-black">
                {equipments[activeIndex].name}
              </h3>
              <p className="mb-6 text-gray-700">
                {equipments[activeIndex].description}
              </p>
              
              <h4 className="font-rajdhani font-semibold mb-3 text-gsx-red">Principais funcionalidades:</h4>
              <ul className="space-y-2 mb-6">
                {equipments[activeIndex].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gsx-red mr-2">
                      <path d="m9 12 2 2 4-4" />
                      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-3 justify-center mt-8">
                {equipments.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? 'bg-gsx-red w-6' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="appear-animation order-1 lg:order-2">
            <div className="relative">
              <img 
                src={equipments[activeIndex].image} 
                alt={equipments[activeIndex].name} 
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gsx-black/70 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center appear-animation">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Conhecer Nosso Arsenal Técnico
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technology;
