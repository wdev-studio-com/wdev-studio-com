import { CONSTANTS } from "../../../config/constants";
import { Button } from "../../ui/button";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
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
        className="absolute inset-0 opacity-30 transition-all duration-700"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(186 94% 42% / 0.15), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20 transition-all duration-700"
        style={{
          background:
            "radial-gradient(500px circle at calc(100% - var(--mouse-x, 50%)) calc(100% - var(--mouse-y, 50%)), hsl(262 83% 58% / 0.1), transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponível para novos projetos
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          {CONSTANTS.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-gradient font-semibold mb-6">
          {CONSTANTS.role}
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          Arquiteto de soluções escaláveis com {CONSTANTS.experience} de
          experiência em microserviços, sistemas distribuídos e automação com
          inteligência artificial. Transformo ideias em software de alto
          desempenho.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projetos">
            <Button className="px-8 py-6 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-base gap-2">
              Ver Projetos <FaArrowRight />
            </Button>
          </a>
          <a href="#contato">
            <Button
              variant="outline"
              className="px-8 py-6 border-border hover:bg-secondary rounded-xl text-base"
            >
              Entrar em Contato
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            {CONSTANTS.location}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-violet-400" />
            {CONSTANTS.email}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            {CONSTANTS.phone}
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Home;