
declare interface Window {
  google: {
    maps: {
      Map: typeof google.maps.Map;
      Marker: typeof google.maps.Marker;
      InfoWindow: typeof google.maps.InfoWindow;
      LatLng: typeof google.maps.LatLng;
      LatLngBounds: typeof google.maps.LatLngBounds;
      MapTypeId: {
        ROADMAP: string;
        SATELLITE: string;
        HYBRID: string;
        TERRAIN: string;
      };
      event: {
        addListener: typeof google.maps.event.addListener;
        addListenerOnce: typeof google.maps.event.addListenerOnce;
        clearInstanceListeners: typeof google.maps.event.clearInstanceListeners;
        clearListeners: typeof google.maps.event.clearListeners;
        removeListener: typeof google.maps.event.removeListener;
      };
      Animation: {
        BOUNCE: number;
        DROP: number;
      };
      SymbolPath: {
        CIRCLE: number;
        FORWARD_CLOSED_ARROW: number;
        FORWARD_OPEN_ARROW: number;
        BACKWARD_CLOSED_ARROW: number;
        BACKWARD_OPEN_ARROW: number;
      };
      NavigationControl: typeof google.maps.NavigationControl;
      StreetViewPanorama: typeof google.maps.StreetViewPanorama;
      Geocoder: typeof google.maps.Geocoder;
      GeocoderStatus: {
        ERROR: string;
        INVALID_REQUEST: string;
        OK: string;
        OVER_QUERY_LIMIT: string;
        REQUEST_DENIED: string;
        UNKNOWN_ERROR: string;
        ZERO_RESULTS: string;
      };
      DirectionsService: typeof google.maps.DirectionsService;
      DirectionsRenderer: typeof google.maps.DirectionsRenderer;
      DirectionsStatus: {
        INVALID_REQUEST: string;
        MAX_WAYPOINTS_EXCEEDED: string;
        NOT_FOUND: string;
        OK: string;
        OVER_QUERY_LIMIT: string;
        REQUEST_DENIED: string;
        UNKNOWN_ERROR: string;
        ZERO_RESULTS: string;
      };
      TravelMode: {
        BICYCLING: string;
        DRIVING: string;
        TRANSIT: string;
        WALKING: string;
      };
      UnitSystem: {
        IMPERIAL: number;
        METRIC: number;
      };
    };
  };
}
