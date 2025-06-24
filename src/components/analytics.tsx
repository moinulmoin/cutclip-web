"use client";

import Script from "next/script";

function Analytics() {
  if(process.env.NODE_ENV !== "production") return null;
  return (
      <Script
        src="https://umami.moinulmoin.com/script.js"
        data-website-id="82c163d3-9724-4a96-9997-d3bd6bf95fec"
      />
  );
}

export { Analytics };
