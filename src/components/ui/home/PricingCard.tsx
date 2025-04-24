import React from "react";
import { ArrowRight, BadgeCheck, Gem, TrendingUp, Zap } from "lucide-react";
import { Button } from "../button";
import { IPricing } from "@/types/IPricing";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IPricingCard {
  plan: string;
  price: string;
  period: string;
  benefits: IPricing;
  buttonText: string;
}

const Icon = (plan: string, period: string) => {
  if (plan === "Free") {
    return <Zap />;
  } else if (plan === "Pro" && period === "month") {
    return <TrendingUp />;
  } else if (plan === "Pro" && period === "year") {
    return <Gem />;
  }
};

export const PricingCard: React.FC<IPricingCard> = ({
  plan,
  price,
  period,
  benefits,
  buttonText,
}) => {
  return (
    <Card
      className={`rounded-md md:relative md:w-1/2 md:h-[440px] hover:shadow-lg border ${
        period === "month" && plan == "Pro" ? "relative" : ""
      } bg-gradient-to-b to-transparent from-zinc-400/[0.15] border border-zinc-400/40`}
    >
      <div
        id="most-popular-badge"
        className={`${
          period == "month" && plan == "Pro"
            ? "absolute bg-zinc-100 border -top-3 rounded-full py-0.5 px-1.5 left-2"
            : "hidden"
        }`}
      >
        <h1 className="text-zinc-800 text-sm">Most Popular</h1>
      </div>
      <CardHeader className="flex items-center justify-between">
        <span className={` p-1.5 rounded-md bg-zinc-100 mt-2`}>
          {Icon(plan, period)}
        </span>
        <CardTitle className="text-xl font-semibold text-zinc-900">
          {plan}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <span className="text-[26px] font-bold text-white flex items-center gap-x-1">
          {price == "Free" ? "" : "$"}
          {price}{" "}
          <span className="text-xs text-gray-200 font-light">/{period}</span>
        </span>
        {benefits.map((benefit, key) => {
          return (
            <h1
              className="my-2 w-full flex items-center gap-x-2 text-white leading-5"
              key={key}
            >
              <BadgeCheck className="min-w-5 min-h-5" /> {benefit.title}
            </h1>
          );
        })}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="md:absolute bottom-5">
          {buttonText} <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};
