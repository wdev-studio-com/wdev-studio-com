import { CONSTANTS } from "../../../config/constants";
import { FaCode, FaMobile, FaServer, FaCloud, FaDatabase, FaRocket } from "react-icons/fa6";

interface SobreProps {
  id: string;
}

const skillsIcon: Record<string, React.ReactNode> = {
  frontend: <FaCode className="text-cyan-400" size={20} />,
  mobile: <FaMobile className="text-violet-400" size={20} />,
  backend: <FaServer className="text-cyan-400" size={20} />,
  cloud: <FaCloud className="text-violet-400" size={20} />,
  database: <FaDatabase className="text-cyan-400" size={20} />,
  messaging: <FaRocket className="text-violet-400" size={20} />,
};

const Sobre = ({ id }: SobreProps) => {
  return (
    <section id={id} className="w-full py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            Sobre
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Transformando ideias em{" "}
            <span className="text-gradient">soluções digitais</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Engenheiro de software com mais de 15 anos de experiência em
            desenvolvimento full stack, com forte atuação em arquitetura de
            microserviços, sistemas distribuídos e integrações complexas.
            Especialista em soluções escaláveis, processamento assíncrono e
            automação com inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(CONSTANTS.skills).map(([key, value]) => (
            <div
              key={key}
              className="glass rounded-xl p-6 hover:bg-secondary/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  {skillsIcon[key] || <FaCode className="text-cyan-400" size={20} />}
                </div>
                <span className="font-semibold capitalize text-foreground">
                  {key}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-semibold mb-2">
            {CONSTANTS.education.degree}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            {CONSTANTS.education.university}
          </p>
          <div className="flex flex-wrap gap-3">
            {CONSTANTS.education.certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-violet-600/10 border border-cyan-500/20 text-sm text-muted-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;