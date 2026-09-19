"use client";

import { AdSlot } from "@/components/ad-slot";

type Position = "home" | "article";

export function AdStack({ position }: { position: Position }) {
  return (
    <section className="ad-stack" aria-label="Sponsored placements">
      <AdSlot
        slot="top"
        scriptUrl={process.env.NEXT_PUBLIC_AD_TOP_SCRIPT_URL}
        zone={process.env.NEXT_PUBLIC_AD_TOP_ZONE}
      />
      {position === "article" && (
        <AdSlot
          slot="inline"
          scriptUrl={process.env.NEXT_PUBLIC_AD_INLINE_SCRIPT_URL}
          zone={process.env.NEXT_PUBLIC_AD_INLINE_ZONE}
        />
      )}
    </section>
  );
}
