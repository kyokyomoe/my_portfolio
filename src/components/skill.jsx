import React from "react";

const skillsList = [
  { name: "React", type: "Frontend", icon: "⚛" },
  { name: "Angular", type: "Frontend", icon: "🅰" },
  { name: "Flutter", type: "Mobile", icon: "💙" },
  { name: "PHP", type: "Backend", icon: "🐘" },
  { name: "Java", type: "Backend", icon: "☕" },
  { name: "C++", type: "Programming", icon: "⚙" },
  { name: "Laravel", type: "Framework", icon: "🔴" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
          <span className="w-6 h-0.5 bg-blue-600"></span>
          <span>My Skills</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Technologies I Work With
          </h2>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Always learning. Always improving.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition group"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition">
                {skill.icon}
              </div>
              <h3 className="font-bold text-gray-900">{skill.name}</h3>
              <p className="text-xs text-gray-400 mt-1">{skill.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
