import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import joel from '../assets/joel.jpg';

const Contact = () => {
    const handleLinkedInClick = () => {
        window.location.href = 'https://www.linkedin.com/in/samuelcesca/';
    };

    const handleInstagramClick = () => {
        window.location.href = 'https://www.instagram.com/samucesca/profilecard/';
    }

    return (
        <section className="panel h-screen relative snap-start">
            <div className="shape lg:rotate-0 absolute ml-60 mt-80 lg:m-0 lg:size-40 lg:right-60 lg:top-36"></div>
            <div className="backdrop-blur-3xl gap-20 lg:gap-0 flex flex-col lg:flex-row items-center justify-between px-60 py-80 lg:py-40">
                <p className="text-5xl lg:text-6xl w-200">
                    Veja mais projetos em meu perfil do GitHub
                </p>
                <a href="https://github.com/sCesca" target="_blank" rel="noopener noreferrer">
                    <img
                        src={joel}
                        className="glass-btn size-70 lg:size-40 opacity-60 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                        alt="Joel"
                    />
                </a>
            </div>
            <div className='px-60  py-30 lg:py-40 space-y-40 lg:space-y-0 flex-col flex lg:flex-row items-start lg:items-center justify-between'>
                <div className='space-y-4'>
                    <p className='opacity-60 text-5xl lg:text-sm'>Número de Celular</p>
                    <p className='text-3xl lg:text-sm'>+55 19 97112-0502</p>
                </div>

                <div className='space-y-4'>
                    <p className='opacity-60 text-5xl lg:text-sm'>Endereço de Email</p>
                    <p className='text-3xl lg:text-sm'>samuel1cesca@gmail.com</p>
                </div>

                <div className='space-y-4'>
                    <p className='opacity-60 text-5xl lg:text-sm'>Mídias Sociais</p>
                    <div className='flex gap-8'>
                        <FaLinkedin target="_blank" onClick={handleLinkedInClick} className="hover:text-cyan-500 w-10 h-10 lg:w-5" />
                        <FaInstagram target="_blank" onClick={handleInstagramClick} className="hover:text-cyan-500 w-10 h-10 lg:w-5" />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Contact;