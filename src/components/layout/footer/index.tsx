import LazyImage from "../../../components/LazyImage";
import { CONSTANTS } from "../../../config/constants";
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <section className="w-full h-auto bg-[#0E0016] pt-[100px] px-20 max-md:px-6 flex flex-col justify-between">
            <article className="border-t border-gray-700 w-full pb-10">
                <LazyImage src={CONSTANTS.logo} alt="background" className="absolute max-md:mt-[-25px] mt-[-35px] bg-[#0E0016] w-[350px] max-md:w-[200px] h-[80px]  bg-contain bg-no-repeat bg-top" />
                <div className="flex justify-between w-full h-full max-md:flex-col">
                    <div className="w-[30%] max-md:w-full h-200px pt-20">
                        <span className="text-[15px] text-gray-50">BlackConversa é o seu construtor de fluxos, criado para você e por você</span>
                    </div>
                    <div className="w-full flex flex-col">
                        <ul className="flex items-start justify-end pt-6 gap-6 max-md:grid max-md:grid-cols-2">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100092253600432" className="flex gap-2 items-center cursor-pointer">
                                    <FaFacebookSquare className="fill-[#6326B9]" />
                                    <span className="text-[13px] text-gray-50">Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/hendrick.bc/" className="flex gap-2 items-center cursor-pointer">
                                    <FaInstagram className="fill-[#6326B9]" />
                                    <span className="text-[13px] text-gray-50">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=5511912273176&text=Vim%20da%20p%C3%A1gina%20do%20BlackConversa" className="flex gap-2 items-center cursor-pointer">
                                    <FaWhatsapp className="fill-[#6326B9]" />
                                    <span className="text-[13px] text-gray-50">Whatsapp</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/forum_blackzera" className="flex gap-2 items-center cursor-pointer">
                                    <FaTelegram className="fill-[#6326B9]" />
                                    <span className="text-[13px] text-gray-50">Telegram</span>
                                </a>
                            </li>
                            <li>
                                <a href="malito:contato@blackconversa.com.br" className="flex gap-2 items-center cursor-pointer">
                                    <MdEmail className="fill-[#6326B9]" />
                                    <span className="text-[13px] text-gray-50">Email</span>
                                </a>
                            </li>
                        </ul>
                        <div className="text-gray-50 flex flex-col items-end mt-10 max-md:items-center">
                            <span>Blackzera © 2023 - Todos os direitos reservados</span>
                        </div>
                    </div>
                </div>
            </article>
            <article className="border-t border-gray-700 w-full ">
                <p className="text-[10px] text-gray-600  pt-10 pb-4">
                    Este site não é afiliado ao Facebook ou a qualquer entidade do  Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usar  resultados reais. Não vendemos seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco no horário comercial da Segunda a Sexta, das 09h às 18h. Lemos e respondemos todas as mensagens por ordem de chegada.
                </p>
            </article>

        </section >
    );
}

export default Footer;