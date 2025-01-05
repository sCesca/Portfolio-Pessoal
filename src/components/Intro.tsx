import cartoon from '../assets/cartoon.jpg'

const Intro: React.FC = () => {
  return (
    <section className="panel h-screen snap-start relative">
      <div className="shape w-[40rem] h-[25rem] rotate-45 top-40 right-40 absolute"></div>
      <div className="px-40 h-full backdrop-blur-3xl">
        <div className='flex items-center'>
          <img src={cartoon} alt='Jobim' className='w-[20rem] h-[20rem] ml-20 mt-10 rounded-full' />
          <div>
            <h1 className="text-3xl ml-10">
              "Ser feliz sem motivo é a mais autêntica forma de felicidade."
            </h1>
            <span className="ml-12 opacity-50 text-2xl">Carlos Drummond de Andrade</span>
          </div>
        </div>
        <div className="px-20 h-[30rem] flex flex-col justify-center gap-1">
          <span className="opacity-50 text-3xl">Samuel Fagundes Cesca</span>
          <h1 className="text-6xl">
            Bem-vindo ao meu portfólio <br />de projetos
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
