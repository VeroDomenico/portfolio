import Typewriter from '../components/Typewrite';
import AboutMe from '@/components/AboutMe';
import ProjectsSkills from '@/pages/projectsSkills';
import ContactMeFooter from '@/components/ContactMeFooter';
import { Link as ScrollLink, Element } from 'react-scroll'; // Import ScrollLink and Element


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Profile Picture and Typewriter */}
      <Element name="home">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="mb-4">
            <img
              className="rounded-full border border-white-900 shadow-md rounded-full scale-75"
              src="./headshot.png"
              alt="My Profile Picture"
            />
          </div>
          <Typewriter messages={['Developer', 'Designer', 'Entrepreneur']} />
        </div>
      </Element>

      {/* About Me and Projects/Skills sections */}
      <Element name="about">
        <div className="bg-white text-black min-h-screen">
          <AboutMe />
        </div>
      </Element>

      <Element name="projectSkills" className='bg-white text-black'>
        <ProjectsSkills />
      </Element>

      <ContactMeFooter />
    </div>
  );
}
