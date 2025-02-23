import React from "react";
import Script from "next/script";

export default function Page() {
  return (
    <main>
      {/* 1) initMap 関数をグローバルスコープに定義 */}
      <Script id="init-map" strategy="beforeInteractive">
        {`
          window.initMap = function() {
            new google.maps.Map(document.getElementById("map"), {
              center: { lat: -34.397, lng: 150.644 },
              zoom: 8,
            });
          }
        `}
      </Script>

      {/* 2) Google Maps スクリプトを読み込み */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
        }&callback=initMap&loading=async`}
        strategy="beforeInteractive"
      />

      <h1>Google Map Test</h1>

      {/* 3) 地図を表示する要素 */}
      <div
        id="map"
        style={{
          width: "600px",
          height: "400px",
          border: "1px solid #ccc",
        }}
      />
    </main>
  );
}

