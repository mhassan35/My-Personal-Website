"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigationData } from "@/utils/NavigationData";

const NavigationBar: React.FC = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <header className="flex items-center justify-between px-10 py-4 fixed top-0 left-0 w-full z-50 border-b-[1px] border-gray-400 ">
        <div className="flex text-gray-300 items-center cursor-pointer" onClick={() => router.push("/")}>
          M Hassan
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-10">
            {navigationData.map((item, index) => (
              <li key={index}>
                <button onClick={() => router.push(item.route)} className="text-gray-300">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button onClick={() => setSidebarOpen(true)} className="md:hidden text-gray-300 text-2xl">
          <FaBars />
        </button>
      </header>

      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 p-6 flex flex-col space-y-6 transform transition-transform duration-300 ease-in-out z-50
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={() => setSidebarOpen(false)} className="self-end text-gray-300 text-2xl"
        >
          <FaTimes />
        </button>
        {navigationData.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              router.push(item.route);
              setSidebarOpen(false);
            }}
            className="text-lg font-medium text-gray-300"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
