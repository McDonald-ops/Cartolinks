"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Carousel data containing information for each featured slide.
 * Each slide includes:
 * - id: Unique identifier
 * - label: Category/tag for the feature
 * - title: Main feature name
 * - description: Detailed description with optional line breaks
 * - buttonText: Call-to-action button text
 * - image: Placeholder image path
 * - isNew: Boolean flag for new feature badges
 */
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
    description: "Create stunning videos with our advanced motion generation technology.<br/> Perfect for animations and dynamic content.",
    buttonText: "Try Motion",
    image: "/api/placeholder/600/400",
    isNew: true
  },
  {
    id: 4,
    label: "TEXT MODEL",
    title: "Text Generator Pro",
    description: "Generate high-quality text content with our state-of-the-art language<br/> model. Perfect for creative writing and content creation.",
    buttonText: "Try Text Pro",
    image: "/api/placeholder/600/400",
    isNew: false
  },
  {
    id: 5,
    label: "AUDIO MODEL",
    title: "Sound Creator",
    description: "Generate realistic audio and music with our advanced audio generation<br/> model. Perfect for podcasts and sound effects.",
    buttonText: "Try Sound",
    image: "/api/placeholder/600/400",
    isNew: true
  },
  {
    id: 6,
    label: "3D MODEL",
    title: "3D Object Generator",
    description: "Create detailed 3D objects and scenes with our cutting-edge<br/> 3D generation technology.",
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
    description: "Enhance and upscale images with our powerful enhancement<br/> algorithms for crystal-clear results.",
    buttonText: "Try Enhancement",
    image: "/api/placeholder/600/400",
    isNew: true
  }
];

/**
 * FeaturedCarousel component displays a responsive carousel showcasing generation tools.
 * Features:
 * - Responsive design: 1 slide on mobile, 2 slides on desktop
 * - Special layouts for ID 1 (WAN 2.2) and ID 2 (FLUX.1) with custom backgrounds
 * - Navigation arrows and pagination dots
 * - Smooth scrolling and loop functionality
 * - Dark mode support for all slides
 */
