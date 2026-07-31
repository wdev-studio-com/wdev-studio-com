import { CONSTANTS } from "../../../config/constants";

interface DuvidasProps {
  id: string;
}

const Duvidas = ({ id }: DuvidasProps) => {
  return (
    <section id={id} className="w-full py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-badge glass text-sm text-muted-foreground mb-4">
            Experiência
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trajetória <span className="text-cyan-400">profissional</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-cyan-600/40 -translate-x-1/2 shadow-[0_0_15px_2px] shadow-cyan-500/20" />

          {CONSTANTS.experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-16 mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1" />

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="relative w-5 h-5">
                  <div className="absolute inset-0 rounded-full bg-cyan-500 animate-pulse-glow" />
                  <div className="absolute inset-0 rounded-full bg-cyan-500 blur-sm scale-150" />
                  <div className="absolute inset-0 rounded-full bg-cyan-500" />
                </div>
              </div>

              <div
                className={`flex-[2] glass-card rounded-card p-6 md:p-8 transition-all duration-500 hover:glow-card ${
                  index % 2 === 0 ? "md:text-left md:mr-auto" : "md:text-left md:ml-auto"
                } w-full md:w-auto`}
              >
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="font-semibold text-foreground text-lg">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-badge">
                    {exp.period}
                  </span>
                </div>
                {exp.subtitle && (
                  <p className="text-sm text-muted-foreground/70 mb-4 italic">
                    {exp.subtitle}
                  </p>
                )}
                <ul className="space-y-3">
                  {exp.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-cyan-400 mt-1 shrink-0">&#9656;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Duvidas;