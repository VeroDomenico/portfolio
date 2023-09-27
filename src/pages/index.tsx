import Typewriter from '../components/Typewrite';
import AboutMe from '@/components/AboutMe';
import ProjectsSkills from '@/pages/projectsSkills';
import ContactMeFooter from '@/components/ContactMeFooter'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Profile Picture and Typewriter */}
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

      {/* About Me and Projects/Skills sections */}
      <div className="bg-gray-100 text-black">
        <AboutMe />
        <ProjectsSkills />
      </div>
      <ContactMeFooter></ContactMeFooter>
    </div>
    );
  }