"use client";
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function EngineSoundExperience() {
  const [playing, setPlaying] = useState(false);

  const play = () => {
    if (playing) return;
    setPlaying(true);
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();

    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    o1.type = "sawtooth"; o1.frequency.value = 90;
    o2.type = "square";   o2.frequency.value = 135;
    filter.type = "lowpass"; filter.frequency.value = 900;
    lfo.type = "sine"; lfo.frequency.value = 28;
    lfoGain.gain.value = 25;

    lfo.connect(lfoGain);
    lfoGain.connect(o1.frequency);
    lfoGain.connect(o2.frequency);

    o1.connect(filter); o2.connect(filter);
    filter.connect(gain); gain.connect(ctx.destination);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.3);
    o1.frequency.linearRampToValueAtTime(180, ctx.currentTime + 1.2);
    o2.frequency.linearRampToValueAtTime(240, ctx.currentTime + 1.2);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 2.8);

    o1.start(); o2.start(); lfo.start();
    setTimeout(() => {
      try { o1.stop(); o2.stop(); lfo.stop(); ctx.close(); } catch {}
      setPlaying(false);
    }, 3000);
  };

  return (
    <button
      data-magnetic
      onClick={play}
      className="group flex items-center gap-3 rounded-full border border-titanium/20 px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:border-crimson hover:text-crimson transition-colors duration-500"
    >
      {playing ? <VolumeX className="h-4 w-4 animate-pulse" /> : <Volume2 className="h-4 w-4" />}
      {playing ? "Engine Running…" : "Engine Sound"}
    </button>
  );
}