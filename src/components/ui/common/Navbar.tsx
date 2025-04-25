import React from "react";
import Image from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <div id="nav" className="sticky top-2 z-50 md:max-w-md mx-auto" style={{cursor:"auto"}}>
      <nav className=" bg-stone-100/90 backdrop-blur-md backdrop-filter rounded-3xl shadow-md container-wrapper">
        <div className="flex h-14 px-4 md:px-4 justify-between items-center">
          <div
            id="first-navbar-section"
            className="flex gap-x-2 md:gap-x-6 items-center"
          >
            <Image
              src={"/globe.svg"}
              width={50}
              height={50}
              alt="logo"
              className="size-6 lg:size-8"
            />
            <Link
              href="/"
              className="text-gray-500 opacity-90 text-xs md:text-base hover:text-black"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-gray-500 opacity-90 text-xs md:text-base hover:text-black"
            >
              Features
            </Link>
            <Link
              href="mailto:contact@getwith.com"
              className="flex justify-center items-center gap-x-1 text-gray-500 opacity-90 text-xs md:text-base hover:text-black"
            >
              Contact <ExternalLink className="size-3" />
            </Link>
          </div>
          <div
            id="second-navbar-section"
            className="flex gap-x-2 items-center-"
          >
            <Select>
              <SelectTrigger className="w-[20px]">
                <ChevronDown className="size-5" />{" "}
                {/* seçili olan dilin kısaltması da olabilir. */}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="en" className="text-xs md:text-sm">
                    EN
                  </SelectItem>
                  <SelectItem value="tr" className="text-xs md:text-sm">
                    TR
                  </SelectItem>
                  <SelectItem value="de" className="text-xs md:text-sm">
                    DE
                  </SelectItem>
                  <SelectItem value="fr" className="text-xs md:text-sm">
                    FR
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>
    </div>
  );
};
