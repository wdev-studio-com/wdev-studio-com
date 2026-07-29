import { cn } from "../../../lib/utils";
import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

interface MenuRootProps extends VariantProps<typeof menu> {
    className?:string;
    children:ReactNode;
}

const menu = tv({
    base: "flex  w-full max-md:hidden items-center justify-center",
    variants: {
        open: {
            true: "absolute justify-end p-4 mt-[40px] max-md:flex left-0 opacity-1 w-full h-[220px] bg-gray-100 flex-col rounded-md transition-1 ease-in-out duration-500",
            false: "absolute justify-end p-4 mt-[40px] max-md:flex left-0 opacity-0 w-full h-[0px] bg-gray-100 flex-col  rounded-md transition-1 ease-in-out duration-500",
            null:"max-md:hidden"
        },
    },
    

});


export const MenuRoot = ({ className, children, open}:MenuRootProps) => {
    return (
        <nav className="w-full">
            <ul className={cn(menu({open}), className)}>
               {children}
            </ul>
        </nav>
    );
}

