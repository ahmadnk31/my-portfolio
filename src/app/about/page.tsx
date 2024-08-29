// pages/about.tsx

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center  justify-center bg-black overflow-hidden relative">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
      </Head>

      {/* Animated Aurora Background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 aurora-bg"></div>

      <div className="relative z-10 bg-white p-10 rounded-3xl shadow-2xl my-8  max-w-3xl mx-auto max-sm:mx-4 transform transition duration-500 hover:scale-105">
        <div className="flex flex-col items-center mb-10">
          <div className="mb-6">
            <Image
              src="/ahmadullah.jpg"
              alt="Profile Picture"
              width={200}
              height={300}
              className="rounded w-fit object-cover object-center border-4 border-indigo-300 shadow-lg mix-blend-multiply"
            />
          </div>
          <h1 className="text-5xl font-extrabold mb-2 text-center text-indigo-700">Ahmadullah Nekzad</h1>
          <p className="text-lg text-gray-600 text-center">
            Hello! I&apos;m Ahmadullah Nekzad, a passionate developer with a love for creating amazing web experiences. I specialize in building modern, responsive, and performant applications using the latest technologies.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-indigo-600 mb-2">Background</h2>
            <p className="text-gray-600">
              I have a diverse background in software engineering and design. Over the years, I&apos;ve worked on numerous projects that have helped me hone my skills in front-end and back-end development.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-indigo-600 mb-2">Skills</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>JavaScript, TypeScript</li>
              <li>React, Next.js</li>
              <li>Node.js, Express</li>
              <li>HTML, CSS, Tailwind CSS</li>
              <li>SQL, NoSQL Databases</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-indigo-600 mb-2">Interests</h2>
            <p className="text-gray-600">
              Apart from coding, I love exploring new technologies, contributing to open-source projects, and writing technical blogs. In my free time, I enjoy reading, hiking, and spending time with family and friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
