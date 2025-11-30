// app/components/Skills.js
"use client";

import Reveal from "./Reveal";

export default function Skills() {
  const categories = [
    { title: "Programming Languages", items: ["C","Java","Python","HTML5","CSS3","JavaScript"] },
    { title: "Frameworks & Libraries", items: ["React.js","Node.js","MERN Stack","RESTful APIs"] },
    { title: "Core CS Concepts", items: ["DSA","OOPS","Operating Systems","Computer Networks","DBMS","AI","ML"] },
    { title: "Databases", items: ["MySQL","MongoDB"] },
    { title: "Developer Tools", items: ["VS Code","Git & GitHub","Linux","Terminal","PyCharm","IntelliJ IDEA"] },
    { title: "Other Technical Skills", items: ["UI/UX","Generative AI"] },
    { title: "Soft Skills", items: ["Communication","Troubleshooting","Flexibility","Teamwork","Leadership"] },
  ];

  return (
    <section id="skills" className="section">
      <div className="container max-w-7xl mx-auto">
        <Reveal direction="left">
          <h2 className="text-3xl font-semibold text-pink-400 mb-6">Skills</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c, i) => (
            <Reveal key={i} direction="up" delay={i * 0.06}>
              <div className="card-glass">
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((it, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/6 text-sm text-gray-200">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
