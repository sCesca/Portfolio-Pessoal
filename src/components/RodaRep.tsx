import roda from '../assets/roda.jpg'

import { FcInfo } from "react-icons/fc";

import { TbBrandReactNative } from "react-icons/tb";

import { SiSqlite } from "react-icons/si";

import { CiLink } from "react-icons/ci";

const RodaRep = () => {
    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape-roda w-[40rem] h-[25rem] rotate-45 top-40 right-40 absolute">
            </div>

            <div className="px-80 py-40 backdrop-blur-3xl gap-20 flex flex-row">
                <div className="flex flex-col gap-8">
                    <img src={roda} alt='RODA' />
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <FcInfo className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Aplicativo para gestão de rebanhos leiteiros</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <TbBrandReactNative className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Desenvolvimento em React Native e Expo</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <SiSqlite className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Banco de dados local com SQLite</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <CiLink className='w-10 h-10' />
                        <a href='https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/5423/aplicativo-roda-da-reproducao---programa-balde-cheio' target="_blank" rel="noopener noreferrer">Link para o projeto</a>
                    </div>
                </div>
                <h1 className="text-6xl ml-20 mt-20 text-white ">Roda Da Reprodução</h1>

            </div>
        </section>
    )
}

export default RodaRep;