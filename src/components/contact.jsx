import React from "react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between shadow-sm">
          <div className="space-y-3 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Let’s Connect!
            </h2>
            <p className="text-gray-600 max-w-md">
              Feel free to reach out for collaboration, opportunities, or just a
              friendly hello.
            </p>
          </div>
          <a
            href="mailto:candykyo54@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/20 flex items-center space-x-2 transition"
          >
            <span>✉ Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
