import React from "react";
import { Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="w-full h-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 shadow-lg">
        <div className="max:w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-50 justify-center text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-5 ">
              <div className="p-2 align-left">
                <h1 className="text-2xl font-semibold mb-3 text-white">
                  Vivek Bhekare
                </h1>
                <p className="text-white">
                  Building the future of web development
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-white mb-3 mt-2">
                  Quick Links
                </h1>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#About"
                      className="text-sm text-white hover:underline"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Project"
                      className="text-sm text-white hover:underline"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      className="text-sm text-white hover:underline"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-2 rouded-xl">
                <h1 className="text-2xl font-semibold mb-4 text-white">
                  Connect
                </h1>

                <div className=" flex text-white justify-center">
                  <a href="#">
                    <Twitter />
                  </a>
                  <a href="https://github.com/Vivekgethub2023">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-white mt-7 pb-3">
          &copy; 2025 Vivek Bhekare. All rights reserved.
        </p>
      </footer>
    </>
  );
}
