import Image from "next/image";
import React from "react";

export const AppPromotion: React.FC = () => {
  return (
    <div
      id="app-promotion-section"
      className="flex flex-col justify-center items-center mt-6"
    >
      <h1 className="text-2xl mb-2 text-center text-white md:text-3xl">The New Way to Find a Job!</h1>
      <h1 className="text-gray-200 opacity-80 text-center">
        Discover jobs that suit you, scroll, apply and easily direct your
        career.
      </h1>
      <div id="buttons" className="mt-6 flex gap-x-4">
        <Image
          src={"home/en-apple-icon.svg"}
          width={5}
          height={5}
          alt="apple-icon"
          className="w-36 md:w-48"
        />
        <Image
          src={"home/en-googleplaystore-icon.svg"}
          width={5}
          height={5}
          alt="google-icon"
          className="w-36 md:w-48"
        />
      </div>
    </div>
  );
};
