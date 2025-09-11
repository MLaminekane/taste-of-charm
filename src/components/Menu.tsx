import { Card, CardContent } from "@/components/ui/card";
import pastaImage from "@/assets/pasta-dish.jpg";
import salmonImage from "@/assets/salmon-dish.jpg";

const Menu = () => {
  const menuItems = [
    {
      category: "Entrées",
      items: [
        {
          name: "Foie Gras Poêlé",
          description: "Foie gras poêlé aux figues confites et pain d'épices",
          price: "28€"
        },
        {
          name: "Tartare de Saint-Jacques",
          description: "Noix de Saint-Jacques fraîches, avocat et agrumes",
          price: "24€"
        }
      ]
    },
    {
      category: "Plats",
      items: [
        {
          name: "Pâtes aux Truffes",
          description: "Tagliatelles fraîches à la truffe noire et parmesan",
          price: "36€",
          image: pastaImage
        },
        {
          name: "Saumon Grillé",
          description: "Filet de saumon, légumes de saison et beurre blanc",
          price: "32€",
          image: salmonImage
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Soufflé au Chocolat",
          description: "Soufflé chaud au chocolat noir et glace vanille",
          price: "16€"
        },
        {
          name: "Tarte Tatin",
          description: "Tarte aux pommes caramélisées et crème fraîche",
          price: "14€"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Notre Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos créations culinaires élaborées avec des produits frais et de saison
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <Card key={category.category} className="bg-gradient-card shadow-elegant border-0 animate-fade-in" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      {item.image && (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                          />
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {item.name}
                        </h4>
                        <span className="text-lg font-bold text-primary ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;