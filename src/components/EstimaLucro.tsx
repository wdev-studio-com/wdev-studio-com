import * as Slider from '@radix-ui/react-slider';
import { useCallback, useEffect, useState } from 'react';

export const EstimaLucro = ({ }) => {

    const [vendasDia, setVendasDia] = useState<number[]>([0])
    const [media, setMedia] = useState<number[]>([0])
    const [funcionario, setFuncionario] = useState<number[]>([1])
    const [result, setResult] = useState<number>(0)

    const calcResult = ()=>{
        const mediaTotal = (vendasDia[0] * media[0]);
        const mediaFunc = (funcionario[0] * 1300);
        setResult((mediaTotal + mediaFunc)) ;
    }
       
    
   console.log("media", media[0])
   console.log("vendas", vendasDia[0])

    useEffect(()=>{
        calcResult()
    },[])


    return (
        <div className="px-10 max-md:px-6">
            <div className="bg-[#1B1026] rounded-lg p-16 mt-10 max-md:p-4">
                <p className="text-white text-[25px] text-center pb-10">Calculadora de Lucro mensal com a Black Conversa</p>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500 text-center">Quantas vendas você faz por dia?</p>
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5 "
                        defaultValue={[vendasDia[0]]}
                        max={1000}
                        step={1}
                        onValueChange={(val)=>{setVendasDia(val); calcResult()}}
                        value={vendasDia}
                        
                        >
                        <Slider.Track className="bg-gray-700 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-[#5E24B7] rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-4 h-4 bg-[#5E24B7] shadow-[0_4px_16px] shadow-[#5f24b77a] rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-[#5E24B7]"
                            aria-label="Volume"
                        />
                    </Slider.Root>
                    <p className="text-gray-500 text-center">{vendasDia}</p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-10">
                    <p className="text-gray-500 text-center">Qual o valor médio diario de venda dos seus produtos?</p>
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5 "
                        defaultValue={[media[0]]}
                        max={5000}
                        step={1}
                        onValueChange={(val)=>{setMedia(val);calcResult()}}
                        value={media}
                        >
                        <Slider.Track className="bg-gray-700 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-[#5E24B7] rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-4 h-4 bg-[#5E24B7] shadow-[0_4px_16px] shadow-[#5f24b77a] rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-[#5E24B7]"
                            aria-label="Volume"
                        />
                    </Slider.Root>
                    <p className="text-gray-500 text-center">R$ {media[0].toLocaleString()}</p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-10">
                    <p className="text-gray-500 text-center">Quantos funcionários você tem na empresa?</p>
                    <Slider.Root
                        className="relative flex items-center select-none touch-none w-full h-5 "
                        defaultValue={[funcionario[0]]}
                        max={500}
                        min={1}
                        step={1}
                        onValueChange={(val)=>{setFuncionario(val); calcResult()}}
                        value={funcionario}
                        >
                        <Slider.Track className="bg-gray-700 relative grow rounded-full h-[3px]">
                            <Slider.Range className="absolute bg-[#5E24B7] rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                            className="block w-4 h-4 bg-[#5E24B7] shadow-[0_4px_16px] shadow-[#5f24b77a] rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-[#5E24B7]"
                            aria-label="Volume"
                        />
                    </Slider.Root>
                    <p className="text-gray-500 text-center">{funcionario[0]}</p>
                </div>
                <div className='flex flex-col items-center gap-2 mt-10'>
                    <p className="text-gray-500 text-center">Sua empresa deixa de lucrar todos os meses em média:</p>
                    <div className="w-full rounded-full border border-gray-700 bg-[#5E24B7] text-center py-6 text-white max-md:text-[20px] text-[40px] font-semibold">R$ {result.toLocaleString()}</div>
                </div>
                
            </div>

        </div>
    );
}

