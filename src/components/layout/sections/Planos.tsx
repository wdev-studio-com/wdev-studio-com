import { CONSTANTS } from "../../../config/constants";
import PlanosComponent from "../../../components/palnos";
import { Button } from "../../../components/ui/button";
import LazyImage from "../../../components/LazyImage";

interface PlanosProps {
    id: string
}

const Planos = ({ id }: PlanosProps) => {
    return (
        <section id={id} className="w-full min-h-screen">
            <article className=" bg-[#0E0016]  px-[100px] flex flex-col items-center justify-start pt-[50px] pb-[100px] max-md:px-4 gap-4">
                <Button className="cursor-default  py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]" >
                    Planos
                </Button>
                <h1 className="w-full font-bold text-[45px] max-md:text-[30px] text-gray-100  text-center  px-16">
                    Conheça nossos planos
                </h1>
                <p className="text-gray-500 text-[15px] text-center px-16  max-md:px-4">
                    Quantos números de Whatsapp você precisa conectar?
                </p>
                <PlanosComponent />

            </article>
            <article className=" w-full bg-[#F1F5FF] py-[100px] gap-4 px-20 flex flex-col items-center justify-center">
                <Button className="cursor-default px-8 py-[20px] text-[#6326B9] [background-image:radial-gradient(50%_50%_at_50%_50%,_#ffffff_0%,_#D9D2F3_100%)]" >
                    Garantia
                </Button>
                <h2 className="text-[#6326B9] text-[40px] max-md:text-[30px] text-center">Satisfação garantia e risco zero!</h2>
                <p className="text-gray-700 text-[15px] leading-loose text-center">
                    Se você adquirir qualquer plano e em até 7 dias e por algum motivo não se sentir satisfeito, devolvemos o seu dinheiro!
                </p>
                <div className="grid grid-cols-4 gap-10 w-full max-md:grid-cols-2 max-sm:grid-cols-1 ">
                    {
                        CONSTANTS.garantia.map((image) => (
                            <div className="border border-gray-400 w-full h-[150px] flex flex-col items-center justify-center gap-4 p-2">
                                <LazyImage src={image.image} alt="background" imageSize="100%" className="w-[40px]  h-[50px]  bg-contain bg-no-repeat bg-center" />
                               <span className="text-[15px] text-gray-600 text-center w-full ">{image.text}</span>
                            </div>
                        ))
                    }

                </div>
            </article>


        </section>
    );
}

export default Planos;