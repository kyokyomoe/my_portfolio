import React from "react";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Work Experience */}
       

  <div className="space-y-8">
  {/* Header */}
  <div className="flex items-center space-x-3">
    <span className="p-2 bg-blue-600 text-white rounded-xl shadow-sm">💼</span>
    <h2 className="text-2xl font-bold text-gray-900">
      Work Experience
    </h2>
  </div>

  {/* Timeline Container */}
  <div className="relative border-l-2 border-blue-100 ml-3 pl-6 space-y-8">
    
    {/* 1. Business Support */}
    <div className="relative space-y-1">
      <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-blue-600 ring-4 ring-white"></span>
      <div className="flex justify-between items-baseline">
        <h3 className="font-semibold text-gray-900 text-base">
          Business Support
        </h3>
        <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium">
          Present
        </span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">
        Handle data entry and money management for family business using Google Sheets and digital tools.
      </p>
    </div>

    {/* 2. App.com.mm Role (Clean & Matching Vibe) */}
    <div className="relative space-y-1">
      <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-blue-600 ring-4 ring-white"></span>
      <div className="flex justify-between items-baseline">
        <div>
          <h3 className="font-semibold text-gray-900 text-base">
            Operation Assistant & Project Admin
          </h3>
          <p className="text-xs font-medium text-blue-600 mt-0.5">App.com.mm</p>
        </div>
        <span className="text-xs text-gray-400">
          June 18, 2026 – Oct 1, 2026
        </span>
      </div>
      
      <ul className="text-sm text-gray-500 space-y-1.5 pt-1 list-disc list-inside leading-relaxed">
        <li>Administered project workflows, ensuring milestone tracking and deliverable execution.</li>
        <li>Coordinated communication across technical, management, and operational teams.</li>
        <li>Managed operational documentation and daily database updates to maintain accuracy.</li>
      </ul>
    </div>

    {/* 3. Software Development Experience */}
    <div className="relative space-y-1">
      <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-blue-600 ring-4 ring-white"></span>
      <h3 className="font-semibold text-gray-900 text-base">
        Software Development Experience
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">
        Completed A to Z Developer course and practiced React, Angular, and Flutter through university projects.
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
