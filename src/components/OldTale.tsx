import gif from '../assets/gif-1.gif'

import { FcInfo } from "react-icons/fc";

import { FaReact } from "react-icons/fa";

import { FaPython } from "react-icons/fa";

import { IoLogoFirebase } from "react-icons/io5";

import { FaGithub } from "react-icons/fa";

const OldTale = () => {
    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape-old-tale w-[40rem] h-[25rem] rotate-45 top-40 right-40 absolute">
            </div>

            <div className="px-80 py-40 backdrop-blur-3xl gap-20 flex flex-row">
                <div className="flex flex-col gap-8">
                    <img src={gif} alt='GIF' />
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <FcInfo className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Jogo para web com elementos de IA Generativa para imagens e textos</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <FaReact className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Desenvolvimento do Front-End em React e Context API</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <FaPython className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Desenvolvimento do Back-End em Python</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <IoLogoFirebase className='w-10 h-10' />
                        <div className='opacity-50 flex-wrap'>Banco de dados em Firebase</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-4'>
                        <FaGithub className='w-10 h-10' />
                        <a href='https://github.com/sCesca/TheOldTale' target="_blank" rel="noopener noreferrer">Link para o projeto</a>
                    </div>
                </div>
                <h1 className="text-6xl ml-20 mt-20 text-white ">The Old Tale</h1>

            </div>
        </section>
    )
}

export default OldTale;