import React from "react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-6">
          <span className="p-2 bg-blue-600 text-white rounded-lg">🏆</span>
          <h2 className="text-2xl font-bold text-gray-900">Certificates</h2>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl flex items-center space-x-4 shadow-sm">
          <div className="p-4 bg-white text-blue-600 rounded-xl shadow-sm text-2xl font-bold">
            📜
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">
              A to Z Developer Course
            </h3>
            <p className="text-sm text-emerald-600 font-medium">
              Completed & Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
