import React from 'react';
import { Button } from './ui/button';

const StreetView = ({ position }: { position: { lat: number; lng: number } }) => {
  const openStreetView = () => {
    window.open(`https://www.google.com/maps?q&layer=c&cbll=${position.lat},${position.lng}`, '_blank');
  };

  return (
    <div className="relative">
      <img src="/dummy-map.png" alt="Dummy map" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Button onClick={openStreetView}>Street View</Button>
      </div>
    </div>
  );
};

export default StreetView;
