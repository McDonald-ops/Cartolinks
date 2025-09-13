export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Krea AI Logo */}
          <div className="flex items-center space-x-6 mb-8 md:mb-0">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
              <span className="text-black font-black text-5xl">K</span>
            </div>
            <span className="text-5xl font-bold">Krea AI</span>
          </div>

          {/* Right side - Mobbin branding and links */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-6 text-gray-400">
              <span className="text-3xl font-semibold">curated by</span>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-black text-2xl">M</span>
                </div>
                <span className="font-black text-5xl">Mobbin</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
