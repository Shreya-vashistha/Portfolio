// app/components/Experience.js
"use client";

import Reveal from "./Reveal";

export default function Experience() {
  const experiences = [
    { role: "Google Cloud Generative AI Virtual Internship", org: "SmartBridge & SmartInternz", duration: "Jun–Aug 2025", details: ["Completed hands-on internship focused on Google Cloud and Generative AI. Learned and applied Generative AI models on cloud infrastructure "] },
    { role: "Deloitte Australia Job Simulation", org: "Forage", duration: "Jun 2025", details: ["Completed a job simulation involving development and coding . Wrote a proposal for creating a dashboard "] },
  ];

  return (
    <section id="experience" className="section">
      <div className="container max-w-7xl mx-auto">
        <Reveal direction="left"><h2 className="text-3xl font-semibold text-pink-400 mb-6">Experience</h2></Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((e, i) => (
            <Reveal key={i} direction="up" delay={i * 0.06}>
              <article className="card-glass">
                <h3 className="text-xl font-bold">{e.role}</h3>
                <p className="text-gray-300">{e.org}</p>
                <p className="text-gray-400 text-sm mt-1">{e.duration}</p>
                <ul className="mt-3 list-disc list-inside text-gray-300">
                  {e.details.map((d, idx) => <li key={idx}>{d}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
