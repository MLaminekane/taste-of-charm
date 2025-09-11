import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Notre Carte
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Découvrez nos créations culinaires élaborées avec passion et des produits de saison
            </p>
          </div>
        </div>
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;