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
    <header className="bg-white dark:bg-black px-3 sm:px-4 lg:px-6 pt-3">
      <div className="flex items-center justify-between h-12">
        {/* Left side - Logo and User branding */}
        <div className="flex items-center space-x-3">
          {/* Main logo with theme-aware colors */}
          <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-lg">K</span>
          </div>
          
          {/* Rainbow gradient circle icon */}
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          
          {/* Username with dropdown indicator */}
          <div className="flex items-center space-x-1.5 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 cursor-pointer">
            <span className="text-sm font-medium">benevolentnimblebat</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Center - Main navigation icons (hidden on mobile, visible on large screens) */}
        <div className="hidden lg:flex items-center bg-gray-100 rounded-md p-0.5">
          {/* Home navigation */}
          <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-sm transition-colors cursor-pointer">
            <Home className="w-5 h-5" />
          </button>
          {/* Image generation tool */}
          <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-sm transition-colors cursor-pointer">
            <ImageIcon className="w-5 h-5" />
          </button>
          {/* Video generation tool */}
          <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-sm transition-colors cursor-pointer">
            <Video className="w-5 h-5" />
          </button>
          {/* External link tool */}
          <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-sm transition-colors cursor-pointer">
            <ArrowUpRight className="w-5 h-5" />
          </button>
          {/* Lightning/fast generation tool */}
          <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-sm transition-colors cursor-pointer">
            <Zap className="w-5 h-5" />
          </button>
          {/* Text generation tool */}
          <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-sm transition-colors cursor-pointer">
            <Type className="w-5 h-5" />
          </button>
          {/* File/folder management */}
          <button className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-white rounded-sm transition-colors cursor-pointer">
            <Folder className="w-5 h-5" />
          </button>
        </div>

        {/* Right side - Navigation Links and Control Icons */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          {/* Navigation links (hidden on mobile, visible on medium screens and up) */}
          <nav className="hidden md:flex items-center space-x-2">
            <a href="#" className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md transition-colors">
              <ImageIcon className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-xs text-gray-600 hover:text-gray-900 font-medium">Gallery</span>
            </a>
            <a href="#" className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-md transition-colors">
              <HelpCircle className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-xs text-gray-600 hover:text-gray-900 font-medium">Support</span>
            </a>
          </nav>
          
          {/* Control buttons */}
          <div className="flex items-center space-x-1">
            {/* Notification bell */}
            <button className="p-1 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
              <Bell className="w-4 h-4" />
            </button>
            
            {/* Theme toggle button - switches between sun (light mode) and moon (dark mode) icons */}
            <button 
              onClick={toggleTheme}
              className="p-1 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            
            {/* User profile/avatar button with rainbow gradient */}
            <button className="p-1.5 text-gray-600 hover:text-gray-900 transition-colors">
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
