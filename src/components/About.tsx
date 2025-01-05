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
            <div className="h-full w-full backdrop-blur-3xl flex flex-col justify-center p-40">
                <h1 className="text-6xl p-20">Sobre mim</h1>
                <div className="w-full self-start flex flex-row gap-6">
                    <div className='space-y-4'>

                        <div className='flex flex-row ml-40 items-center gap-4'>
                            <PiStudentFill className='w-[5rem] h-[5rem]' />
                            <div className='opacity-60'>Estudante de Sistemas de Informação</div>
                        </div>

                        <div className='flex flex-row ml-40 items-center gap-4'>
                            <FcMultipleDevices className='w-[5rem] h-[5rem]' />
                            <div className='opacity-60'>Apaixonado por Tecnologia, Inovação e Desenvolvimento</div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex flex-row ml-40 items-center gap-4'>
                            <IoLocationOutline className='w-[5rem] h-[5rem]' />
                            <div className='opacity-60'>{age} anos | SP - Brasil</div>
                        </div>

                        <div className='flex flex-row ml-40 items-center gap-4'>
                            <FcBookmark className='w-[5rem] h-[5rem]' />
                            <div className='opacity-60'>Gosto de Filosofia (Oriental, Schopenhauer, Cioran)</div>
                        </div>
                    </div>
                </div>
                <div className="px-10 py-20">
                    <div className="flex items-center justify-around gap-40">
                        <h1 className="text-3xl">Competências</h1>
                        <ul className="space-y-2">
                            <p>Desenvolvimento</p>
                            <li className="opacity-60">Front-End</li>
                            <li className="opacity-60">Back-End</li>
                            <li className="opacity-60">Mobile</li>
                        </ul>
                        <ul className="space-y-2">
                            <p>Ferramentas</p>
                            <li className="opacity-60">ReactJS</li>
                            <li className="opacity-60">React Native</li>
                            <li className="opacity-60">NodeJS</li>
                            <li className="opacity-60">Git</li>
                            <li className="opacity-60">SQLite, Firebase, MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;