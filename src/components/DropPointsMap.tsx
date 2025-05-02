
import React, { useState, useEffect, useRef } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const DropPointsMap = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [mapApiKey, setMapApiKey] = useState("");
  const [showKeyInput, setShowKeyInput] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  
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

  const loadGoogleMapsScript = (apiKey: string) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initializeMap;
    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (!mapRef.current) return;

    const mapOptions = {
      center: { lat: 28.0339, lng: 1.6596 }, // Algeria center
      zoom: 5,
      styles: [
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{ "color": "#c9b2a6" }, { "lightness": 17 }, { "weight": 1.2 }]
        }
      ]
    };

    googleMapRef.current = new google.maps.Map(mapRef.current, mapOptions);
    
    // Add markers for all regions initially
    addMarkers();
  };

  const addMarkers = () => {
    if (!googleMapRef.current) return;

    // Filter drop points based on selected region
    const filteredPoints = selectedRegion 
      ? dropPoints.filter(point => point.region === selectedRegion)
      : dropPoints;

    // If a region is selected, zoom to it
    if (selectedRegion && filteredPoints.length > 0) {
      googleMapRef.current.setZoom(11);
      googleMapRef.current.setCenter(filteredPoints[0].position);
    } else {
      googleMapRef.current.setZoom(5);
      googleMapRef.current.setCenter({ lat: 28.0339, lng: 1.6596 });
    }

    // Add markers for filtered points
    filteredPoints.forEach(point => {
      const marker = new google.maps.Marker({
        position: point.position,
        map: googleMapRef.current,
        title: point.name,
        animation: google.maps.Animation.DROP,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: '#34D399',
          fillOpacity: 0.9,
          strokeWeight: 2,
          strokeColor: '#FFFFFF',
          scale: 8
        }
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-semibold">${point.name}</h3>
            <p class="text-sm">Recycle plastic, paper, and electronics</p>
            <p class="text-sm">Open 9AM - 5PM</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(googleMapRef.current, marker);
      });
    });
  };

  useEffect(() => {
    if (mapApiKey && showKeyInput) {
      setShowKeyInput(false);
      loadGoogleMapsScript(mapApiKey);
    }
  }, [mapApiKey]);

  useEffect(() => {
    if (googleMapRef.current) {
      // Clear previous markers
      googleMapRef.current.setOptions({ zoom: 5 });
      addMarkers();
    }
  }, [selectedRegion]);

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).elements.namedItem('apiKey') as HTMLInputElement;
    if (input?.value) {
      setMapApiKey(input.value);
    }
  };

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
          {showKeyInput ? (
            <div className="absolute inset-0 bg-gradient-to-br from-recynest-light to-recynest-medium/30 flex items-center justify-center">
              <div className="text-center p-6 glass-morphism rounded-xl max-w-md w-full">
                <MapPin className="w-16 h-16 text-recynest-dark mx-auto mb-4" />
                <p className="text-recynest-dark font-semibold mb-4">Google Maps API Key Required</p>
                <form onSubmit={handleApiKeySubmit}>
                  <input 
                    name="apiKey"
                    type="text" 
                    placeholder="Enter your Google Maps API Key" 
                    className="w-full p-2 mb-4 rounded-md border border-recynest-medium/30 bg-white/70"
                  />
                  <button 
                    type="submit"
                    className="bg-recynest-dark text-white px-4 py-2 rounded-md hover:bg-recynest-dark/80 transition-colors"
                  >
                    Load Map
                  </button>
                </form>
                <p className="text-sm text-muted-foreground mt-4">
                  Get a key from the <a href="https://console.cloud.google.com/google/maps-apis/overview" target="_blank" rel="noopener noreferrer" className="text-recynest-dark underline">Google Cloud Console</a>
                </p>
              </div>
            </div>
          ) : (
            <div ref={mapRef} className="h-full w-full" />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DropPointsMap;
