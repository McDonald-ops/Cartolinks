"use client";

import { 
  Image as ImageIcon, 
  Video, 
  Zap, 
  ArrowUpRight, 
  Type, 
  Mic, 
  User, 
  Brain,
  ChevronDown
} from "lucide-react";

/**
 * Tools data configuration for the GenerateTools component.
 * Each tool includes:
 * - id: Unique identifier
 * - icon: Lucide React icon component
 * - title: Tool name
 * - description: Brief description of the tool's functionality
 * - isNew: Boolean flag for "New" badge display
 * - color: Text color for the icon (usually white for contrast)
 * - bgColor: Background color for the icon container
 */
const toolsData = [
  {
    id: 1,
    icon: ImageIcon,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram",
    isNew: true,
    color: "text-white",
    bgColor: "#4D6276"
  },
  {
    id: 2,
    icon: Video,
    title: "Video",
    description: "Generate videos with Haiuo, Pika, Runway, Luma, and more",
    isNew: false,
    color: "text-white",
    bgColor: "#F2AD19"
  },
  {
    id: 3,
    icon: Zap,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops",
    isNew: false,
    color: "text-white",
    bgColor: "#2CA6EE"
  },
  {
    id: 4,
    icon: ArrowUpRight,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K",
    isNew: true,
    color: "text-white",
    bgColor: "#131313"
  },
  {
    id: 5,
    icon: Type,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations",
    isNew: true,
    color: "text-white",
    bgColor: "#4D2877"
  },
  {
    id: 6,
    icon: Mic,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio",
    isNew: true,
    color: "text-white",
    bgColor: "#3A635F"
  },
  {
    id: 7,
    icon: User,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    isNew: true,
    color: "text-white",
    bgColor: "#1C1E1F"
  },
  {
    id: 8,
    icon: Brain,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters",
    isNew: false,
    color: "text-gray-900",
    bgColor: "#EEEDDC"
  }
];

/**
 * GenerateTools component displays a grid of AI generation tools with interactive cards.
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 4 on desktop)
 * - Each tool card shows icon, title, description, and "New" badge if applicable
 * - Hover effects and smooth transitions
 * - "Open" button for each tool
 * - "Show all" link to expand the view
 * - Dark mode support for the heading
 */
export default function GenerateTools() {
  return (
    <section className="py-8 sm:py-12">
      {/* Section header with title and "Show all" link */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Generate</h2>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center space-x-1 text-sm sm:text-base"
        >
          <ChevronDown className="w-4 h-4" />
          <span>Show all</span>
        </a>
      </div>

      {/* Responsive grid of tool cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {toolsData.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <div
              key={tool.id}
              className="bg-white rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                {/* Tool icon with custom background color */}
                <div 
                  className={`p-3 rounded-lg flex-shrink-0`}
                  style={{ backgroundColor: tool.bgColor }}
                >
                  <IconComponent className={`w-15 h-15 ${tool.color}`} />
                </div>

                {/* Tool information */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors whitespace-nowrap">
                      {tool.title}
                    </h3>
                    {/* "New" badge for recently added tools */}
                    {tool.isNew && (
                      <span className="text-xs font-semibold text-white bg-blue-600 px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Action button */}
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors group-hover:bg-gray-200 flex-shrink-0">
                  Open
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
