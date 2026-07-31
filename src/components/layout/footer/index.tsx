import { CONSTANTS } from "../../../config/constants";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id="contato" className="w-full border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-badge glass text-sm text-muted-foreground mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Vamos trabalhar <span className="text-cyan-400">juntos?</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Estou disponível para novos projetos, parcerias e oportunidades
            desafiadoras. Entre em contato!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${CONSTANTS.email}`}
              className="px-6 py-4 rounded-button glass-card flex items-center gap-3 hover:bg-secondary/50 transition-all group"
            >
              <FaEnvelope className="text-cyan-400 group-hover:scale-110 transition-transform" size={14} />
              <span className="text-sm">{CONSTANTS.email}</span>
            </a>
            <a
              href={CONSTANTS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-button glass-card flex items-center gap-3 hover:bg-secondary/50 transition-all group"
            >
              <FaWhatsapp className="text-green-400 group-hover:scale-110 transition-transform" size={14} />
              <span className="text-sm">{CONSTANTS.phone}</span>
            </a>
          </div>
        </div>

        <div className="relative pt-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <img
                src="/logo.png"
                alt="wdev-studio"
                className="h-14 w-auto object-contain mx-auto mb-2"
              />
              <p className="text-sm text-muted-foreground mt-1">
                {CONSTANTS.role}
              </p>
              <p className="text-xs text-muted-foreground/50 mt-1">
                {CONSTANTS.location} &middot; {new Date().getFullYear()}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={CONSTANTS.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-button glass-card flex items-center justify-center hover:bg-secondary/50 transition-all group"
                title="GitHub"
              >
                <FaGithub className="text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all" size={16} />
              </a>
              <a
                href={CONSTANTS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-button glass-card flex items-center justify-center hover:bg-secondary/50 transition-all group"
                title="LinkedIn"
              >
                <FaLinkedin className="text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all" size={16} />
              </a>
              <a
                href={CONSTANTS.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-button glass-card flex items-center justify-center hover:bg-secondary/50 transition-all group"
                title="WhatsApp"
              >
                <FaWhatsapp className="text-muted-foreground group-hover:text-green-400 group-hover:scale-110 transition-all" size={16} />
              </a>
              <a
                href={`mailto:${CONSTANTS.email}`}
                className="w-10 h-10 rounded-button glass-card flex items-center justify-center hover:bg-secondary/50 transition-all group"
                title="Email"
              >
                <FaEnvelope className="text-muted-foreground group-hover:text-cyan-400 group-hover:scale-110 transition-all" size={16} />
              </a>
            </div>

            <p className="text-xs text-muted-foreground/40">
              &copy; {new Date().getFullYear()} {CONSTANTS.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;