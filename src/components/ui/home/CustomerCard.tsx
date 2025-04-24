import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ICustomerCard {
  title: string;
  updatedAt: string;
  description: string;
  customerName: string;
  uri: string;
}

export const CustomerCard: React.FC<ICustomerCard> = ({
  title,
  updatedAt,
  description,
  customerName,
  uri,
}) => {
  return (
    <Card className="mx-2 max-w-[240px] md:max-w-[400px] lg:max-w-[550px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{updatedAt}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex gap-x-2">
        <Avatar className="size-6">
          <AvatarImage src={uri} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>{customerName}</h1>
      </CardFooter>
    </Card>
  );
};
