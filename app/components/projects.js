// app/components/Projects.js
"use client";

import Reveal from "./Reveal";

export default function Projects() {
  const items = [
    { title: "Resume-Generator", desc: "Developed an intelligent resume generator leveraging Python and Generative AI to automate the creation of professional, tailored resumes.The system uses large language models (LLMs) to dynamically generate content—including career summaries, job-specific bullet points, and personalized objective statements—based on user input such as job title, experience, and skills.", link: "https://github.com/Shreya-vashistha/resume-generator" },
    { title: "Sophia AI", desc: "Developed an AI-powered voice assistant using Python, OpenAI API, and speech recognition to perform web searches, system tasks, and answer queries. Automated routine operations and integrated natural language responses for a seamless, interactive user experience.", link: null },
    { title: "RozgaarNow", desc: "Developed a job marketplace connecting skilled and semi-skilled rural workers (like mechanics, plumbers, gardeners, maids, etc.) with employers. Designed and deployed a mobile-friendly website focused on vernacular usability and simple UX for low-digital-literacy users.Tech Stack: MERN Stack (MongoDB, Express.js, React, Node.js), Tailwind CSS, RESTful APIs,.", link: "https://rozgaar-now.vercel.app/" },
    { title: "AccessIQ", desc: "Java quiz platform :  Created an interactive Java quiz platform with timed assessments, scoring, and admin-controlled question management.Enabled performance tracking and real-time result generation for students. ", link: null },
  ];

  return (
    <section id="projects" className="section">
      <div className="container max-w-7xl mx-auto">
        <Reveal direction="left"><h2 className="text-3xl font-semibold text-pink-400 mb-6">Projects</h2></Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((p, i) => (
            <Reveal key={i} direction="up" delay={i * 0.06}>
              <article className="card-glass">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-300 mt-2">{p.desc}</p>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-block mt-3 px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm hover:bg-pink-500 hover:text-white transition">View Project</a>
                ) : (
                  <span className="inline-block mt-3 px-3 py-1 bg-gray-700/20 text-gray-400 rounded-full text-sm">—</span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
