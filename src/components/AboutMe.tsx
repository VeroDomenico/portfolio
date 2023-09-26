import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-700 py-16 text-white rounded-lg w-full">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 shadow-lg ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-300 ">About Me</h2>
            <p className="text-lg mb-6">
              Software Engineer with a passion for creating tools for the creation of ideas. Expertise in computer science, mathematics, philosophy, and problem-solving. Proven ability to learn quickly and adapt to new challenges. Seeking a challenging role where I can use my skills to make a positive impact on the world.
            </p>
            <p className="text-lg mb-6">
              I believe that new technologies have the potential to revolutionize the way we create. However, it is important to be careful about how these technologies are used. We need to make sure that they are used for good and not for evil.
            </p>
            <p className="text-lg mb-6">
              I am interested in creating tools for the creation of ideas because I believe that they can help us to solve some of the world's most pressing problems. For example, AI-powered tools could help us to develop new medical treatments, create more sustainable energy sources, and design better educational programs.
            </p>
            <p className="text-lg">
              I am committed to using my skills to create tools that will benefit society. I am also committed to working with others to ensure that these tools are used in a responsible and ethical manner.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:p-20">
            <div className="border rounded-lg shadow-lg p-6 bg-gray-800 text-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Skills & Expertise</h3>
              <ul className="list-disc ml-6">
                <li className="mb-2">Front-end Development: HTML, CSS, Next.js, JavaScript, React, etc.</li>
                <li className="mb-2">Back-end Development: Node.js, Golang, Python, etc.</li>
                <li className="mb-2">Database Management: SQL, MongoDB, Firebase, etc.</li>
                <li className="mb-2">UI/UX Design: Figma, Sketch, Adobe XD, etc.</li>
                <li className="mb-2">Project Management: Agile, Scrum, JIRA, etc.</li>
                <li className="mb-2">Problem Solving: Algorithmic thinking, debugging, etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
