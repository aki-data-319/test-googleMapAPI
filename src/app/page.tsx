"use client";


// app/page.tsx または src/app/page.tsx

// TypeScript にグローバル変数 'google' が存在することを宣言
declare const google: any;

import React, { useEffect } from "react";
import Script from "next/script";

export default function Page() {
  useEffect(() => {
    async function initMap() {
      // Dynamic Library Import で maps ライブラリを読み込み
      const { Map } = await google.maps.importLibrary("maps");
      // 指定した要素に地図を初期化
      new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
    initMap();
  }, []);

  return (
    <main>
      {/* ブートストラップローダのスクリプト */}
      <Script id="google-maps-bootstrap" strategy="beforeInteractive">
        {`
          (g => {
            var h, a, k, p = "The Google Maps JavaScript API",
                c = "google", l = "importLibrary", q = "__ib__",
                m = document, b = window;
            b = b[c] || (b[c] = {});
            var d = b.maps || (b.maps = {}),
                r = new Set, e = new URLSearchParams,
                u = () => h || (h = new Promise(async (f, n) => {
                  await (a = m.createElement("script"));
                  e.set("libraries", [...r] + "");
                  for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
                  e.set("callback", c + ".maps." + q);
                  a.src = \`https://maps.\${c}apis.com/maps/api/js?\` + e;
                  d[q] = f;
                  a.onerror = () => h = n(Error(p + " could not load."));
                  a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                  m.head.append(a);
                }));
            d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n));
          })({
            key: "${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}",
            v: "weekly"
          });
        `}
      </Script>

      <h1>Google Map Test (Dynamic Library Import)</h1>
      {/* マップを描画する要素 */}
      <div id="map" style={{ width: "600px", height: "400px", border: "1px solid #ccc" }} />
    </main>
  );
}

