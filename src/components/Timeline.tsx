import { IoIosBriefcase, IoIosSchool } from "react-icons/io";

import TimeLineSchool, { TimelineschoolType } from '../assets/Timelineschool.ts';

import TimeLineWork, { TimelineWorkType } from "../assets/Timelinework.ts";

interface TimelineProps {
    defaultColor: string;
}

const Timeline: React.FC<TimelineProps> = ({ defaultColor }) => {
    return (
        <div className="panel h-screen snap-start flex flex-row relative overflow-y-auto">
            <div className="w-1/1.5 p-4">
                <h2 className="text-2xl font-bold mb-4">Trajetória Acadêmica</h2>
                {TimeLineSchool.map((item: TimelineschoolType) => {
                    const color: string = defaultColor || `bg-${item.color}-500`;
                    return (
                        <div key={item.id} className="flex m-8  relative">
                            <div className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}></div>
                            <div className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}></div>

                            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                                <div className="w-4/5 text-gray-500">
                                    {item.date}
                                </div>
                                {item.id < TimeLineSchool.length ? <div className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}></div> : ""}
                                <IoIosSchool className={`${color} h-8 w-10 rounded-lg z-20`} />
                                <div className={`${color} h-px w-8 translate-y-5 opacity-30`}></div>
                            </div>
                            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
                                <div className="text-xl font-medium">
                                    {item.title}
                                </div>
                                <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                                    {item.location}{" "}
                                    <span className="sm:hidden">| {item.date}</span>
                                </div>
                                <div className="flex flex-wrap mb-6 justify-center">
                                    {item.description}
                                </div>
                                <div className="flex flex-wrap mb-6 justify-center">{item.tech.map((tech, index) => {
                                    return (
                                        <span className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1" key={index}>{tech}</span>
                                    )
                                })}</div>
                                <IoIosSchool className={`${color} h-6 w-8 rounded-lg z-20 absolute left-0 top-4 sm:hidden`} />
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}>
                                    Detalhes
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-4">Trajetória Profissional</h2>
                {TimeLineWork.map((item: TimelineWorkType) => {
                    const color: string = defaultColor || `bg-${item.color}-500`;
                    return (
                        <div key={item.id} className="flex m-8 relative">
                            <div className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}></div>
                            <div className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}></div>

                            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                                <div className="w-4/5 text-gray-500">
                                    {item.date}
                                </div>
                                {item.id < TimeLineWork.length ? <div className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}></div> : ""}
                                <IoIosBriefcase className={`${color} h-8 w-10 rounded-lg z-20`} />
                                <div className={`${color} h-px w-8 translate-y-5 opacity-30`}></div>
                            </div>
                            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
                                <div className="text-xl font-medium">
                                    {item.title}
                                </div>
                                <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                                    {item.company}{" "}
                                    <span className="sm:hidden">| {item.date}</span>
                                </div>
                                <div className="flex flex-wrap mb-6 justify-center">
                                    {item.description}
                                </div>
                                <div className="flex flex-wrap mb-6 justify-center">{item.tech.map((tech, index) => {
                                    return (
                                        <span className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1" key={index}>{tech}</span>
                                    )
                                })}</div>
                                <IoIosBriefcase className={`${color} h-6 w-8 rounded-lg z-20 absolute left-0 top-4 sm:hidden`} />
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}>
                                    Detalhes
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Timeline;