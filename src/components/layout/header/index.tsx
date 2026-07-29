import { Button } from "../../ui/button";
import Nav from "./Nav";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { useMediaQuery } from "@reactuses/core";

const Header = () => {
  const [open, setOpen] = useState<boolean | "null">("null");
  const isWide = useMediaQuery("(min-width: 768px)");

  return (
    <header className="fixed z-[999] left-6 right-6 top-4 h-16 max-w-6xl mx-auto glass rounded-2xl flex items-center justify-between px-6 shadow-lg">
      <Logo />
      <Nav className={""} open={isWide ? "null" : open} />
      <div className="max-md:hidden">
        <Button
          onClick={() => {
            window.open("https://wellington-dev.com", "_blank");
          }}
          className="px-6 py-5 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
        >
          Portfólio
        </Button>
      </div>
      <div className="md:hidden">
        <Button
          onClick={() => setOpen(!open)}
          variant="ghost"
          size="icon"
          className="text-foreground"
        >
          <FaBars size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;