"use client";
import { easeIn, motion } from "framer-motion";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "E-commerce Website",
    title: "Online Store",
    description:
      "An e-commerce platform designed for small businesses. The is an e-commerce website that includes a responsive layout and a smooth user experience for customers. The website is fully functional with No backend added to the website yet",
    stack: [{ name: "Next js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }],
    image: "/project2.png",
    live: "/",
    github: "/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    const currentSlide = swiper.activeIndex;
    setProject(projects[currentSlide]);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[2px]">
          {/* Left section: Project details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-center order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project number with color */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-stroke">
                <span className="text-[#facc15] text-stroke-white">{project.num}</span>
                {/* Base yellow color with white outline effect */}
              </div>

              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              <p className="text-white/60">{project.description}</p>

              {/* Styled tech stack (green accent version only) */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}{" "}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center group hover:bg-blue-500 transition-all duration-300">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-black" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/50 flex justify-center items-center group hover:bg-blue-500 transition-all duration-300">
                        <BsGithub className="text-white text-3xl group-hover:text-black" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right section: Swiper for project images */}
          <div className="w-full xl:w-[50%] mt-28">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="xl:h-[520px] max-h-[80vh] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[350px] max-h-[60vh] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Next/Previous buttons with dark gray and blue hover effect */}
            <div className="flex justify-center gap-4">
              <button
                className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
