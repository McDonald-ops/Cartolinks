"use client";

import { useState } from "react";
import { 
  Home, 
  Image as ImageIcon, 
  Video, 
  ArrowUpRight, 
  Zap, 
  Type, 
  Folder,
  Bell, 
  Sun, 
  Moon, 
  Grid3X3,
  HelpCircle,
  ChevronDown
} from "lucide-react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode on document
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Left side - Logo and User */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          
          {/* Rainbow circle icon */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <span className="text-sm font-medium">benevolentnimblebat</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        {/* Center - Navigation Icons */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-lg p-1">
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Home className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <ImageIcon className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <ArrowUpRight className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Zap className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Type className="w-6 h-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Folder className="w-6 h-6" />
          </button>
        </div>

        {/* Right side - Navigation Links and Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <nav className="hidden md:flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-1.5 bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg transition-colors">
              <ImageIcon className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600 hover:text-gray-900 font-medium">Gallery</span>
            </a>
            <a href="#" className="flex items-center space-x-1.5 bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg transition-colors">
              <HelpCircle className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600 hover:text-gray-900 font-medium">Support</span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-1.5">
            <button className="p-1.5 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
              <Bell className="w-5 h-5" />
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-1.5 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
