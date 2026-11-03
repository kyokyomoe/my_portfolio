import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skill";
import ExperienceEducation from "./components/experienceEducation";
import Certificates from "./components/certificate";
import ContactCTA from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ExperienceEducation />
      <Certificates />
      <ContactCTA />
      <Footer />
    </div>
  );
}
