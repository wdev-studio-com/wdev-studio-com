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
    link.href = "https://wellington-dev.com";
    link.target = "_blank";
    link.click();
  };

  return (
    <Menu.Root open={open}>
      {CONSTANTS.nav.map((item) => (
        <Menu.Lista key={item.label} open={open}>
          <a
            href={item.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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