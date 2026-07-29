import { CONSTANTS } from "../../../config/constants";

interface DuvidasProps {
  id: string;
}

const Duvidas = ({ id }: DuvidasProps) => {
  return (
    <section id={id} className="w-full py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            Experiência
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trajetória <span className="text-gradient">profissional</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent -translate-x-1/2" />

          {CONSTANTS.experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 glass rounded-2xl p-6 md:p-8 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                {exp.subtitle && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.subtitle}
                  </p>
                )}
                <ul className="space-y-3">
                  {exp.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      {index % 2 === 0 ? (
                        <>
                          <span className="text-cyan-400 mt-1 shrink-0">&#9656;</span>
                          <span>{item}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-violet-400 mt-1 shrink-0">&#9656;</span>
                          <span>{item}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 border-2 border-background z-10" />
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Duvidas;