"use client";
// pages/index.js
import Head from "next/head";
import HeroSlider from "@/components/HeroSlider";
import InvestmentBasics from "@/components/InvestmentBasics";
import InvestmentProcess from "@/components/InvestmentProcess";
import InvestmentProtection from "@/components/InvestmentProtection";
import GameCenter from "@/components/GameCenter";
import MediaCenter from "@/components/MediaCenter";
import Newsletter from "@/components/NewsLetter";
import ResourcesSection from "@/components/ResourceSection";
import LearningPath from "@/components/LearningPath";
import Testimonials from "@/components/Testimonials";
import EventsSection from "@/components/EventSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Investwise - Financial Education Platform</title>
        <meta
          name="description"
          content="Learn about investing, protect your investments, and grow your financial knowledge with Investwise"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSlider />

        <section id="investment-process" className="py-16">
          <div className="container mx-auto px-4">
            <InvestmentProcess />
          </div>
        </section>

        <section id="investment-protection" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <InvestmentProtection />
          </div>
        </section>

        <section id="investment-basics" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <InvestmentBasics />
          </div>
        </section>

        <section id="game-center" className="py-16">
          <div className="container mx-auto px-4">
            <GameCenter />
          </div>
        </section>

        <section id="media-center" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <MediaCenter />
          </div>
        </section>

        <section id="resources" className="py-16">
          <div className="container mx-auto px-4">
            <ResourcesSection />
          </div>
        </section>

        <section id="learning-path" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <LearningPath />
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <Testimonials />
          </div>
        </section>

        <section id="events" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <EventsSection />
          </div>
        </section>

        <section id="newsletter" className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <Newsletter />
          </div>
        </section>
      </main>
    </div>
  );
}
