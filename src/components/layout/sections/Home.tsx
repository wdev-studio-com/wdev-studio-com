import { CONSTANTS } from "../../../config/constants";
import { Button } from "../../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useRef } from "react";

interface HomeProps {
  id: string;
}

const Home = ({ id }: HomeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      containerRef.current.style.setProperty("--mouse-x", `${x}%`);
      containerRef.current.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(186 94% 42% / 0.12), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background:
            "radial-gradient(600px circle at calc(100% - var(--mouse-x, 50%)) calc(100% - var(--mouse-y, 50%)), hsl(262 83% 58% / 0.08), transparent 60%)",
        }}
      />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-badge glass text-sm text-muted-foreground mb-10 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponível para novos projetos
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-3 leading-tight">
          <span className="text-gradient">wdev</span>
          <span className="text-foreground">-studio</span>
        </h1>

        <div className="relative mb-8">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
          <h2 className="text-xl md:text-3xl font-light text-muted-foreground tracking-wide">
            Building software that scales
          </h2>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-60" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projetos">
            <Button className="px-8 py-6 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-button transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-base gap-2 hover:scale-105 active:scale-95">
              Ver Projetos <FaArrowRight />
            </Button>
          </a>
          <a href="#contato">
            <Button
              variant="outline"
              className="px-8 py-6 bg-transparent border border-border/50 hover:bg-secondary/50 rounded-button text-base hover:scale-105 active:scale-95 transition-all"
            >
              Entrar em Contato
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 rounded-card overflow-hidden max-w-2xl w-full">
          {[
            { value: "15+", label: "anos" },
            { value: "70+", label: "projetos" },
            { value: "Node.js", label: "Backend" },
            { value: "Cloud", label: "AWS · GCP" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card py-4 px-6 flex flex-col items-center gap-0.5"
            >
              <span className="text-lg md:text-xl font-bold text-foreground">{item.value}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-cyan-400/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Home;