
import Nav from './components/Nav'

import Intro from './components/Intro'

import { FaInstagram } from 'react-icons/fa6'

import { FaGithub } from 'react-icons/fa'

import { FaLinkedin } from 'react-icons/fa'

import './index.css'

import About from './components/About'

import Timeline from './components/Timeline'

import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OldTale from './components/OldTale'
import RodaRep from './components/RodaRep'
import Contact from './components/Contact'

import music from './assets/music.mp3'
import { useEffect, useRef } from 'react'
import ControlePonto from './components/ControlePonto'

function App() {
  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/samuelcesca/';
  };

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/sCesca';
  }

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/samucesca/profilecard/';
  }

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {

    ScrollTrigger.defaults({
      scroller: '.wrapper',
    })

    gsap.utils.toArray('.panel').forEach((panel, index) => {
      gsap.to(`.bullet-${index + 1}`, {
        background: '#FFF',
        scrollTrigger: {
          trigger: panel as HTMLElement,
          toggleActions: 'play reverse play reverse',
        }
      })
    })
  })

  const scrollToTop = () => {
    const firstSection = document.querySelector('.section:first-of-type');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    const lastSection = document.querySelector('.section:last-of-type');
    if (lastSection) {
      lastSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  return (
    <>
      <Nav />
      <audio ref={audioRef} src={music} autoPlay loop />

      <div className='z-50 fixed h-[70vh] bottom-0 w-24 flex flex-col justify-between items-center p-10 text-white'>
        <div className='flex -rotate-90 items-center gap-8'>
          <p onClick={scrollToBottom} className="cursor-pointer text-2xl lg:text-sm">Fim</p>
          <div className='lg:w-40 w-80 h-[3px] bg-white/50'></div>
          <p onClick={scrollToTop} className="cursor-pointer text-2xl lg:text-sm">Início</p>
        </div>
        <div className='fixed space-y-6 top-2/4 right-10 z-50'>
          <div className='bg-white/25 size-4 rounded-full bullet-1'></div>
          <div className='bg-white/25 size-4 rounded-full bullet-2'></div>
          <div className='bg-white/25 size-4 rounded-full bullet-3'></div>
          <div className='bg-white/25 size-4 rounded-full bullet-4'></div>
          <div className='bg-white/25 size-4 rounded-full bullet-5'></div>
          <div className='bg-white/25 size-4 rounded-full bullet-6'></div>
          <div className='bg-white/25 size-4 rounded-full bullet-7'></div>
        </div>
        <div className='space-y-8 [&>8]:cursor-pointer'>
          <FaGithub onClick={handleGitHubClick} className="hover:text-cyan-500 size-10 lg:size-5" />
          <FaLinkedin onClick={handleLinkedInClick} className="hover:text-cyan-500 size-10 lg:size-5" />
          <FaInstagram onClick={handleInstagramClick} className="hover:text-cyan-500 size-10 lg:size-5" />
        </div>
      </div>

      <div className='wrapper'>
        <div className='section'>
          <Intro />
        </div>
        <div className='section'>
          <About />
        </div>
        <div className='section flex flex-col justify-center items-center text-white text-base pb-8 sm:text-lg'>
          <Timeline defaultColor="bg-cyan-500" />
        </div>
        <div className='section'>
          <OldTale />
        </div>
        <div className='section'>
          <RodaRep />
        </div>
        <div className='section'>
          <ControlePonto />
        </div>
        <div className='section'>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App