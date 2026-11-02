import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Laptop Artwork Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center h-full">
            <div className="w-full bg-gray-200 rounded-2xl h-48 flex items-center justify-center overflow-hidden relative shadow-inner">
              <span className="text-gray-500 font-mono text-xl">
                &lt;/&gt; Laptop setup mockup
              </span>
            </div>
          </div>

          {/* Center Bio Box */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
              <span className="w-6 h-0.5 bg-blue-600"></span>
              <span>About Me</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Turning Ideas into Real-World Solutions.
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              I'm a 5th year Information Technology student, interested in
              backend development, cloud technologies, and data science. I enjoy
              learning new technologies and building projects that make a
              positive impact.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 pt-2"
            >
              <span>Learn More</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Personal Info Card */}
          <div className="bg-blue-50/60 border border-blue-100/60 rounded-3xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl">🎓</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Birthday</p>
                <p className="text-sm font-semibold text-gray-900">12.4.2004</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl">🏠</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Hometown</p>
                <p className="text-sm font-semibold text-gray-900">
                  Paung, Mon State
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl">✉</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Email</p>
                <p className="text-sm font-semibold text-gray-900">
                  candykyo54@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl">📞</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Phone</p>
                <p className="text-sm font-semibold text-gray-900">
                  09-793323995
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
