import { CONSTANTS } from "../../../config/constants";
import LazyImage from "../../../components/LazyImage";
import { Button } from "../../../components/ui/button";
import Moldura from "../../../components/moldura";
import { EstimaLucro } from "../../../components/EstimaLucro";
import LoadableYouTube from "../../../components/YouTubeLoader";
import YouTubeVideo from "../../../components/YoutubeVideo";
import CaroucelComponent from "../../../components/carousel";


interface SobreProps {
    id: string
}

const Sobre = ({ id }: SobreProps) => {
    return (
        <section id={id} className="w-full h-auto bg-[#0F0019] pt-[100px]">
            <article className="flex items-center justify-between max-md:flex-col ">
                <LazyImage src={CONSTANTS.group} alt="background" imageSize="100%" className="w-[50%] max-md:w-[370px] max-md:mt-10 max-md:h-[400px] h-[600px] px-6 bg-cover bg-no-repeat bg-top" />
                <div className="flex flex-col items-start justify-start w-[55%] max-md:w-[80%] gap-4">
                    <Button className="cursor-default px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]" >Sobre nós</Button>
                    <h4 className="text-white text-[45px] max-md:text-[30px]">O que é um chatbot e porque estou perdendo de 30% a 60% de faturamento amais todos os meses</h4>
                    <p className="text-[15px] text-gray-500 leading-loose">O chatbot é uma ferramenta essencial para os negócios de hoje, capaz de fazer com que seus clientes sejam atendidos com agilidade e eficiência sem que você precise estar o tempo todo no celular.
                        Através da nossa ferramenta que simula o atendimento humano quase que perfeitamente nossa ferramenta é capaz de manter uma conversa pelo Whatsapp e guiar o seu cliente até a venda, isso a qualquer hora do dia, 24 horas por dia 7 dias por semana!</p>
                    <p className="font-bold text-[15px] text-gray-500 leading-loose">
                        Nossa ferramenta sozinha pode facilmente substituir 6 funcionários, gerando uma economia de R$7290 reais, não fica doente, não te cobra décimo terceiro e trabalha 24 horas pelo bem do seu negócio!
                    </p>
                </div>
            </article>
            <article className="w-full  max-h-[180vh] bg-[#0F0019]  pt-[200px]">
                <p className="text-white text-[45px] max-md:text-[30px] w-full text-center">Veja funcionando:</p>
                <Moldura />
            </article>
            <article className="w-full h-auto bg-[#0F0019] flex flex-col items-center justify-start gap-6 pb-20">
                <Button className="cursor-default px-8 py-[20px] border border-[#3f2958] [background-image:radial-gradient(60%_50%_at_50%_50%,_#10011A_0%,_#17022D_100%)]" >
                    Estimativa de lucro
                </Button>
                <p className="text-white text-[45px] text-center w-[50%] max-md:w-[95%] max-md:text-[30px]">Confira abaixo uma estimativa de lucro com a nossa ferramenta</p>
                <EstimaLucro />
            </article>
            <article className="w-full h-auto bg-[#F1F5FF] flex flex-col items-center justify-start gap-6 px-[180px] max-md:px-6 pt-[100px] pb-[100px]">
                <Button className="cursor-default px-8 py-[20px] text-[#6326B9] [background-image:radial-gradient(50%_50%_at_50%_50%,_#ffffff_0%,_#D9D2F3_100%)]" >
                    Sobre o robô
                </Button>

                <h2 className="text-[#6326B9] text-[40px] max-md:text-[30px] text-center">Crie um robozinho de atendimento humanizado em menos de 3 minutos​</h2>
                <p className="text-gray-700 text-[15px] leading-loose text-center ">
                    Nossa plataforma de conversa é um construtor de robôs fácil click a click que mesmo uma criança consegue configurar<br />
                    Sim, a nossa plataforma foi construída pensando em facilidade e praticidade para <strong>você mesmo não sendo um programador consiga construir conversas inteligentes e automáticas que farão sua empresa crescer no automático</strong>
                </p>


            </article>
            <article className="w-full h-auto bg-[#F1F5FF] flex flex-col items-center justify-start max-md:px-6 pb-[100px]">
                <div className="h-auto">
                    <YouTubeVideo videoId="xWT3Rbr2dns" />

                </div>
            </article>
            <article className="w-full h-auto bg-[#DFE4F1] flex flex-col items-center justify-start gap-6 px-[150px] max-md:px-6 pt-[100px] pb-[100px]">
                <Button className="cursor-default px-8 py-[20px] text-[#6326B9] [background-image:radial-gradient(50%_50%_at_50%_50%,_#ffffff_0%,_#D9D2F3_100%)]" >
                    Como nossa plataforma funciona
                </Button>

                <h2 className="text-[#6326B9] text-[40px] max-md:text-[30px] text-center">Tenho que configurar tudo sozinho? NÃO! Nós te ajudaremos​</h2>
                <p className="text-gray-700 text-[15px] leading-loose text-center ">Temos robôs prontos para você utilizar com um click. Além disso nosso time de especialistas em construção de fluxos está disponível para te ajudar por 1 hora inteira, isso daria para construir 10 robôs.
                </p>
                <h3 className="text-[#6326B9] text-[50px] max-md:text-[30px] text-center">Assista uma demostração:
                </h3>
                <YouTubeVideo videoId="ehjlCsprtVM" />

            </article>
            <article className="w-full h-auto bg-[#DFE4F1] flex flex-col items-center justify-start gap-6 px-[150px] max-md:px-6 pt-[100px] ">
                <Button className="cursor-default px-8 py-[20px] text-[#6326B9] [background-image:radial-gradient(50%_50%_at_50%_50%,_#ffffff_0%,_#D9D2F3_100%)]" >
                    Integrações
                </Button>
                <h2 className="text-[#6326B9] text-[40px] max-md:text-[30px] text-center">Integre com as principais plataformas.​</h2>
            </article>
            <article className="w-full h-auto bg-[#DFE4F1]">
                <CaroucelComponent />
            </article>
        </section>
    );
}

export default Sobre;