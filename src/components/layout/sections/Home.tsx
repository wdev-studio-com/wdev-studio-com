import LazyImage from "../../LazyImage";
import bk from '../../../assets/img/back.webp'
import { Button } from "../../../components/ui/button";
import { CONSTANTS } from "../../../config/constants";

interface HomeProps {
    id: string
}


const Home = ({ id }: HomeProps) => {
    return (
        <section id={id} className="w-full min-h-screen  h-auto">
            <LazyImage src={CONSTANTS.bkg} alt="background" className="flex flex-col items-center justify-start w-full min-h-[100dvh]  bg-cover bg-no-repeat bg-top">
                <div className="flex flex-col items-center gap-4 justify-center w-[80%] max-md:w-[95%]  max-md:pt-[300px] pt-[200px]">
                    <h1 className="font-bold text-[45px] text-gray-100  text-center max-md:px-4 px-16">Wellington DEV</h1>
                    <h2 className="font-bold text-[25px] text-gray-100  text-center max-md:px-4 px-16">Software Developer</h2>
                    <p className="text-gray-100 text-[17px] px-16  max-md:px-4 text-center">Em um cenário digital dinâmico, ser um mero desenvolvedor de software não é suficiente. Sou mais do que um codificador de linhas; sou um arquiteto de soluções, um inovador incansável e um parceiro confiável para transformar ideias em realidade. Meu diferencial não reside apenas na habilidade técnica, mas na capacidade de compreender as necessidades do cliente e traduzi-las em soluções eficazes.</p>
                </div>

            </LazyImage>
           
        </section>


    );
}

export default Home;