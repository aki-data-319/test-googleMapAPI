"use client";

declare const google: any;

import React, { useEffect, useRef } from "react";

interface MapViewProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

const defaultCenter = { lat: 35.6895, lng: 139.6917 };
const defaultZoom = 12;

export default function MapView({
  center = defaultCenter,
  zoom = defaultZoom,
}: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadMap() {
      if (mapRef.current && typeof google !== "undefined") {
        // ここで window. を付けずに google へ直接アクセス
        const { Map } = await google.maps.importLibrary("maps");
        new Map(mapRef.current, { center, zoom });
      }
    }
    loadMap();
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
        border: "1px solid #ccc",
      }}
    />
  );
}
