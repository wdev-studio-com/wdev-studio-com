import { cn } from '../../../lib/utils';
import { Link, animateScroll as scroll } from 'react-scroll';
import { VariantProps, tv } from 'tailwind-variants';


interface MenuLinkProps extends VariantProps<typeof menuLink>  {
    label: string
    className?:string
}


const menuLink = tv({
    variants:{
        screen:{
            lg:"border-b-[1px] max-md:border-none  border-gray-50 font-semibold w-[80px] max-md:w-full h-[40px] flex items-center justify-center text-[#E2E5F1] max-md:bg-gray-600 max-md:rounded-md"
        }
    },
    defaultVariants:{
        screen:"lg"
    }
})

export const MenuLink = ({ label , className, screen}: MenuLinkProps) => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500, // Tempo da animação em milissegundos
            smooth: 'easeInOutQuart', // Tipo de easing
        });
    };
    function removerAcentos(str:string) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    return (
        <Link
            activeClass={cn(menuLink({screen}), className)}
            to={removerAcentos(label.toLowerCase())}
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
        >
            {label}
        </Link>
    );
}