export default function FeaturedCarousel() {
  // Embla carousel configuration with responsive breakpoints
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, // Enable infinite loop
    breakpoints: {
      // On desktop (1024px+), show 2 slides at once
      '(min-width: 1024px)': { slidesToScroll: 2, containScroll: 'trimSnaps' }
    },
    startIndex: 0, // Start at first slide
    slidesToScroll: 1, // Default: scroll 1 slide at a time
    containScroll: 'trimSnaps' // Trim empty space at edges
  });
  
  // Track currently selected slide index for pagination dots
  const [selectedIndex, setSelectedIndex] = useState(0);

  /**
   * Navigate to the previous slide
   */
  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  /**
   * Navigate to the next slide
   */
  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  /**
   * Jump directly to a specific slide by index
   * @param index - The slide index to navigate to
   */
  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  // Update selected index when carousel moves to keep pagination dots in sync
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
    <section className="pt-16 pb-8 sm:pt-20 sm:pb-12">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {carouselData.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] lg:flex-[0_0_50%] min-w-0 pl-2 sm:pl-4">
                <div className={`rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow relative h-[500px]`}>
                  {slide.id === 1 ? (
                    // Special layout for WAN 2.2 - Full background with three side-by-side images
                    <>
                      <div className="absolute inset-0 flex">
                        <div className="flex-1 relative">
                          <Image
                            src="/images/wan-1.jpeg"
                            alt="WAN 2.2 Image 1"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 relative">
                          <Image
                            src="/images/wan-2.jpg"
                            alt="WAN 2.2 Image 2"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 relative">
                          <Image
                            src="/images/wan-3.jpeg"
                            alt="WAN 2.2 Image 3"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        {/* Top - Left Label */}
                        <div className="flex justify-start">
                          <span className="text-xs font-semibold text-white">
                            {slide.label}
                          </span>
                        </div>
                        
                        {/* Center - Large Title */}
                        <div className="flex justify-center items-center">
                          <h2 className="text-6xl font-black text-white drop-shadow-lg text-center">
                            WAN 2.2
                          </h2>
                        </div>
                        
                        {/* Bottom - Title, Description and Button */}
                        <div className="flex justify-between items-end">
                          <div className="flex-1 pr-4">
                            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                              {slide.title}
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
                              Generate complex images with the brand new and powerful<br/>
                              WAN 2.2 model. Exceptional prompt adherence and ultra-<br/>
                              realistic textures.
                            </p>
                          </div>
                          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex-shrink-0">
                            {slide.buttonText}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : slide.id === 2 ? (
                    // Special layout for FLUX.1 - Stacked layered images with rotation effects
                    <>
                      <div className="absolute inset-0">
                        {/* Third image (back) - largest */}
                        <div className="absolute inset-0 transform rotate-12 transition-transform duration-300 hover:rotate-16">
                          <Image
                            src="/images/flux-2.jpeg"
                            alt="FLUX.1 Krea Image 3"
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Second image (middle) - medium */}
                        <div className="absolute inset-4 transform -rotate-8 transition-transform duration-300 hover:-rotate-12">
                          <Image
                            src="/images/flux-3.jpeg"
                            alt="FLUX.1 Krea Image 2"
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* First image (front) - smallest */}
                        <div className="absolute inset-8 transform rotate-6 transition-transform duration-300 hover:rotate-10">
                          <Image
                            src="/images/flux-1.jpeg"
                            alt="FLUX.1 Krea Image 1"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        {/* Top - Left Label */}
                        <div className="flex justify-start">
                          <span className="text-xs font-semibold text-white">
                            {slide.label}
                          </span>
                        </div>
                        
                        {/* Center - Large Title */}
                        <div className="flex justify-center items-center">
                          <h2 className="text-6xl font-black text-white text-center">
                            Open Source
                          </h2>
                        </div>
                        
                        {/* Bottom - Title, Description and Button */}
                        <div className="flex justify-between items-end">
                          <div className="flex-1 pr-4">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {slide.title}
                            </h3>
                            <p className="text-white text-sm leading-relaxed">
                              We're making the weights to our FLUX.1 Krea model open-source.<br/>
                              Download and run our model weights, read the technical report, or<br/>
                              generate with it in Krea Image.
                            </p>
                          </div>
                          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex-shrink-0 border border-gray-300">
                            {slide.buttonText}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Default layout for slides 3-9 - Standard card with gradient background
                    <>
                      <div className="h-full relative flex items-center justify-center p-8 bg-gray-50">
                        {/* Background placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                      </div>
                      
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        {/* Top - Left Label */}
                        <div className="flex justify-start">
                          <span className="text-xs font-semibold text-gray-600">
                            {slide.label}
                          </span>
                        </div>
                        
                        {/* Center - Large Title */}
                        <div className="flex justify-center items-center">
                          <h2 className="text-6xl font-black text-gray-900 text-center">
                            {slide.title.split(' ')[0]}
                          </h2>
                        </div>
                        
                        {/* Bottom - Title, Description and Button */}
                        <div className="flex justify-between items-end">
                          <div className="flex-1 pr-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {slide.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.description }}>
                            </p>
                          </div>
                          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex-shrink-0 border border-gray-300">
                            {slide.buttonText}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots and Navigation Arrows */}
        <div className="flex justify-between items-center mt-6">
          {/* Pagination Dots - Centered below carousel */}
          <div className="flex justify-center flex-1">
            <div className="flex space-x-2">
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
          
          {/* Navigation Arrows - Right side */}
          <div className="flex space-x-2">
            {/* Previous slide button */}
            <button
              onClick={scrollPrev}
              className="bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Next slide button */}
            <button
              onClick={scrollNext}
              className="bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
