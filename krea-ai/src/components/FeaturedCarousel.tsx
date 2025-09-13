"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";

const carouselData = [
  {
    id: 1,
    label: "NEW IMAGE MODEL",
    title: "WAN 2.2 Image generation",
    description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    buttonText: "Try WAN 2.2",
    image: "/api/placeholder/600/400",
    isNew: true
  },
  {
    id: 2,
    label: "OPEN SOURCE MODEL",
    title: "FLUX.1 Krea",
    description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    buttonText: "Try FLUX.1",
    image: "/api/placeholder/600/400",
    isNew: false
  },
  {
    id: 3,
    label: "VIDEO MODEL",
    title: "Motion Generator",
    description: "Create stunning videos with our advanced motion generation technology. Perfect for animations and dynamic content.",
    buttonText: "Try Motion",
    image: "/api/placeholder/600/400",
    isNew: true
  },
  {
    id: 4,
    label: "TEXT MODEL",
    title: "Text Generator Pro",
    description: "Generate high-quality text content with our state-of-the-art language model. Perfect for creative writing and content creation.",
    buttonText: "Try Text Pro",
    image: "/api/placeholder/600/400",
    isNew: false
  },
  {
    id: 5,
    label: "AUDIO MODEL",
    title: "Sound Creator",
    description: "Generate realistic audio and music with our advanced audio generation model. Perfect for podcasts and sound effects.",
    buttonText: "Try Sound",
    image: "/api/placeholder/600/400",
    isNew: true
  },
  {
    id: 6,
    label: "3D MODEL",
    title: "3D Object Generator",
    description: "Create detailed 3D objects and scenes with our cutting-edge 3D generation technology.",
    buttonText: "Try 3D",
    image: "/api/placeholder/600/400",
    isNew: false
  },
  {
    id: 7,
    label: "STYLE MODEL",
    title: "Style Transfer Pro",
    description: "Transform images with artistic styles using our advanced style transfer algorithms.",
    buttonText: "Try Style",
    image: "/api/placeholder/600/400",
    isNew: true
  },
  {
    id: 8,
    label: "ANIMATION MODEL",
    title: "Character Animator",
    description: "Bring characters to life with our sophisticated animation generation technology.",
    buttonText: "Try Animation",
    image: "/api/placeholder/600/400",
    isNew: false
  },
  {
    id: 9,
    label: "ENHANCEMENT MODEL",
    title: "Image Enhancer",
    description: "Enhance and upscale images with our powerful enhancement algorithms for crystal-clear results.",
    buttonText: "Try Enhancement",
    image: "/api/placeholder/600/400",
    isNew: true
  }
];

export default function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  // Update selected index when carousel moves
  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial state

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-8 sm:py-12">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {carouselData.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0 pl-2 sm:pl-4">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {slide.label}
                        </span>
                        {slide.isNew && (
                          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {slide.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex justify-end">
                      <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                  
                  <div className="h-48 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">
                      {slide.title} Preview
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex
                  ? "bg-black"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
