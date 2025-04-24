import React from "react";
import { Card } from "../card";
import Image from "next/image";

export const Features: React.FC = () => {
  return (
    <div id="features" className="my-6">
      <h1 className="text-white text-2xl md:text-4xl text-center">
        Features
        <div
          id="feature-cards"
          className="grid md:grid-cols-2 mt-6 gap-y-4 md:gap-y-0 md:gap-x-4"
        >
          <Card className="flex items-center bg-black border border-white">
            <Image
              src={"/home/first_mockup.png"}
              className="object-cover"
              width={200}
              height={50}
              alt="first-mockup"
            />
          </Card>
          <Card className="flex items-center bg-black border border-white">
            <Image
              src={"/home/second_mockup.png"}
              className="object-cover"
              width={200}
              height={50}
              alt="first-mockup"
            />
          </Card>
        </div>
      </h1>
    </div>
  );
};
