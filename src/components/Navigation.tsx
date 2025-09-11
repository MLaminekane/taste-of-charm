import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md shadow-elegant z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Le Gourmet
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="hover:text-primary transition-smooth">Accueil</a>
            <a href="#menu" className="hover:text-primary transition-smooth">Menu</a>
            <a href="#apropos" className="hover:text-primary transition-smooth">À Propos</a>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
            <Button variant="hero" size="sm">
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card shadow-elegant rounded-lg mt-2 p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </a>
              <a href="#menu" className="hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>
                Menu
              </a>
              <a href="#apropos" className="hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>
                À Propos
              </a>
              <a href="#contact" className="hover:text-primary transition-smooth" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <Button variant="hero" size="sm" className="w-full">
                Réserver
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;