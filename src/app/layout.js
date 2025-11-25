import "./globals.css";

export const metadata = {
  title: "Anup Maharjan – Full-Stack Web & Backend Developer",
  metadataBase: new URL("https://anup-maharjan.com.np"),
  description:
    "I’m Anup Maharjan, a passionate full-stack and backend developer from Kathmandu, Nepal. Skilled in Node.js, Express, React, TypeScript, PostgreSQL, MongoDB and more.",
  keywords: [
    "Anup Maharjan",
    "backend developer",
    "full-stack developer",
    "Node.js developer Nepal",
    "React developer Nepal",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: "Anup Maharjan" }],
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://anup-maharjan.com.np",
    title: "Anup Maharjan – Full-Stack Web & Backend Developer",
    description:
      "I build scalable backend systems and full-stack applications using modern web technologies.",
    images: [
      {
        url: "/assets/og-image.jpg", // Replace with your image
        width: 1200,
        height: 630,
        alt: "Anup Maharjan Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anup Maharjan – Full-Stack Web & Backend Developer",
    description:
      "Backend & Full-Stack Developer skilled in modern web technologies.",
    images: ["/assets/twitter-image.jpg"], // Replace with your image
  },

  themeColor: "#1C1C27",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
