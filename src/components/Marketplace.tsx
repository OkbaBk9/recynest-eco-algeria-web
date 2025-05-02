
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MaterialCardProps {
  title: string;
  quantity: string;
  price: string;
  location: string;
  isNew?: boolean;
}

const MaterialCard = ({ title, quantity, price, location, isNew }: MaterialCardProps) => (
  <Card className="glass-card hover:shadow-xl transition-shadow">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <CardTitle className="text-xl font-bold text-recynest-dark">{title}</CardTitle>
        {isNew && <Badge className="bg-recynest-accent text-white">New</Badge>}
      </div>
      <CardDescription>{location}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-muted-foreground">Quantity</p>
          <p className="font-semibold">{quantity}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Price</p>
          <p className="font-semibold">{price}</p>
        </div>
      </div>
      <Button className="w-full bg-recynest-medium hover:bg-recynest-medium/90 text-white">
        Contact Seller
      </Button>
    </CardContent>
  </Card>
);

interface SellerCardProps {
  name: string;
  rank: number;
  contribution: string;
  materials: string[];
  rating: number;
}

const SellerCard = ({ name, rank, contribution, materials, rating }: SellerCardProps) => (
  <Card className="glass-card hover:shadow-xl transition-shadow">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-recynest-medium to-recynest-dark flex items-center justify-center text-white font-bold">
            {rank}
          </div>
          <CardTitle className="text-lg">{name}</CardTitle>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-recynest-accent" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
      </div>
      <CardDescription>Contributed {contribution}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">Materials</p>
        <div className="flex flex-wrap gap-2">
          {materials.map((material, index) => (
            <Badge key={index} variant="outline" className="bg-recynest-light border-recynest-medium">
              {material}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Marketplace = () => {
  return (
    <section id="marketplace" className="section-padding bg-section-gradient">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center gradient-text">
          Recycling Marketplace
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Connect with buyers and sellers in our recycling ecosystem. Trade materials and contribute to a circular economy.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-recynest-dark">Available Materials</h3>
            <div className="grid grid-cols-1 gap-6">
              <MaterialCard
                title="PET Bottles (Clear)"
                quantity="500 kg"
                price="150 DZD/kg"
                location="Algiers, Algeria"
                isNew={true}
              />
              <MaterialCard
                title="Aluminum Cans"
                quantity="200 kg" 
                price="280 DZD/kg"
                location="Oran, Algeria"
              />
              <MaterialCard
                title="Cardboard"
                quantity="1000 kg"
                price="45 DZD/kg"
                location="Constantine, Algeria"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-recynest-dark">Top Recyclers</h3>
            <div className="grid grid-cols-1 gap-6">
              <SellerCard 
                name="EcoSolutions Algerie"
                rank={1}
                contribution="5.2 tons"
                materials={["Plastic", "Metal", "Paper"]}
                rating={5}
              />
              <SellerCard 
                name="Green Youth Initiative"
                rank={2}
                contribution="3.8 tons"
                materials={["Plastic", "Glass"]}
                rating={4}
              />
              <SellerCard 
                name="Annaba Recyclers Co-op"
                rank={3}
                contribution="2.7 tons"
                materials={["Metal", "Electronics"]}
                rating={4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
