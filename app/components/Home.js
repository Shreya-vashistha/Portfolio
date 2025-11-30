// app/components/Hero.js
"use client";

import Reveal from "./Reveal";

export default function Home() {
  return (
    <section id="hero" className="section container grid md:grid-cols-2 gap-8 items-center py-6">
      <Reveal direction="left" delay={0}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi — I’m <span className="text-pink-400">Shreya Vashistha</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl">
           Computer Science undergraduate with a strong foundation in JAVA , Full-Stack Development, Data Structures, and problem-solving also have a basic understanding of Artificial Intelligence and Machine Learning , seeking opportunities in software development to apply practical skills, contribute to impactful projects, and grow collaborative environment. 
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2 bg-pink-500 rounded-lg font-semibold hover:scale-105 transition">View Projects</a>
            <a href="/Shreya_Vashistha_Resume.pdf" download className="px-5 py-2 border border-pink-500 text-pink-400 rounded-lg font-semibold hover:scale-105 transition">Download Resume</a>
          </div>
        </div>
      </Reveal>

      <Reveal direction="right" delay={0.12}>
        <div className="card-glass w-full max-w-[360px] mx-auto">
          <img src="/profile.jpg" alt="Shreya" className="w-52 h-52 object-cover rounded-lg mx-auto" />
          <div className="mt-3 text-center">
            <h3 className="font-semibold">Shreya Vashistha</h3>
            <p className="text-sm text-gray-400">Full-stack developer • Java Developer</p>
          </div>
        </div>
      </Reveal>

     

    </section>
  );
}
