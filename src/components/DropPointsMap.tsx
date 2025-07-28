
import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import StreetView from "./StreetView";

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

  // Sample drop points data - in a real app this would come from a database
  const dropPoints = [
    { name: "Recynest Center Algiers", position: { lat: 36.7538, lng: 3.0588 }, region: "Algiers" },
    { name: "GreenBox Collection", position: { lat: 36.7655, lng: 3.0444 }, region: "Algiers" },
    { name: "Oran Recycling Hub", position: { lat: 35.6969, lng: -0.6331 }, region: "Oran" },
    { name: "Constantine Center", position: { lat: 36.3650, lng: 6.6147 }, region: "Constantine" },
    { name: "Bay Recyclers", position: { lat: 36.9142, lng: 7.7661 }, region: "Annaba" },
    { name: "Batna Collection Point", position: { lat: 35.5569, lng: 6.1744 }, region: "Batna" },
    { name: "Sétif Green Center", position: { lat: 36.1898, lng: 5.4108 }, region: "Sétif" },
    { name: "Eco Hub Sidi Bel Abbès", position: { lat: 35.1892, lng: -0.6331 }, region: "Sidi Bel Abbès" },
  ];

  const selectedPoint = dropPoints.find(point => point.region === selectedRegion) || dropPoints[0];

  return (
    <section id="drop-points" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center gradient-text">
            Find Drop Points
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Locate the nearest Recynest collection point in your area and start recycling today.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xs mx-auto mb-8"
        >
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="glass-morphism border-recynest-medium">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent className="glass-morphism border-recynest-medium">
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden h-[500px] relative"
        >
          <StreetView position={selectedPoint.position} />
        </motion.div>
      </div>
    </section>
  );
};

export default DropPointsMap;
