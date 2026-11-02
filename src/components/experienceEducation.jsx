import React from "react";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <span className="p-2 bg-blue-600 text-white rounded-lg">💼</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Work Experience
              </h2>
            </div>

            <div className="space-y-6 border-l-2 border-blue-200 pl-6 ml-4">
              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></span>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Business Support
                  </h3>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
                    Present
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Handle data entry and money management for family business
                  using Google Sheets and digital tools.
                </p>
              </div>

              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></span>
                <h3 className="font-bold text-gray-900 text-lg">
                  Software Development Experience
                </h3>
                <p className="text-sm text-gray-600">
                  Completed A to Z Developer course and practiced React,
                  Angular, and Flutter through university projects.
                </p>
              </div>

              <div className="relative space-y-1">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></span>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-900 text-lg">
                    English Tutor
                  </h3>
                  <span className="text-xs text-gray-400">
                    March 2024 – May 2024
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Taught English to students and improved communication skills.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education, Language Skills & Certificates */}
          <div className="space-y-10">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="p-2 bg-blue-600 text-white rounded-lg">
                  🎓
                </span>
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex justify-between items-center shadow-sm">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Technological University (Thanlyin)
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Bachelor of Computer Engineering and Information Technology
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-2">
                    Fifth Year Student
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                  2021 – Present
                </span>
              </div>
            </div>

            {/* Language Skills */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="p-2 bg-blue-600 text-white rounded-lg">
                  🌐
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Language Skills
                </h2>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-4 shadow-sm">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-gray-800">English</span>
                    <span className="text-gray-500 text-xs">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-gray-800">
                      Japanese
                    </span>
                    <span className="text-gray-500 text-xs">
                      N3 Passed (learning N2)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
