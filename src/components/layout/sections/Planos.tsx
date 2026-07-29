import { CONSTANTS } from "../../../config/constants";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface PlanosProps {
  id: string;
}

const Planos = ({ id }: PlanosProps) => {
  return (
    <section id={id} className="w-full py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSTANTS.projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl overflow-hidden hover:glow transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg mb-5 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planos;