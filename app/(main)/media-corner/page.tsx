"use client";

import React from "react";
import HeroSlider from "@/components/HeroSlider";
import MediaCenter from "@/components/MediaCenter";
import Gallery from "@/components/Gallery";
import { motion } from "framer-motion";

export default function MediaCenterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSlider />

      {/* Media Center Content */}
      <MediaCenter />

      {/* Gallery Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore visual stories, event highlights, and infographics that
              bring investing concepts to life.
            </p>
          </motion.div>

          <Gallery />
        </div>
      </section>

      {/* Extra Call-to-Action */}
      <section className="py-16 bg-primary text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Never Miss New Content</h2>
          <p className="text-lg mb-6">
            Subscribe to our updates and get fresh videos, podcasts, and
            articles directly in your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
