import React from "react";
import myImage from "../assets/myImage.jpeg";
import cvform from "../assets/cv_form.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text column */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-100/70 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Fifth-Year IT Student</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl text-gray-600 font-medium">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
              Ma Kyo Kyo Moe
            </h1>
            <p className="text-blue-600 font-semibold text-lg tracking-wide">
              IT Student &bull; Developer &bull; Lifelong Learner
            </p>
          </div>

          <p className="text-gray-600 text-base sm:text-lg max-w-lg leading-relaxed">
            I'm a fifth-year Information Technology student with interests in
            software development , business technology solutions and software project management .
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#skills"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 transition flex items-center space-x-2"
            >
              <span>View My Projects</span>
              <span>→</span>
            </a>
                <a 
        href={cvform} 
        download="Ma_Kyo_Kyo_Moe_CV.pdf"
        className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-medium px-6 py-3 rounded-xl transition flex items-center space-x-2"
        >
        <span>⬇ Download CV</span>
        </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-4 text-gray-600">
            <a
              href="https://github.com/kyokyomoe"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white border border-gray-200 rounded-full hover:text-blue-600 shadow-sm transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/candy-kyo/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white border border-gray-200 rounded-full hover:text-blue-600 shadow-sm transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:candykyo54@gmail.com"
              className="p-2.5 bg-white border border-gray-200 rounded-full hover:text-blue-600 shadow-sm transition"
            >
              Email
            </a>
              <a
            href="https://tel:09793323995"
            className="p-2.5 bg-white border border-gray-200 rounded-full hover:text-blue-600 shadow-sm transition flex items-center justify-center"
          >
            Phone
          </a>
          </div>
        </div>

        {/* Right image column */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-200 to-blue-400 p-2 shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-blue-50 rounded-full overflow-hidden flex items-end justify-center">
              {/* Replace with your image asset path */}
              <img
                src={myImage}
                alt="Ma Kyo Kyo Moe"
                className="w-full h-full object-cover object-top"
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
