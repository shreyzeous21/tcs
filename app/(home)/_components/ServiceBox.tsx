import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import React from "react";

const cards = [
  {
    imgSrc: "/icon.png",
    title: "Word",
    description:
      "Elevate your writing and create beautiful documents—anywhere, anytime.",
    buttonText: "Learn More",
  },
  {
    imgSrc: "/icon.png",
    title: "Excel",
    description: "Analyze and visualize your data effectively.",
    buttonText: "Learn More",
  },
  {
    imgSrc: "/icon.png",
    title: "Outlook",
    description:
      "Manage your email, calendar, tasks, and contacts in one location.",
    buttonText: "Learn More",
  },
  {
    imgSrc: "/icon.png",
    title: "The Microsoft 365 App",
    description: "Access your apps and files all in one place.",
    buttonText: "Learn More",
  },
  {
    imgSrc: "/icon.png",
    title: "Microsoft Defender",
    description:
      "Safeguard your personal data and devices with an easy-to-use app.",
    buttonText: "Learn More",
  },
  {
    imgSrc: "/icon.png",
    title: "OneDrive",
    description: "Save and share your files and photos wherever you go.",
    buttonText: "Learn More",
  },
];

const ServiceBox = () => {
  return (
    <div className="h-auto flex py-5 lg:mx-auto lg:px-0 px-4 justify-center items-center w-full bg-[url('/service-box-bg.jpeg')] bg-center bg-cover">
      <div className="max-w-6xl w-full gap-10 flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between gap-4 items-center w-full flex-row">
          <div className="flex flex-col w-full gap-5">
            <span className="text-sm uppercase">What</span>
            <span className="text-4xl font-bold">Boost your potential</span>
          </div>
          <div>
            <Button>
              Explore Now <ChevronRight />
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex h-full w-full lg:flex-row gap-4 flex-col justify-center">
          {/* Left Panel */}
          <div className="bg-white relative rounded-2xl opacity-100 lg:h-auto h-[50vh] w-auto lg:w-1/3 bg-[url('/service-box-bg-inside.avif')] hover:shadow-2xl duration-200 transition ease-in-out bg-cover bg-center flex flex-col justify-end p-4">
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <Card className="relative z-10 bg-transparent shadow-none border-none">
              <CardFooter className="flex flex-col gap-4 items-start">
                <h2 className="text-2xl font-bold items-end">
                  Apps to manage your everyday
                </h2>
                <p className="text-sm">
                  Get the apps, security, and storage you need to accomplish
                  your goals.
                </p>
                <Button className="w-1/2">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
          {/* Cards */}
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-4">
            {cards.map((card, index) => (
              <Card
                key={index}
                className="rounded-lg shadow-lg border hover:shadow-2xl duration-200 transition ease-in flex flex-col justify-between"
              >
                <CardHeader className="gap-4 flex flex-col">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="h-10 w-10"
                  />
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>{card.buttonText}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
