import React from "react";

type CardsProps = {
  str: string;
  desc: string;
  title: string;
  link: string;
};

export default function Cards({ str, desc, title, link }: CardsProps): JSX.Element {
  // Helper function
  const handleLinkClick = () => {
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <div className="relative w-64 h-64 px-2" onClick={handleLinkClick}>
      <img
        className="w-full h-full object-fit"
        src={str}
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-75">
        <hgroup className="flex justify-center items-center h-full text-white flex-col">
          <h1>{title}</h1>
          <h2>{desc}</h2>
        </hgroup>
      </div>
    </div>
  );
}
