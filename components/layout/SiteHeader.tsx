"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { VIPBookingModal } from "@/components/concierge/VIPBookingModal";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/showroom", label: "Inventario" },
  { href: "/sell", label: "Vendi" },
  { href: "/import", label: "Car Finder" },
  { href: "/heritage", label: "Heritage" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [vipOpen, setVipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-apple)]",
          scrolled
            ? "bg-noir/85 backdrop-blur-md border-b border-titanium/10 py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-[13px] uppercase tracking-[0.4em] font-light"
            data-magnetic
          >
            Lugano<span className="text-crimson">·</span>Auto
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-magnetic
                  className={cn(
                    "relative text-[11px] uppercase tracking-[0.28em] transition-colors py-1",
                    active
                      ? "text-titanium"
                      : "text-titanium/50 hover:text-titanium"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-titanium"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <button
              data-magnetic
              onClick={() => setVipOpen(true)}
              className="text-[11px] uppercase tracking-[0.28em] text-titanium/70 hover:text-titanium transition-colors border-b border-transparent hover:border-crimson pb-0.5"
            >
              VIP Access
            </button>
          </div>

          <button
            className="lg:hidden p-2 -m-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-noir lg:hidden"
          >
            <nav className="flex flex-col justify-center h-full px-8 gap-8">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-4xl font-light tracking-tight hover:text-crimson transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                onClick={() => {
                  setMobileOpen(false);
                  setVipOpen(true);
                }}
                className="mt-6 text-left text-[11px] uppercase tracking-[0.3em] text-crimson"
              >
                VIP Access →
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <VIPBookingModal open={vipOpen} onClose={() => setVipOpen(false)} />
    </>
  );
}