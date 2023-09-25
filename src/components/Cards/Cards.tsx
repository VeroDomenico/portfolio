import React from "react";

type CardsProps = {
  str: string;
  desc: string;
  title: string;
};

export default function Cards({ str, desc, title }: CardsProps): JSX.Element {
  return (
    <div className="relative w-64 h-64 px-2">
      <img
        className="w-full h-full object-cover"
        src={str} // Make sure the image path is correct
        alt="Cat" // Provide a meaningful alt text for accessibility
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
