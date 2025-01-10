import '../index.css'

import { PiStudentFill } from "react-icons/pi";

import { IoLocationOutline } from "react-icons/io5";

import { FcBookmark } from "react-icons/fc";

import { FcMultipleDevices } from "react-icons/fc";

const About: React.FC = () => {
    const birthDate = new Date('2003-02-05')
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear() - (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0);

    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape absolute w-full h-[60vh] left-0 right-0 rotate-180"></div>
            <div className="h-full w-full backdrop-blur-3xl flex flex-col gap-20 justify-center lg:gap-0  p-40">
                <h1 className="text-6xl p-20">Sobre mim</h1>
                <div className="w-full self-start flex flex-col lg:flex-row gap-6">
                    <div className='space-y-4'>

                        <div className='flex flex-row lg:ml-40 items-center gap-4'>
                            <PiStudentFill className='w-[5rem] h-[5rem]' />
                            <div className='opacity-60 text-xl lg:text-sm'>Estudante de Sistemas de Informação</div>
                        </div>

                        <div className='flex flex-row lg:ml-40 items-center gap-4'>
                            <FcMultipleDevices className='w-[5rem] h-[5rem]' />
                            <div className='opacity-60 text-xl lg:text-sm'>Apaixonado por Tecnologia, Inovação e Desenvolvimento</div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex flex-row lg:ml-40 items-center gap-4'>
                            <IoLocationOutline className='w-[5rem] h-[5rem]' />
                            <div className='opacity-60 text-xl lg:text-sm'>{age} anos | SP - Brasil</div>
                        </div>

                        <div className='flex flex-row lg:ml-40 items-center gap-4'>
                            <FcBookmark className='w-[5rem] h-[5rem]' />
                            <div className='opacity-60 text-xl lg:text-sm'>Gosto de Filosofia (Oriental, Schopenhauer, Cioran)</div>
                        </div>
                    </div>
                </div>
                <div className="px-10 py-20">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-around gap-20 lg:gap-40">
                        <h1 className="text-5xl">Competências</h1>
                        <ul className="space-y-2">
                            <p className='text-3xl lg:text-sm'>Desenvolvimento</p>
                            <li className="opacity-60 text-xl lg:text-sm">Front-End</li>
                            <li className="opacity-60 text-xl lg:text-sm">Back-End</li>
                            <li className="opacity-60 text-xl lg:text-sm">Mobile</li>
                        </ul>
                        <ul className="space-y-2">
                            <p className='text-3xl lg:text-sm' >Ferramentas</p>
                            <li className="opacity-60 text-xl lg:text-sm">ReactJS</li>
                            <li className="opacity-60 text-xl lg:text-sm">React Native</li>
                            <li className="opacity-60 text-xl lg:text-sm">NodeJS</li>
                            <li className="opacity-60 text-xl lg:text-sm">Git</li>
                            <li className="opacity-60 text-xl lg:text-sm">SQLite, Firebase, MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;