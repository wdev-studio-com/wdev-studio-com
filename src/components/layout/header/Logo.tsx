const Logo = () => {
  return (
    <a href="#home" className="flex items-center group">
      <img
        src="/logo.png"
        alt="wdev-studio"
        className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
      />
    </a>
  );
};

export default Logo;