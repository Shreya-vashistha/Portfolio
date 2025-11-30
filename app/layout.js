import './globals.css';

export const metadata = {
  title: "Shreya Vashistha — Portfolio",
  description: "Portfolio of Shreya Vashistha — Full-stack developer, MERN & Generative AI"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-6 md:px-16">
        {children}
      </body>
    </html>
    

  )
}
