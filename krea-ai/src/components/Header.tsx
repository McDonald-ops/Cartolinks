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

/**
 * Header component that provides the main navigation and branding for the application.
 * Features include:
 * - Logo and user branding on the left
 * - Center navigation with tool icons
 * - Right-side navigation links and controls
 * - Dark/light mode toggle functionality
 * - Responsive design for mobile and desktop
 */
export default function Header() {
  // State to track current theme mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Toggles between light and dark mode by adding/removing the 'dark' class
   * from the document element. This affects the entire application's theme.
   */
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode on document element to affect entire app
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="bg-white dark:bg-black px-4 sm:px-6 lg:px-8 pt-4">
      <div className="flex items-center justify-between h-16">
        {/* Left side - Logo and User branding */}
        <div className="flex items-center space-x-4">
          {/* Main logo with theme-aware colors */}
          <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-xl">K</span>
          </div>
          
          {/* Rainbow gradient circle icon */}
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-white"></div>
          </div>
          
          {/* Username with dropdown indicator */}
          <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 cursor-pointer">
            <span className="text-base font-medium">benevolentnimblebat</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        {/* Center - Main navigation icons (hidden on mobile, visible on large screens) */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-lg p-1">
          {/* Home navigation */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Home className="w-6 h-6" />
          </button>
          {/* Image generation tool */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <ImageIcon className="w-6 h-6" />
          </button>
          {/* Video generation tool */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Video className="w-6 h-6" />
          </button>
          {/* External link tool */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <ArrowUpRight className="w-6 h-6" />
          </button>
          {/* Lightning/fast generation tool */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Zap className="w-6 h-6" />
          </button>
          {/* Text generation tool */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Type className="w-6 h-6" />
          </button>
          {/* File/folder management */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-md transition-colors cursor-pointer">
            <Folder className="w-6 h-6" />
          </button>
        </div>

        {/* Right side - Navigation Links and Control Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Navigation links (hidden on mobile, visible on medium screens and up) */}
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
          
          {/* Control buttons */}
          <div className="flex items-center space-x-1.5">
            {/* Notification bell */}
            <button className="p-1.5 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
              <Bell className="w-5 h-5" />
            </button>
            
            {/* Theme toggle button - switches between sun (light mode) and moon (dark mode) icons */}
            <button 
              onClick={toggleTheme}
              className="p-1.5 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            {/* User profile/avatar button with rainbow gradient */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
