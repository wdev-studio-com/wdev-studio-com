import { useState } from 'react';
import { Menu } from '../../../components/ui/menu';
import { Button } from '../../../components/ui/button';



interface NavProps {
    className: string;
    open: boolean | "null";

}

const Nav = ({ className, open }: NavProps) => {

    const [screen, setScreen] = useState<"lg" | "sm" | "md" | undefined>("sm")

    return (
        <Menu.Root open={open}>

            <Menu.Lista open={open}>
                <Menu.Link label="Home" />
            </Menu.Lista>
            <Menu.Lista open={open}>
                <Menu.Link label="Sobre" />
            </Menu.Lista>
            <Menu.Lista open={open}>
                <Menu.Link label="Planos" />
            </Menu.Lista>
            <Menu.Lista open={open}>
                <Menu.Link label="Dúvidas" />
            </Menu.Lista>
            <div className="md:hidden w-full">
                <Button onClick={() => {
                    // location.href = "https://app.blackconversa.com/login"
                }} className="w-full py-[20px] border border-[#2188A2] [background-image:radial-gradient(60%_50%_at_50%_50%,_#185867_0%,_#126F85_100%)]">PORTFÓLIO</Button>
            </div>
        </Menu.Root>
    );
}

export default Nav;