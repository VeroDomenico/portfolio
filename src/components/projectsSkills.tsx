import React from 'react';
import Cards from './Cards/Cards';

export default function ProjectsSkills() {
  return (
    <section id={"ProjectSkills"}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h1 className="text-2xl text-center font-bold mt-6">Companies I've Worked For</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 py-4">
        <Cards
          str={"/OneImprint.jpg"}
          title={"OneImprint"}
          hover_desc={"Full-Stack Development"}
          link={'https://www.oneimprint.com/'}
          skill={'PHP, Git, JavaScript'}
        />
        <Cards
          str={"/VisaCCOLicense.png"}
          title={"Visa"}
          hover_desc={"Engineer"}
          link={'https://www.visa.com'}
          skill={' GoLang, Angular, Java, MongoDB, Kubernetes, Docker'}

        />
      </div>
      <h1 className="text-2xl text-center font-bold mt-6">Current and Former Projects</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 py-4">
        <Cards
          str={"/aiProject.png"}
          title={"Generative AI Project"}
          hover_desc={"Capstone Project GAN"}
          link={'https://github.com/TylerWeir/motifgan'}
          skill={'Python, Tensorflow Framework'}
        />
        <Cards
          str={"/stable algorithmns.png"}
          title={"Stable Algorithms"}
          hover_desc={"A 2D side-scrolling game"}
          link={'https://github.com/bretabel/cool-Math-Game'}
          skill={'Java, SQL'}
        />
        <Cards
          str={"/gamedev.png"}
          title={"Gandit Card Game"}
          hover_desc={"An In-progress Game"}
          link={'https://github.com/VeroDomenico'}
          skill={'Unity, C#, MongoDB, GoLang'}
        />
      </div>
    </div>
    </section>
  );
}