import React from "react";
import Image from "next/image";

export const Icon: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Image
      className="w-6 h-6"
      src={`/common/${name}.svg`}
      width={5}
      height={5}
      alt="social-icon"
    />
  );
};
