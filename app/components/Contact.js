// app/components/Contact.js
"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Message sent (demo)"); setFormData({ name: "", email: "", message: "" }); };

  return (
    <section id="contact" className="section">
      <div className="container max-w-4xl mx-auto">
        <Reveal direction="left"><h2 className="text-3xl font-semibold text-pink-400 mb-4 text-center">Contact Me</h2></Reveal>
        <Reveal direction="up" delay={0.06}>
          <p className="text-gray-300 text-center mb-8">I’m open to new opportunities — feel free to reach out.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal direction="up" delay={0.12}>
            <form onSubmit={handleSubmit} className="card-glass">
              <label className="block text-gray-300 mb-1">Name</label>
              <input name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white/6 mb-4" placeholder="Your Name" />

              <label className="block text-gray-300 mb-1">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-white/6 mb-4" placeholder="you@example.com" />

              <label className="block text-gray-300 mb-1">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required className="w-full px-4 py-2 rounded-lg bg-white/6 mb-4" placeholder="Your message..." />

              <button type="submit" className="w-full py-3 bg-pink-500 text-white rounded-lg">Send Message</button>
            </form>
          </Reveal>

          <Reveal direction="right" delay={0.18}>
            <div className="card-glass flex flex-col items-center justify-center">
              <a href="mailto:shreya@example.com" className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg mb-4">Quick Email</a>
              <div className="flex gap-6 text-3xl text-gray-300">
                <a href="https://github.com/Shreya-vashistha" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://in.linkedin.com/in/shreya-vashistha27" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
