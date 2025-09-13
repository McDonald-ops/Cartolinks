export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Krea AI Logo */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold">Krea AI</span>
          </div>

          {/* Right side - Mobbin branding and links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">curated by</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-xs">M</span>
                </div>
                <span className="font-semibold">Mobbin</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
