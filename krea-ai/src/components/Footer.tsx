export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Krea AI Logo */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-2xl">K</span>
            </div>
            <span className="text-2xl font-bold">Krea AI</span>
          </div>

          {/* Right side - Mobbin branding and links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-4 text-gray-400">
              <span className="text-lg font-semibold">curated by</span>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-black font-black text-lg">M</span>
                </div>
                <span className="font-black text-2xl">Mobbin</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
