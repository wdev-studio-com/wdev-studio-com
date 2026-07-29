import { CONSTANTS } from "../../../config/constants";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="contato" className="w-full border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Vamos trabalhar <span className="text-gradient">juntos?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Estou disponível para novos projetos, parcerias e oportunidades
            desafiadoras. Entre em contato!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${CONSTANTS.email}`}
              className="px-6 py-4 glass rounded-xl flex items-center gap-3 hover:bg-secondary transition-all group"
            >
              <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{CONSTANTS.email}</span>
            </a>
            <a
              href={CONSTANTS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 glass rounded-xl flex items-center gap-3 hover:bg-secondary transition-all group"
            >
              <FaWhatsapp className="text-green-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm">{CONSTANTS.phone}</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-border">
          <div>
            <span className="font-bold text-lg">
              Wellington<span className="text-gradient">.dev</span>
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              {CONSTANTS.role}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CONSTANTS.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-secondary transition-all group"
            >
              <FaGithub className="text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all" />
            </a>
            <a
              href={CONSTANTS.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-secondary transition-all group"
            >
              <FaLinkedin className="text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all" />
            </a>
            <a
              href={CONSTANTS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-secondary transition-all group"
            >
              <FaWhatsapp className="text-muted-foreground group-hover:text-green-400 group-hover:scale-110 transition-all" />
            </a>
            <a
              href={`mailto:${CONSTANTS.email}`}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-secondary transition-all group"
            >
              <FaEnvelope className="text-muted-foreground group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {CONSTANTS.name}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;