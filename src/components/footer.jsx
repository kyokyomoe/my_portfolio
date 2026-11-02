import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-blue-600 font-bold">
          <span className="bg-blue-50 p-1.5 rounded-lg text-sm">&lt;/&gt;</span>
          <span className="text-gray-900">Ma Kyo Kyo Moe</span>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2026 Ma Kyo Kyo Moe. All rights reserved.
        </p>

        <div className="flex items-center space-x-6 text-xs text-gray-600">
          <a href="#privacy" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-blue-600">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
