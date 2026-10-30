"use client";

import { usePathname } from "next/navigation";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MagneticCursor } from "@/components/cursor/MagneticCursor";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <SmoothScrollProvider>
      <GrainOverlay />
      <ScrollProgress />
      <MagneticCursor />
      <SiteHeader />
      {children}
      <SiteFooter />
    </SmoothScrollProvider>
  );
}