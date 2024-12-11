"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  size?: "large" | "medium";
  theme?: "dark" | "green";
}

const services: ServiceCard[] = [
  {
    title: "Marvel Rivals",
    subtitle: "NOW AVAILABLE",
    description:
      "Assemble your ultimate squad of Super Heroes and Super Villains",
    image: "/placeholder.svg?height=600&width=800",
    ctaText: "GET IT NOW",
    ctaLink: "#",
    size: "large",
    theme: "dark",
  },
  {
    title: "Game Pass",
    subtitle: "Discover",
    description: "your next favourite game",
    image: "/placeholder.svg?height=400&width=600",
    ctaText: "JOIN NOW",
    ctaLink: "#",
    theme: "green",
  },
  {
    title: "Minecraft",
    subtitle: "NOW AVAILABLE",
    description: "Explore an infinite game in the new Garden Realms game style",
    image: "/placeholder.svg?height=400&width=600",
    ctaText: "GET IT NOW",
    ctaLink: "#",
    theme: "dark",
  },
  {
    title: "Elevate your game",
    subtitle: "NEW",
    description:
      "Reveal the Xbox Wireless Controller – Ghost Cipher Special Edition",
    image: "/placeholder.svg?height=400&width=600",
    ctaText: "LEARN MORE",
    ctaLink: "#",
    theme: "dark",
  },
  {
    title: "Fortnite OG Chapter 1 - Season 1",
    subtitle: "",
    description: "The OG OG returns",
    image: "/placeholder.svg?height=400&width=600",
    ctaText: "GET IT NOW",
    ctaLink: "#",
    theme: "green",
    size: "large",
  },
  {
    title: "EA SPORTS™ WRC",
    subtitle: "NOW TO PLAY",
    description: "Build the rally of your dreams with PC Game Pass or Ultimate",
    image: "/placeholder.svg?height=400&width=600",
    ctaText: "GET IT NOW",
    ctaLink: "#",
    theme: "green",
  },
];

export default function ServiceGrid() {
  return (
    <div className="flex mx-auto w-full flex-col gap-8 justify-center items-center">
      <h1 className="bg-black/90 text-white w-full max-w-[200px] text-center px-4 py-3 rounded-md shadow-md">
        Services
      </h1>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className={`relative overflow-hidden rounded-lg ${
              service.size === "large" ? "md:col-span-2 md:row-span-2" : ""
            } ${service.theme === "green" ? "bg-[#107C10]" : "bg-neutral-900"}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-[16/9] relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute bottom-0 left-0 p-6 space-y-2">
                {service.subtitle && (
                  <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-2 py-1 mb-2">
                    {service.subtitle}
                  </span>
                )}
                <h2 className="text-2xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="text-white/90">{service.description}</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black"
                >
                  {service.ctaText}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
