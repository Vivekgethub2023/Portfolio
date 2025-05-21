import React from "react";
export default function About() {
  return (
    <div
      id="About"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            Hi, I am Vivek
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hey, I am a Web Developer and Web Designer (UI/UX). I have worked on
            many projects during internships. I loved to solve complex problems.
            I am a fresher with strong background in web development.
          </p>
        </div>
        {/* Profile Image */}
        <div className="relative flex item-center justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="/images/Profile Image.jpeg"
            alt="Profile Image"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional background */}
        <div className="bg-white shadow-md mb-16 p-6 rounded-md">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Professional Journey
          </h1>

          <div classname="space-y-6 text-gray-600 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              As I embarked on my journey to become a frontend developer, I
              leveraged academic knowledge and hands-on experience through
              internships to excel in this field.
            </p>
            <p className="text-lg text-gray-600">
              Key Highlights: - Developed a strong foundation in frontend
              development through academic coursework and online certifications.
              - Gained practical experience through internships, working on
              real-world projects and collaborating with cross-functional teams.
              - Built a portfolio of projects showcasing my skills in
              React,Tailwind and JavaScript. - Continuously updated my skills to
              stay current with industry trends and best practices.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rouded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-indigo-600">
              Frontend Developer
            </h1>
            <p className="text-lg text-gray-600">
              As a dedicated frontend developer, I've embarked on a journey of
              continuous learning and growth, driven by a passion for crafting
              exceptional user experiences. Through a combination of academic
              knowledge and hands-on experience, I've developed a strong
              foundation in frontend development.
            </p>
          </div>
          <div className="p-6 bg-white rouded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-teal-600">
              Web Designer
            </h1>
            <p className="text-lg text-gray-600">
              As a UI/UX designer, I've embarked on a journey of creating
              user-centered designs that drive meaningful experiences. Through a
              combination of design principles, user research, and iterative
              testing, I've developed a strong foundation in crafting intuitive
              and visually appealing interfaces. I've designed and prototyped
              user interfaces using tools like Figma, Sketch and JustinMind too.
            </p>
          </div>
          <div className="p-6 bg-white rouded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold mb-10 text-purple-600">
              Wordpress Developer
            </h1>
            <p className="text-lg text-gray-600">
              As a WordPress developer, I've built a strong foundation in
              creating custom, scalable, and secure websites using the WordPress
              platform. Through hands-on experience and continuous learning,
              I've developed expertise in theme development, plugin
              customization, and website optimization. I've created custom
              themes, plugins, and templates to meet specific client needs.
            </p>
          </div>
        </div>

        {/* Professional Interest */}
        <div className="bg-white p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Beyond Coding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-700 font-semibold">
                Open source Contribution
              </h3>
              <p className="text-lg text-gray-800">
                Contributing to open-source projects, showcasing expertise and
                commitment to the developer community just like on GitHub.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-700 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-800">
                Staying up-to-date with industry trends, new technologies, and
                best practices. Continuosly practicing on my skills that will
                lead me into the frontend developer's future.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-700 font-semibold">
                Time Management
              </h3>
              <p className="text-lg text-gray-800">
                Effectively prioritizing tasks and managing time to meet
                deadlines. And to keep me updated on day to day life.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Problem Solving
              </h3>
              <p className="text-lg text-gray-800">
                Approaching complex problems with a logical and methodical
                mindset. Approaching myself untill the end of thinking.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700 p-12 px-5 text-white rounded-xl text-center">
          <h3 className="text-2xl font-semibold text-white mb-5">
            Let's Work Together
          </h3>
          <p className="text-lg text-white mx-auto mb-3">
            Let's build a professional network and explore potential
            collaborations.
          </p>

          <a
            href="#"
            className="inline-block bg-white text-indigo-800 px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-color duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
