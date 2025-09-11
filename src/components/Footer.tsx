import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Le Gourmet
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Une expérience culinaire d'exception depuis 1985. 
              Venez découvrir notre passion pour la gastronomie française.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="hover:text-primary transition-smooth">Accueil</a></li>
              <li><a href="#menu" className="hover:text-primary transition-smooth">Menu</a></li>
              <li><a href="#apropos" className="hover:text-primary transition-smooth">À Propos</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>123 Rue de la Gastronomie</p>
              <p>75001 Paris, France</p>
              <p>+33 1 23 45 67 89</p>
              <p>contact@legourmet-paris.fr</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm flex items-center justify-center">
            Fait avec <Heart className="w-4 h-4 text-primary mx-2 fill-current" /> par Le Gourmet © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;