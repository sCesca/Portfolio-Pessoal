import cartoon from '../assets/cartoon.jpg'

const Intro: React.FC = () => {
  return (
    <section className="panel h-screen snap-start relative">
      <div className="shape w-[60rem] h-[25rem] lg:w-[40rem] -rotate-45 top-40 lg:right-40 lg:rotate-45 lg:top-40 absolute"></div>
      <div className="px-40 flex flex-col lg:items-start justify-center h-full backdrop-blur-3xl">
        <div className='flex flex-col lg:flex-row sm:items-center '>
          <img src={cartoon} alt='Jobim' className='w-[25rem] h-[25rem] opacity-80 lg:w-[20rem] lg:h-[20rem] ml-20 lg:mt-10 rounded-full' />
          <div className="px-30 lg:px-20 h-[30rem] flex flex-col justify-center gap-5 lg:gap-1">
            <h1 className="text-5xl lg:text-3xl ml-10">
              "Ser feliz sem motivo é a mais autêntica forma de felicidade."
            </h1>
            <span className="ml-12 opacity-50 text-4xl lg:text-2xl">Carlos Drummond de Andrade</span>
          </div>
        </div>
        <div className="px-30 lg:px-20 h-[30rem] flex flex-col justify-center gap-5 lg:gap-1">
          <span className="opacity-50 text-4xl lg:text-3xl">Samuel Fagundes Cesca</span>
          <h1 className="text-6xl">
            Bem-vindo ao meu portfólio <br />de projetos
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
