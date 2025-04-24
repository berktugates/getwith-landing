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
  description: string;
  customerName: string;
  uri: string;
}

export const CustomerCard: React.FC<ICustomerCard> = ({
  title,
  description,
  customerName,
  uri,
}) => {
  return (
    <Card className="mx-2 max-w-[240px] md:max-w-[400px] lg:max-w-[550px]">
      <CardHeader>
        <CardTitle>Harika bir fikir!</CardTitle>
        <CardDescription>edited 2w ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Bu uygulamanın kesinlikle olması gerekiyordu çok beğendim umarım bir
          an önce kullanmaya başlarız.
        </p>
      </CardContent>
      <CardFooter className="flex gap-x-2">
        <Avatar className="size-6">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Ece Ayvazoglu</h1>
      </CardFooter>
    </Card>
  );
};
