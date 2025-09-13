"use client";

import { 
  Image as ImageIcon, 
  Play, 
  Zap, 
  ArrowUpRight, 
  Type, 
  Mic, 
  User, 
  Brain,
  ExternalLink
} from "lucide-react";

const toolsData = [
  {
    id: 1,
    icon: ImageIcon,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram",
    isNew: true,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    icon: Play,
    title: "Video",
    description: "Generate videos with Haiuo, Pika, Runway, Luma, and more",
    isNew: false,
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 3,
    icon: Zap,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
    isNew: true,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    id: 4,
    icon: ArrowUpRight,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K",
    isNew: true,
    color: "bg-green-50 text-green-600"
  },
  {
    id: 5,
    icon: Type,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    isNew: true,
    color: "bg-pink-50 text-pink-600"
  },
  {
    id: 6,
    icon: Mic,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio",
    isNew: true,
    color: "bg-red-50 text-red-600"
  },
  {
    id: 7,
    icon: User,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    isNew: true,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    id: 8,
    icon: Brain,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters",
    isNew: false,
    color: "bg-orange-50 text-orange-600"
  }
];

export default function GenerateTools() {
  return (
    <section className="py-8 sm:py-12">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Generate</h2>
        <a 
          href="#" 
          className="text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center space-x-1 text-sm sm:text-base"
        >
          <span>Show all</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {toolsData.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <div
              key={tool.id}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 hover:border-gray-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${tool.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                {tool.isNew && (
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {tool.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {tool.description}
              </p>

              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors group-hover:bg-gray-200">
                Open
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
