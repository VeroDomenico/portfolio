import React from 'react';
import Cards from '../components/Cards/Cards';

export default function ProjectsSkills() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl text-center font-bold mt-6">Companies I've Worked For</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 py-4">
        <Cards
          str={"/OneImprint.jpg"}
          title={"OneImprint"}
          desc={"Full-Stack Development"}
          link={'https://www.oneimprint.com/'}
        />
        <Cards
          str={"/VisaCCOLicense.png"}
          title={"Visa"}
          desc={"Engineer"}
          link={'https://www.visa.com'}
        />
      </div>
      <h1 className="text-2xl text-center font-bold mt-6">Current and Former Projects</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 py-4">
        <Cards
          str={"/aiProject.png"}
          title={"Generative AI Project"}
          desc={"Capstone Project GAN"}
          link={'https://github.com/TylerWeir/motifgan'}
        />
        <Cards
          str={"/stable algorithmns.png"}
          title={"Stable Algorithms"}
          desc={"A 2D side-scrolling game"}
          link={'https://github.com/bretabel/cool-Math-Game'}
        />
        <Cards
          str={"/gamedev.png"}
          title={"Gandit Card Game"}
          desc={"An In-progress Game"}
          link={'https://github.com/VeroDomenico'}
        />
      </div>
    </div>
  );
}