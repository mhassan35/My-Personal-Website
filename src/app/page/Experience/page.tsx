"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/utils/ExperienceData";

const ExperiencePage = () => {
  return (
    <div id="Experience" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-oswald text-4xl font-semibold text-indigo-600">
            Experience
          </h1>
          <h2 className="text-xl text-gray-500 mt-2">
            The latest projects I have created
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h5 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h5>
                <p className="text-gray-500 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  <Link href={project.demo} target="_blank">
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                      Demo
                    </button>
                  </Link>
                  <Link href={project.code} target="_blank">
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
                      Code
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;

