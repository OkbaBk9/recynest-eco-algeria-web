
import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DropPointsMap = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [
    "Algiers",
    "Oran",
    "Constantine",
    "Annaba",
    "Batna",
    "Sétif",
    "Sidi Bel Abbès",
  ];

  return (
    <section id="drop-points" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center gradient-text">
          Find Drop Points
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Locate the nearest Recynest collection point in your area and start recycling today.
        </p>

        <div className="max-w-xs mx-auto mb-8">
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="bg-white/80 border-recynest-medium">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden h-[500px] relative">
          {/* Map placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-recynest-light to-recynest-medium/30 flex items-center justify-center">
            <div className="text-center p-6">
              <svg className="w-16 h-16 text-recynest-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p className="text-recynest-dark font-semibold">Interactive map to be implemented</p>
              <p className="text-sm text-muted-foreground mt-1">
                This will show all Recynest drop points across Algeria
              </p>
            </div>
          </div>

          {/* Map pins placeholder */}
          <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-recynest-dark rounded-full pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-recynest-dark rounded-full pulse"></div>
          <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-recynest-dark rounded-full pulse"></div>
          <div className="absolute top-1/3 left-2/3 w-4 h-4 bg-recynest-dark rounded-full pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default DropPointsMap;
