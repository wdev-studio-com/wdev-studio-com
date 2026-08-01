import { CONSTANTS } from "../../../config/constants";
import { Menu } from "../../../components/ui/menu";
import { Button } from "../../../components/ui/button";

interface NavProps {
  className: string;
  open: boolean | "null";
}

const Nav = ({ className, open }: NavProps) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "https://www.linkedin.com/in/wellingtonrm";
    link.target = "_blank";
    link.click();
  };

  return (
    <Menu.Root open={open}>
      {CONSTANTS.nav.map((item) => (
        <Menu.Lista key={item.label} open={open}>
          <a
            href={item.href}
            className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-cyan-400 hover:after:w-full after:transition-all"
          >
            {item.label}
          </a>
        </Menu.Lista>
      ))}
      <div className="md:hidden w-full">
        <Button
          onClick={handleClick}
          className="w-full glass text-foreground hover:bg-accent/20"
        >
          Portfólio
        </Button>
      </div>
    </Menu.Root>
  );
};

export default Nav;