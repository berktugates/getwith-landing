import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../button";
import { Send } from "lucide-react";
import { Icon } from "./Icon";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="mt-6 border-t">
      <div
        id="first-footer-section"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 my-4"
      >
        <div id="stay-connected">
          <h1 className="text-white text-lg mb-4">Stay Connected</h1>
          <h1 className="text-gray-400 text-xs my-2">
            Get app updates or reach out for collaborations — no spam, just what
            matters.
          </h1>
          <div id="input-button" className="flex items-center mt-2 gap-x-2">
            <Input
              className="text-white text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <Button variant={"outline"}>
              <Send />
            </Button>
          </div>
        </div>
        <div id="quick-links">
          <h1 className="text-white text-lg mb-4">Quick Links</h1>
          <ul className="text-white text-sm flex flex-col">
            <a href="/">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </ul>
        </div>
        <div id="contact-us" className="text-white">
          <h1 className="text-white text-lg mb-4">Contact Us</h1>
          <h1 id="location" className="text-sm">
            123 Innovation Street Tech City, TC 12345
          </h1>
          <h1 id="email" className="text-sm">
            Email: hello@example.com
          </h1>
        </div>
        <div id="accounts" className="flex flex-col">
          <h1 className="text-white text-lg mb-4">Follow Us</h1>
          <ul className="flex gap-x-2">
            <Icon name="x" />
            <Icon name="tiktok" />
            <Icon name="instagram" />
            <Icon name="linkedin" />
          </ul>
        </div>
      </div>
      <div
        id="second-footer-section"
        className="border-gray-200 flex flex-col items-center justify-between text-white text-sm mt-6 border-t p-8"
      >
        <h1>© 2025 GetWith. All rights reserved.</h1>
        <ul className="flex items-center text-sm gap-x-1 mt-2 hover:cursor-pointer">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookie Settings</a>
        </ul>
      </div>
    </footer>
  );
};
