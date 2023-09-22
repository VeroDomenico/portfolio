import Link from 'next/link';
import { useState } from 'react'; // Import useState from React

const Navbar = () => {
  // Create a state variable to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="sticky bg-black-500 text-white p-4 top-0 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-2xl">My Portfolio</h1>
        </Link>
        <ul
          className={`${isMenuOpen ? 'block flex flex-col items-center' : 'hidden'} lg:flex lg:flex-row  lg:flex lg:space-x-2`}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Projects&Skills">Project & Skills</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
          <button
              className="lg:hidden lg:toggleMenu focus:outline-none"
              onClick={toggleMenu} // Toggle the mobile menu on button click
              >
              <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  {isMenuOpen ? (<path d="M6 18L18 6M6 6l12 12"></path>) : (<path d="M4 6h16M4 12h16M4 18h16"></path>)}
              </svg>
          </button>
      </div>
    </nav>
    );
};

export default Navbar;
