import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Phone } from "lucide-react";

const ReservationPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Réservation
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Réservez votre table pour une expérience gastronomique inoubliable
            </p>
          </div>
        </div>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Reservation Form */}
              <Card className="bg-gradient-card shadow-elegant border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Réserver votre table</h2>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Nom</label>
                        <Input placeholder="Votre nom" className="bg-background/50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Prénom</label>
                        <Input placeholder="Votre prénom" className="bg-background/50" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input type="email" placeholder="votre@email.com" className="bg-background/50" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Téléphone</label>
                      <Input type="tel" placeholder="+33 1 23 45 67 89" className="bg-background/50" />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Date souhaitée</label>
                        <Input type="date" className="bg-background/50" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Heure</label>
                        <Input type="time" className="bg-background/50" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nombre de personnes</label>
                      <Input type="number" placeholder="2" min="1" max="12" className="bg-background/50" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Demandes spéciales</label>
                      <Textarea 
                        placeholder="Allergies, préférences alimentaires, occasion spéciale..." 
                        className="bg-background/50 min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Confirmer ma réservation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Information */}
              <div className="space-y-6">
                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Calendar className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Horaires d'ouverture</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Mardi - Jeudi: 19h00 - 23h00</p>
                          <p>Vendredi - Samedi: 19h00 - 00h00</p>
                          <p>Dimanche: 12h00 - 15h00 & 19h00 - 23h00</p>
                          <p className="text-destructive font-medium">Lundi: Fermé</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Réservation par téléphone</h3>
                        <p className="text-muted-foreground mb-2">Appelez-nous directement pour réserver</p>
                        <p className="text-lg font-semibold text-primary">+33 1 23 45 67 89</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Users className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Groupes & Événements</h3>
                        <p className="text-muted-foreground mb-2">Pour les groupes de plus de 8 personnes ou événements privés</p>
                        <p className="text-sm text-muted-foreground">Contactez-nous directement pour organiser votre événement</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-elegant border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Politique d'annulation</h3>
                        <p className="text-sm text-muted-foreground">
                          Annulation gratuite jusqu'à 24h avant la réservation. 
                          Pour les groupes de plus de 6 personnes, merci de nous prévenir 48h à l'avance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReservationPage;