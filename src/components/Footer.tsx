
import { ArrowUp, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const instagramUrl = "https://www.instagram.com/gsxdiagnosticosmaringa";
  const whatsappUrl = "https://wa.me/5544999057697";

  return (
    <footer className="bg-gsx-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-rajdhani font-bold mb-2">GSX Diagnósticos Maringá</h2>
            <p className="text-sm text-gray-400">Diagnóstico e Programação Automotiva Especializada</p>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-gray-300 hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#atendimento" className="text-gray-300 hover:text-white transition-colors">
              Atendimento
            </a>
            <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
        
        <div className="h-px bg-gray-800 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 GSX Diagnósticos Maringá. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gsx-red transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gsx-red transition-colors"
            >
              <Instagram size={18} />
            </a>
            
            <button 
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-gsx-red flex items-center justify-center hover:bg-gsx-redLight transition-colors ml-2"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
