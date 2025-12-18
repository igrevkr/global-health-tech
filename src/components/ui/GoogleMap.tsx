import { useEffect, useRef, useState } from "react";

interface GoogleMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom?: number;
  markerTitle?: string;
  className?: string;
}

declare global {
  interface Window {
    google: typeof google;
    initGoogleMap: () => void;
  }
}

export default function GoogleMap({
  apiKey,
  center,
  zoom = 15,
  markerTitle = "Location",
  className = "",
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if API key is provided
    if (!apiKey) {
      setError("Google Maps API key is required");
      return;
    }

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setMapLoaded(true);
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector(
      `script[src*="maps.googleapis.com"]`
    );
    if (existingScript) {
      // Wait for existing script to load
      const checkLoaded = setInterval(() => {
        if (window.google && window.google.maps) {
          setMapLoaded(true);
          clearInterval(checkLoaded);
        }
      }, 100);
      return () => clearInterval(checkLoaded);
    }

    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`;
    script.async = true;
    script.defer = true;

    window.initGoogleMap = () => {
      setMapLoaded(true);
    };

    script.onerror = () => {
      setError("Failed to load Google Maps");
    };

    document.head.appendChild(script);

    return () => {
      // Don't remove script on cleanup to prevent multiple loads
      delete window.initGoogleMap;
    };
  }, [apiKey]);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.google) return;

    try {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ saturation: -20 }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#2D9CDB" }, { lightness: 40 }],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      // Add marker
      new window.google.maps.Marker({
        position: center,
        map,
        title: markerTitle,
        animation: window.google.maps.Animation.DROP,
      });
    } catch (err) {
      setError("Failed to initialize map");
    }
  }, [mapLoaded, center, zoom, markerTitle]);

  if (error || !apiKey) {
    // Show a fallback world map when API key is missing
    return (
      <div
        className={`flex items-center justify-center bg-gray-50 ${className}`}
      >
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          {/* Background */}
          <rect width="1000" height="500" fill="#f3f4f6" />
          
          {/* Simplified World Map Paths */}
          <g fill="#9CA3AF" fillOpacity="0.6" stroke="#D1D5DB" strokeWidth="0.5">
            {/* North America */}
            <path d="M100,80 L120,70 L150,75 L180,85 L200,100 L210,120 L200,140 L180,155 L150,160 L120,150 L100,130 L90,110 Z" />
            <path d="M130,90 L140,85 L155,88 L165,95 L170,105 L165,115 L155,120 L140,118 L130,110 Z" />
            
            {/* South America */}
            <path d="M220,240 L235,235 L250,240 L260,255 L265,275 L270,300 L265,325 L255,345 L240,355 L225,350 L215,330 L210,305 L215,280 L220,260 Z" />
            
            {/* Europe */}
            <path d="M450,80 L470,75 L490,78 L510,85 L525,95 L530,110 L525,125 L510,135 L490,138 L470,133 L455,120 L448,100 Z" />
            <path d="M465,90 L475,88 L485,90 L492,97 L495,105 L490,113 L480,115 L470,112 L465,105 Z" />
            
            {/* Africa */}
            <path d="M480,150 L500,145 L520,150 L540,165 L555,185 L565,210 L570,240 L565,270 L555,295 L540,315 L520,325 L500,320 L485,305 L475,280 L470,250 L475,220 L480,190 Z" />
            
            {/* Asia */}
            <path d="M550,70 L580,65 L620,68 L660,75 L700,85 L740,95 L770,110 L790,130 L800,155 L795,180 L780,200 L750,215 L710,225 L670,228 L630,225 L590,215 L560,200 L540,180 L530,155 L535,130 L545,105 L550,85 Z" />
            <path d="M650,100 L670,98 L690,102 L705,110 L715,122 L718,138 L710,150 L695,158 L675,160 L655,155 L640,145 L635,130 L640,115 Z" />
            <path d="M720,140 L735,138 L750,142 L760,150 L765,162 L760,175 L748,183 L733,185 L720,180 L712,170 L710,158 Z" />
            
            {/* Australia */}
            <path d="M750,320 L770,318 L790,322 L810,330 L825,342 L830,358 L825,375 L810,388 L790,393 L770,390 L755,380 L745,365 L743,348 Z" />
          </g>
          
          {/* Seoul Marker */}
          <g transform="translate(720, 140)">
            <circle r="8" fill="#0A2540" />
            <circle r="12" fill="none" stroke="#0A2540" strokeWidth="2" opacity="0.5">
              <animate attributeName="r" from="8" to="20" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>
    );
  }

  if (!mapLoaded) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-8 h-8 bg-teal/30 rounded-full mb-2"></div>
          <p className="text-gray-500 text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className={className} />;
}
