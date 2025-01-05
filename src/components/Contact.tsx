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
            <div className="shape size-40 absolute right-60 top-36"></div>
            <div className="backdrop-blur-3xl flex items-center justify-between px-60 py-40">
                <p className="text-6xl w-200">
                    Veja mais projetos em meu perfil do GitHub
                </p>
                <a href="https://github.com/sCesca" target="_blank" rel="noopener noreferrer">
                    <img
                        src={joel}
                        className="glass-btn size-40 opacity-70 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                        alt="Joel"
                    />
                </a>
            </div>
            <div className='px-60 py-20 flex items-center justify-between'>
                <div className='space-y-2'>
                    <p className='opacity-60'>Número de Celular</p>
                    <p>+55 19 97112-0502</p>
                </div>

                <div className='space-y-2'>
                    <p className='opacity-60'>Endereço de Email</p>
                    <p>samuel1cesca@gmail.com</p>
                </div>

                <div className='space-y-2'>
                    <p className='opacity-60'>Mídias Sociais</p>
                    <div className='flex gap-8'>
                        <FaLinkedin target="_blank" onClick={handleLinkedInClick} className="hover:text-cyan-500" />
                        <FaInstagram target="_blank" onClick={handleInstagramClick} className="hover:text-cyan-500" />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Contact;