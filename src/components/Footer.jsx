import React from "react";
import { FaHeart } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Sebrina Musbah. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
            <span>Made by Sebrina Musbah</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
