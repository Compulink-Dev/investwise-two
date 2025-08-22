// components/HeroSlider.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Master Your Financial Future",
      description:
        "Learn to invest with confidence and build wealth through our comprehensive educational platform",
      image: "/hero-1.jpg",
      cta: "Start Learning",
      color: "bg-blue-600",
    },
    {
      title: "Protect Your Investments",
      description:
        "Identify fraud, understand risks, and safeguard your financial assets with expert guidance",
      image: "/hero-2.jpg",
      cta: "Learn Protection",
      color: "bg-green-600",
    },
    {
      title: "Interactive Learning Experience",
      description:
        "Engage with games, quizzes, and interactive tools to master investment concepts",
      image: "/hero-3.jpg",
      cta: "Explore Games",
      color: "bg-purple-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className={`${slides[currentSlide].color} hover:${slides[currentSlide].color}/90`}
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-slate-700 cursor-pointer border-white hover:bg-white/10"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Video
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
