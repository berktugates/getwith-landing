import React from "react";
import Marquee from "react-fast-marquee";
import { CustomerCard } from "./CustomerCard";

export const MarqueeC: React.FC = () => {
  return (
    <Marquee
      className="text-white flex text-wrap my-6"
      pauseOnClick
      speed={50}
    >
      <CustomerCard
        title="deneme"
        description="lorem ipsum dolor sit amet"
        uri="https://github.com/shadcn.png"
        customerName="Ece Ayvazoglu"
      />
      <CustomerCard
        title="deneme"
        description="lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet"
        uri="https://github.com/shadcn.png"
        customerName="Ece Ayvazoglu"
      />
    </Marquee>
  );
};
