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
        title="Harika bir fikir!"
        updatedAt={new Date().toLocaleDateString('tr-TR')}
        description="Bu uygulamanın kesinlikle olması gerekiyordu çok beğendim umarım bir
          an önce kullanmaya başlarız."
        customerName="Ece Ayvazoglu"
        uri="https://github.com/shadcn.png"
      />
       <CustomerCard
        title="Harika bir fikir!"
        updatedAt={new Date().toLocaleDateString('tr-TR')}
        description="Bu uygulamanın kesinlikle olması gerekiyordu çok beğendim umarım bir
          an önce kullanmaya başlarız."
        customerName="Ece Ayvazoglu"
        uri="https://github.com/shadcn.png"
      />
    </Marquee>
  );
};
