import ponto from '../assets/ponto.png'

import { FcInfo } from "react-icons/fc";

import { TbBrandKotlin } from "react-icons/tb";

import { IoLogoFirebase } from "react-icons/io5";

import { CiLink } from "react-icons/ci";

const ControlePonto = () => {
    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape-ponto w-[40rem] h-[25rem] rotate-45 top-40 right-40 absolute">
            </div>

            <div className="px-80 py-40 backdrop-blur-3xl gap-20 flex flex-row">
                <div className="flex flex-col gap-8">
                    <img src={ponto} className='w-[12rem] self-center' alt='RODA' />
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <FcInfo className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Aplicativo para controle de pontos de funcionários</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <TbBrandKotlin className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Desenvolvimento em Kotlin</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <IoLogoFirebase className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Banco de dados Firebase</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <CiLink className='w-10 h-10' />
                        <a href='https://github.com/sCesca/Controle-de-ponto-PUC/tree/main' target="_blank" rel="noopener noreferrer">Link para o projeto</a>
                    </div>
                </div>
                <h1 className="text-6xl ml-20 mt-20 text-white ">Controle de Ponto</h1>

            </div>
        </section>
    )
}

export default ControlePonto;