// app/components/Certificates.js
"use client";

import Reveal from "./Reveal";

export default function Certificates() {
  const certs = [
    "IIT Roorkee : Data Analytics with Python issued by Nptel — Silver (May 2025)",
    "DSA with Java — Apna College (Sep 2024)",
    "Full Stack Web Development — Apna College (Jan 2025)",
    "Software Engineering Simulation — Accenture (Forage, Jun 2025)",
  ];

  return (
    <section id="certificates" className="section">
      <div className="container max-w-7xl mx-auto">
        <Reveal direction="left"><h2 className="text-3xl font-semibold text-pink-400 mb-6">Certificates</h2></Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <Reveal key={i} direction="up" delay={i * 0.05}>
              <div className="card-glass text-gray-200">{c}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
