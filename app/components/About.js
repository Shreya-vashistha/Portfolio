// app/components/About.js
"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section w-full px-6 md:px-12">
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <Reveal direction="left" delay={0}>
          <div className="card-glass">
            <h2 className="text-3xl font-semibold text-pink-400 mb-3">About</h2>
            <p className="text-gray-300">
              I am <b>Shreya Vashistha</b> A Computer Science undergraduate from BSA College, Mathura, with a strong foundation in <b>JAVA, MERN Stack Development, Data Structures & Algorithms, and Generative AI</b>. I enjoy building practical, real-world solutions and exploring how technology can simplify everyday problems.
              
              I’ve gained hands-on experience through internships like the <b>Google Cloud Generative AI Virtual Internship</b> and the <b>Deloitte Australia Technology Job Simulation</b>, where I worked on cloud-based AI models, dashboards, and technical problem-solving tasks.
              
              I’ve built several impactful projects, including an <b>AI-powered Resume Generator</b>, a <b>Python-based Voice Assistant (Sophia AI)</b>, and <b>RozgaarNow</b>, a rural job marketplace designed to connect skilled workers with employers using a user-friendly MERN-based platform.
              
              With strong skills in <b>C, Java, Python, JavaScript, React.js, Node.js, MySQL, and UI/UX</b>, I enjoy crafting scalable, intuitive applications. I’m also passionate about learning, experimenting with new technologies, and continuously improving my problem-solving abilities.
              
              I’m currently seeking opportunities in <b>software development</b>, where I can contribute to meaningful projects, grow in a collaborative environment, and apply modern tech to solve real-world challenges.

            </p>
            <ul className="mt-4 list-disc list-inside text-gray-400">
              <li>Google Cloud Generative AI Virtual Internship — Jun–Aug 2025</li>
              <li>Deloitte Australia Job Simulation — Jun 2025</li>
              <li>B.Tech (CGPA 8.3) — BSA College</li>
            </ul>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.12}>
          <div className="card-glass rounded-full flex items-center justify-center">
            <img src="/profile2.png" alt="Shreya" className="w-52 h-52 object-cover rounded-full" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
