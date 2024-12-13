"use client";

import * as React from "react";
import Image from "next/image";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: <Github className="w-10 h-10" />,
    text: "Banking",
    img: "/img1.jpeg",
  },
  {
    icon: <Github className="w-10 h-10" />,
    text: "Insurance",
    img: "/img2.jpeg",
  },
  { icon: <Github className="w-10 h-10" />, text: "Retail", img: "/img3.jpeg" },
  {
    icon: <Github className="w-10 h-10" />,
    text: "Telecom",
    img: "/img4.jpeg",
  },
  { icon: <Github className="w-10 h-10" />, text: "Media", img: "/img5.jpeg" },
];

export function IndustriesCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className=" px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Industries
          </h2>
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Our expertise spans 13 industries from banking, insurance,
              telecommunications, media, entertainment, distribution, retail, to
              many more.
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              {/* <span className="text-sm text-gray-500">
                {current} / {count}
              </span> */}
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {industries.map((industry, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col p-6">
                      <div className="flex flex-col items-center justify-center mb-4 h-32">
                        {industry.icon}
                        <h3 className="mt-2 text-xl font-semibold text-center">
                          {industry.text}
                        </h3>
                      </div>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                        <Image
                          src={industry.img}
                          alt={industry.text}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
