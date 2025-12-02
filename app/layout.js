import "./globals.css";

export const metadata = {
  title: "Shreya Vashistha | Software Engineer | Full Stack Developer | Java Developer",
  description:
    "Portfolio of Shreya Vashistha — Software Engineer, Full Stack Developer, and Java Developer. Explore projects, skills, experience, and achievements.",
  keywords: [
    "Shreya Vashistha",
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "Web Developer",
    "MERN Developer",
    "Portfolio",
    "Shreya Portfolio"
  ],
  metadataBase: new URL("https://shreya-vashistha.vercel.app"),
  openGraph: {
    title: "Shreya Vashistha | Software Engineer & Full Stack Developer",
    description:
      "Official portfolio of Shreya Vashistha — Software Engineer, Full Stack Developer and Java Developer.",
    url: "https://shreya-vashistha.vercel.app/",
    siteName: "Shreya Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YBW48LQtxgCo_YByWDV1YDxRdDH4o_LgPw1ImBp_qU4" />
        {/* JSON-LD Structured Data (Google Knowledge Graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shreya Vashistha",
              url: "https://shreya-vashistha.vercel.app/",
              image: "https://shreya-vashistha.vercel.app/profile.jpg",
              jobTitle: "Software Engineer, Full Stack Developer, Java Developer",
              sameAs: [
                "https://www.linkedin.com/in/shreya-vashistha27",
                "https://github.com/shreya-vashistha"
              ],
              description:
                "Shreya Vashistha is a Software Engineer, Full Stack Developer and Java Developer skilled in building modern applications and scalable solutions."
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
