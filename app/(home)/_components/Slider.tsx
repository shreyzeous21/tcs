"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

interface SlideContent {
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const slides: SlideContent[] = [
  {
    title: "Announcing the 7th Abbott World Marathon Major",
    subtitle:
      "TCS Sydney Marathon presented by ASICS attains Abbott World Marathon Major status",
    image: "/img1.jpeg",
    ctaText: "Read more",
    ctaLink: "#",
  },
  {
    title: "Innovation in Sports Technology",
    subtitle:
      "Transforming athletic performance through cutting-edge digital solutions",
    image: "/img2.jpeg",
    ctaText: "Discover more",
    ctaLink: "#",
  },
];

const MotionCarouselItem = motion(CarouselItem);

export default function Slider() {
  return (
    <div className="relative w-full bg-black">
      <div className="relative inset-0 flex flex-row items-center justify-center px-2">
        <Carousel
          className="max-w-6xl h-[calc(100vh-4rem)] sm:h-screen items-center mx-auto w-full justify-center"
          opts={{ loop: true }}
        >
          <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10 rounded-none border-white bg-transparent text-white hover:bg-white hover:text-black translate-x-0 hidden sm:flex" />

          <CarouselContent>
            {slides.map((slide, index) => (
              <MotionCarouselItem
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative rounded-md mx-auto h-[calc(100vh-4rem)] sm:h-screen max-w-6xl w-full items-center justify-center group">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover brightness-50"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40">
                    <div className="relative h-full flex flex-col">
                      {/* Main Content */}
                      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                        <div className="max-w-4xl space-y-4 sm:space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                              {slide.title}
                            </h2>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300"
                          >
                            <p className="text-base sm:text-xl md:text-2xl text-gray-200 max-w-3xl">
                              {slide.subtitle}
                            </p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300"
                          >
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 sm:px-8 text-sm sm:text-base"
                            >
                              {slide.ctaText}
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionCarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10 rounded-none border-white bg-transparent text-white hover:bg-white hover:text-black translate-x-0 hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
}
