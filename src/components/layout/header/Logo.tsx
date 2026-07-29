const Logo = () => {
  return (
    <a href="#home" className="flex items-center gap-2 group">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
        W
      </div>
      <span className="font-bold text-xl text-foreground">
        Wellington<span className="text-gradient">.dev</span>
      </span>
    </a>
  );
};

export default Logo;