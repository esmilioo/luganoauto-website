"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Option = { label: string; value: string };

type Props = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function SelectCustom({ label, options, value, onChange, className }: Props) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  const updateCoords = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + 4, // 4px di margine
        left: rect.left,
        width: rect.width,
      });
    }
  };

  const handleOpen = () => {
    updateCoords();
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleScrollOrResize = () => setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [open]);

  return (
    <div className={cn("relative w-full", className)}>
      <label className="text-[9px] uppercase tracking-[0.3em] text-titanium/40 block mb-1">
        {label}
      </label>

      <button
        ref={triggerRef}
        type="button"
        onClick={handleOpen}
        className="w-full flex items-center justify-between bg-transparent border-b border-titanium/30 py-2 text-sm text-titanium outline-none focus:border-crimson transition-colors text-left"
      >
        <span className="truncate">{selected?.label || value}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-titanium/50 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "fixed",
                  top: coords.top,
                  left: coords.left,
                  width: coords.width,
                }}
                className="z-[9999] bg-noir/95 backdrop-blur-xl border border-titanium/10 shadow-2xl max-h-60 overflow-y-auto scrollbar-hide"
              >
                <ul className="py-1">
                  {options.map((opt) => (
                    <li key={opt.value}>
                      <button
                        type="button"
                        onClick={() => {
                          onChange(opt.value);
                          setOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-3 text-sm transition-colors duration-200",
                          opt.value === value
                            ? "text-crimson bg-crimson/5 font-medium"
                            : "text-titanium/70 hover:text-titanium hover:bg-white/5"
                        )}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}