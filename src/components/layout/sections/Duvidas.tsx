import DuvidasAcordion from "../../../components/DuvidasAcordion";

interface DuvidasProps {
    id: string
}

const Duvidas = ({ id }: DuvidasProps) => {
    return (
        <section id={id} className="px-36 py-[100px] max-md:px-4 w-full min-h-screen h-auto bg-[#0E0016] flex flex-col items-center justify-center gap-6">
            <span className="text-gray-50 text-[40px] font-semibold ">
                Perguntas frequentes
            </span>
            < DuvidasAcordion/>
        </section>
    );
}

export default Duvidas;