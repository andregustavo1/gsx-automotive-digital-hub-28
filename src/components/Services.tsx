
import React from 'react';

const Services = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Serviços Especializados</h2>
        <p className="text-xl text-gray-600">Soluções completas em eletrônica automotiva</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: "!",
            title: "Diagnóstico de Módulos de Airbag",
            description: "Verificação e reprogramação de sistemas de segurança com equipamentos específicos"
          },
          {
            icon: "↓",
            title: "Programação de ABS",
            description: "Configuração e ajuste de sistemas de freios para maior segurança veicular"
          },
          {
            icon: "camera",
            title: "Injeção Eletrônica",
            description: "Diagnóstico e correção de falhas em sistemas de injeção para melhor desempenho"
          },
          {
            icon: "mic",
            title: "Calibração de Sistemas ADAS",
            description: "Ajuste de sistemas avançados de assistência ao condutor"
          },
          {
            icon: "(())",
            title: "Direção Elétrica",
            description: "Diagnóstico e programação de módulos de direção para maior controle"
          },
          {
            icon: "(())",
            title: "Sensores de Estacionamento",
            description: "Instalação e programação de sensores para maior comodidade"
          }
        ].map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-transparent text-transparent rounded-full flex items-center justify-center text-2xl">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
