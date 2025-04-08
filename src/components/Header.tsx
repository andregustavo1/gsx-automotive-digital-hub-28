
import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Update header style based on scroll position
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // WhatsApp URL
  const whatsappUrl = "https://wa.me/5544999057697";
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-gsx-black shadow-md py-2' : 'bg-gsx-black/80 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#inicio" className="text-white font-rajdhani font-bold text-2xl flex items-center">
          <img 
            src="/lovable-uploads/31659cb8-2ea5-4fb9-b29e-d8f489fb37a9.png" 
            alt="GSX Diagnósticos Logo" 
            className="w-16 mr-3"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#inicio" 
            className={`text-white text-sm lg:text-base hover:text-gsx-red transition-colors ${
              activeSection === 'inicio' ? 'font-bold text-gsx-red' : ''
            }`}
          >
            Início
          </a>
          <a 
            href="#sobre" 
            className={`text-white text-sm lg:text-base hover:text-gsx-red transition-colors ${
              activeSection === 'sobre' ? 'font-bold text-gsx-red' : ''
            }`}
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            className={`text-white text-sm lg:text-base hover:text-gsx-red transition-colors ${
              activeSection === 'servicos' ? 'font-bold text-gsx-red' : ''
            }`}
          >
            Serviços
          </a>
          <a 
            href="#atendimento" 
            className={`text-white text-sm lg:text-base hover:text-gsx-red transition-colors ${
              activeSection === 'atendimento' ? 'font-bold text-gsx-red' : ''
            }`}
          >
            Atendimento
          </a>
          <a 
            href="#contato" 
            className={`text-white text-sm lg:text-base hover:text-gsx-red transition-colors ${
              activeSection === 'contato' ? 'font-bold text-gsx-red' : ''
            }`}
          >
            Contato
          </a>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-primary ml-4"
          >
            Agendar Diagnóstico
          </a>
        </nav>
        
        {/* Mobile nav - no hamburger menu as per requirements */}
        <nav className="md:hidden flex">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-primary text-sm py-2 px-4"
          >
            Agendar Diagnóstico
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
