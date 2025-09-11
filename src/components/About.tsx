import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                Notre Histoire
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Depuis 1985, Le Gourmet perpétue une tradition culinaire d'excellence. 
                Notre chef étoilé Marie Dubois et son équipe passionnée créent une cuisine 
                française contemporaine qui honore les produits de saison.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque plat raconte une histoire, chaque saveur évoque une émotion. 
                Nous vous invitons à partager notre passion pour l'art culinaire dans 
                un cadre élégant et chaleureux.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="text-center p-4 shadow-warm border-0 bg-gradient-card">
                <CardContent className="p-2">
                  <ChefHat className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm">Chef Étoilé</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4 shadow-warm border-0 bg-gradient-card">
                <CardContent className="p-2">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm">Prix Gourmet 2023</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4 shadow-warm border-0 bg-gradient-card">
                <CardContent className="p-2">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-sm">Passion Culinaire</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image/Quote Section */}
          <div className="relative">
            <Card className="bg-gradient-card shadow-elegant border-0 p-8">
              <CardContent className="p-0">
                <blockquote className="text-xl italic text-muted-foreground mb-6 leading-relaxed">
                  "La cuisine est un art qui se partage. Chaque plat que nous servons 
                  porte en lui notre amour du métier et notre respect pour les producteurs 
                  qui nous font confiance."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                    <ChefHat className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Marie Dubois</p>
                    <p className="text-sm text-muted-foreground">Chef Exécutif & Propriétaire</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;