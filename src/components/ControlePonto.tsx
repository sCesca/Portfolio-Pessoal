import ponto from '../assets/ponto.png'

import { FcInfo } from "react-icons/fc";

import { TbBrandKotlin } from "react-icons/tb";

import { IoLogoFirebase } from "react-icons/io5";

import { CiLink } from "react-icons/ci";

const ControlePonto = () => {
    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape-ponto w-[60rem] h-[25rem] lg:w-[40rem] -rotate-45 top-40 lg:right-40 lg:rotate-45 lg:top-40 absolute">
            </div>

            <div className="px-40 py-80 mt-20 backdrop-blur-3xl gap-20 items-center flex flex-col-reverse lg:items-start lg:py-40 lg:px-80 lg:flex-row">
                <div className="flex flex-col gap-20 lg:gap-8">
                    <img src={ponto} className='w-[12rem] self-center' alt='RODA' />
                    <div className='flex flex-row lg:flex-wrap items-center gap-4'>
                        <FcInfo className='w-20 h-20 lg:w-10 lg:h-10' />
                        <div className='opacity-50 text-xl lg:text-sm flex-wrap'>Aplicativo para controle de pontos de funcionários</div>
                    </div>
                    <div className='flex flex-row lg:flex-wrap items-center gap-4'>
                        <TbBrandKotlin className='w-20 h-20 lg:w-10 lg:h-10' />
                        <div className='opacity-50 text-xl lg:text-sm flex-wrap'>Desenvolvimento em Kotlin</div>
                    </div>
                    <div className='flex flex-row lg:flex-wrap items-center gap-4'>
                        <IoLogoFirebase className='w-20 h-20 lg:w-10 lg:h-10' />
                        <div className='opacity-50 text-xl lg:text-sm flex-wrap'>Banco de dados Firebase</div>
                    </div>
                    <div className='flex flex-row lg:flex-wrap items-center gap-4'>
                        <CiLink className='w-20 h-20 lg:w-10 lg:h-10' />
                        <a className=' text-xl lg:text-sm flex-wrap' href='https://github.com/sCesca/Controle-de-ponto-PUC/tree/main' target="_blank" rel="noopener noreferrer">Link para o projeto</a>
                    </div>
                </div>
                <h1 className="text-6xl ml-20 mt-20 text-white ">Controle de Ponto</h1>

            </div>
        </section>
    )
}

export default ControlePonto;