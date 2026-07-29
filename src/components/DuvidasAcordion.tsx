import { DUVIDAS } from "../config/duvidas";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"



const DuvidasAcordion = () => {
    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
           {
            DUVIDAS.map((duvida)=>(
                <AccordionItem key={duvida.id} value={`item-${duvida.id}`} className="bg-[#1B1026] px-10 rounded-lg border-b-[#6326B9]">
                <AccordionTrigger className="text-gray-50 font-semibold text-[15px]">{duvida.titulo}</AccordionTrigger>
                <AccordionContent className="text-gray-300 text-[15px]">
                    {duvida.content}
                </AccordionContent>
            </AccordionItem>
            ))
           }
        </Accordion>
    );
}

export default DuvidasAcordion;