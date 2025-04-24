import React from "react";
import { PricingCard } from "./PricingCard";
import { FreeBenefits, ProBenefits } from "@/constants/plan";

export const Pricing:React.FC = ()=>{
    return (
        <div id="pricing">
            <h1 className="text-white text-2xl md:text-4xl text-center mt-6">
              Pricing
            </h1>
            <h1 className="text-gray-200 text-xs md:text-lg text-center mb-6">
              Choose the best plan for your future
            </h1>
            <div
              id="plans"
              className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-4 items-stretch"
            >
              <PricingCard plan="Free" price={"Free"} period={"month"} benefits={FreeBenefits} buttonText={"Try for Free"} />
              <PricingCard plan="Pro" price={"4.99"} period={"month"} benefits={ProBenefits} buttonText={"Go Premium"} />
              <PricingCard plan="Pro" price={"60"} period={"year"} benefits={ProBenefits} buttonText={"Go Premium"} />
            </div>
          </div>
    )
}