
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5544999057697";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gsx-black overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gsx-black to-gsx-black/80 z-10"></div>
      
      {/* Background image - using a placeholder that represents automotive diagnostic equipment */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504222490429-cfcb0f13e424?q=80&w=1470&auto=format&fit=crop')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="max-w-3xl opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-rajdhani font-bold mb-6">
            Diagnóstico Automotivo Especializado
          </h1>
          <p className="text-xl md:text-2xl text-gsx-gray mb-8 opacity-0 animate-fade-in-delay-1">
            Soluções em Eletrônica Automotiva para Oficinas e Particulares
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-2">
            <a 
              href="#servicos"
              className="btn btn-primary"
            >
              Conheça Nossos Serviços
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              Agendar Diagnóstico
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#sobre"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-0 animate-fade-in-delay-3"
      >
        <span className="text-sm mb-2">Saiba mais</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
