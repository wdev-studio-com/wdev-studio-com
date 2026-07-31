import { CONSTANTS } from "../../../config/constants";
import {
  FaCode, FaMobile, FaServer, FaCloud, FaDatabase, FaRocket,
  FaNodeJs, FaAws, FaDocker, FaPython, FaReact
} from "react-icons/fa6";
import { SiNestjs, SiKubernetes, SiRedis, SiMongodb, SiPostgresql, SiElasticsearch, SiFlutter, SiNextdotjs, SiTailwindcss, SiFastapi, SiLaravel, SiDotnet, SiGooglecloud, SiMysql } from "react-icons/si";

interface SobreProps {
  id: string;
}

const getTechIcon = (tech: string) => {
  const map: Record<string, React.ReactNode> = {
    "React": <FaReact className="text-cyan-400" size={16} />,
    "Next.js": <SiNextdotjs className="text-foreground" size={16} />,
    "Node.js": <FaNodeJs className="text-green-400" size={16} />,
    "NestJS": <SiNestjs className="text-red-400" size={16} />,
    "Flutter": <SiFlutter className="text-blue-400" size={16} />,
    "TypeScript": <span className="text-blue-400 text-xs font-bold">TS</span>,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" size={16} />,
    "Python (FastAPI)": <SiFastapi className="text-teal-400" size={16} />,
    "Laravel": <SiLaravel className="text-red-500" size={16} />,
    ".NET Core": <SiDotnet className="text-purple-500" size={16} />,
    "AWS (EC2, RDS, S3, Lambda)": <FaAws className="text-orange-400" size={16} />,
    "GCP": <SiGooglecloud className="text-blue-400" size={16} />,
    "Docker": <FaDocker className="text-blue-500" size={16} />,
    "Kubernetes": <SiKubernetes className="text-blue-400" size={16} />,
    "PostgreSQL": <SiPostgresql className="text-blue-400" size={16} />,
    "MySQL": <SiMysql className="text-orange-400" size={16} />,
    "MongoDB": <SiMongodb className="text-green-400" size={16} />,
    "ElasticSearch": <SiElasticsearch className="text-yellow-500" size={16} />,
    "Redis": <SiRedis className="text-red-400" size={16} />,
    "Kafka": <span className="text-foreground text-xs font-bold">K</span>,
  };
  return map[tech] || null;
};

const Sobre = ({ id }: SobreProps) => {
  const techItems = [
    { icon: <FaCode size={28} />, color: "bg-cyan-600", label: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"], desc: "Interfaces modernas e responsivas com performance em primeiro lugar." },
    { icon: <FaMobile size={28} />, color: "bg-violet-600", label: "Mobile", techs: ["Flutter", "Dart"], desc: "Apps nativos multiplataforma com experiência fluida." },
    { icon: <FaServer size={28} />, color: "bg-emerald-600", label: "Backend", techs: ["Node.js", "NestJS", "Python (FastAPI)", ".NET Core", "Laravel"], list: true, desc: "APIs escaláveis e sistemas distribuídos." },
    { icon: <FaCloud size={28} />, color: "bg-orange-600", label: "Cloud", techs: ["AWS (EC2, RDS, S3, Lambda)", "GCP", "Docker", "Kubernetes"], progress: 85, desc: "Infraestrutura cloud-native." },
    { icon: <FaDatabase size={28} />, color: "bg-teal-600", label: "Database", techs: ["PostgreSQL", "MySQL", "MongoDB", "ElasticSearch", "Redis"], list: true, desc: "Modelagem e otimização de dados." },
    { icon: <FaRocket size={28} />, color: "bg-pink-600", label: "Messaging", techs: ["Kafka", "Redis", "RabbitMQ", "WebSocket", "gRPC"], list: true, desc: "Comunicação assíncrona e em tempo real." },
  ];

  return (
    <section id={id} className="w-full py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-badge glass text-sm text-muted-foreground mb-4">
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
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techItems.map((item, idx) => {
            const isWide = idx === 0 || idx === 2;

            return (
              <div
                key={item.label}
                className={`group glass-card rounded-card p-6 transition-all duration-500 hover:glow-card ${
                  isWide ? "lg:col-span-2" : ""
                } ${idx === 1 ? "lg:col-span-1" : ""}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-button ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg text-foreground">{item.label}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>

                {"progress" in item && item.progress ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Proficiência</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-cyan-600 transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.techs.map((tech) => (
                        <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-badge bg-secondary/50 text-xs text-muted-foreground">
                          {getTechIcon(tech)}
                          {tech.split(" (")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : "list" in item && item.list ? (
                  <div className="flex flex-wrap gap-2">
                    {item.techs.map((tech) => (
                      <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-badge bg-secondary/50 text-xs text-muted-foreground hover:bg-secondary/80 transition-colors">
                        {getTechIcon(tech)}
                        {tech.split(" (")[0]}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {item.techs.map((tech) => (
                      <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-badge bg-secondary/50 text-xs text-muted-foreground hover:bg-secondary/80 transition-colors">
                        {getTechIcon(tech)}
                        {tech.split(" (")[0]}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 glass-card rounded-card p-8 md:p-10 text-center">
          <h3 className="text-xl font-semibold mb-2">
            {CONSTANTS.education.degree}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            {CONSTANTS.education.university}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CONSTANTS.education.certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-badge bg-cyan-600/10 border border-cyan-600/30 text-sm text-muted-foreground"
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