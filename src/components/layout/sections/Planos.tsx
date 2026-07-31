import { CONSTANTS } from "../../../config/constants";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import { Button } from "../../ui/button";

interface PlanosProps {
  id: string;
}

const Planos = ({ id }: PlanosProps) => {
  return (
    <section id={id} className="w-full py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-badge glass text-sm text-muted-foreground mb-4">
            Projetos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Projetos <span className="text-gradient">em destaque</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções reais que entregaram resultados mensuráveis para startups e
            empresas consolidadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONSTANTS.projects.map((project, index) => {
            const techs = project.tech.split(", ");

            return (
              <div
                key={index}
                className="group relative glass-card rounded-card overflow-hidden transition-all duration-500 hover:glow-card hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-button bg-cyan-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {techs.length} tecnologias
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                    {techs.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-badge bg-secondary/50 text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {techs.length > 4 && (
                      <span className="px-3 py-1 rounded-badge bg-secondary/30 text-xs text-muted-foreground">
                        +{techs.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="md:col-span-2 flex justify-center mt-4">
            <a
              href="https://wdev-studio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-button glass-card hover:bg-secondary/50 transition-all text-sm text-muted-foreground hover:text-foreground"
            >
              Ver portfólio completo
              <FaArrowUpRightFromSquare className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planos;