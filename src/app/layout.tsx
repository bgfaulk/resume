import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Brian Faulk - Software Engineering Manager",
  description:
    "Software Engineering Manager with 15+ years of experience leading high-performing teams. Expert in Java, API architecture, system performance optimization, and team leadership at ABC Fitness.",
  openGraph: {
    type: "website",
    title: "Brian Faulk - Software Engineering Manager",
    description:
      "Software Engineering Manager with 15+ years of experience leading high-performing teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Faulk - Software Engineering Manager",
    description:
      "Software Engineering Manager with 15+ years of experience leading high-performing teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/resume/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        <main className="pt-[70px] min-h-[calc(100vh-140px)]">{children}</main>
        <footer className="bg-bg-dark text-white py-8 text-center">
          <div className="container-custom">
            <p className="m-0 opacity-90">
              &copy; {new Date().getFullYear()} Brian Faulk. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
