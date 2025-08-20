// components/MediaCenter.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Play,
  FileText,
  Podcast,
  Video,
  BookOpen,
  Download,
} from "lucide-react";

const MediaCenter = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const mediaContent = {
    videos: [
      {
        title: "Understanding Stock Market Basics",
        description: "A comprehensive guide to how the stock market works",
        duration: "15:30",
        views: "12.4K",
        thumbnail: "/video-1.jpg",
      },
      {
        title: "Diversification Strategies for Beginners",
        description: "Learn how to spread risk across different investments",
        duration: "22:15",
        views: "8.7K",
        thumbnail: "/video-2.jpg",
      },
      {
        title: "Identifying Investment Scams",
        description: "Red flags and warning signs to protect your money",
        duration: "18:45",
        views: "15.2K",
        thumbnail: "/video-3.jpg",
      },
    ],
    articles: [
      {
        title: "The Power of Compound Interest",
        description:
          "How small, regular investments can grow significantly over time",
        readTime: "8 min read",
        author: "Dr. Sarah Chen",
      },
      {
        title: "Market Cycles and Investor Psychology",
        description: "Understanding emotional investing and market patterns",
        readTime: "12 min read",
        author: "Michael Rodriguez",
      },
      {
        title: "ESG Investing: Principles and Performance",
        description:
          "Environmental, Social, and Governance factors in investment decisions",
        readTime: "15 min read",
        author: "Emily Thompson",
      },
    ],
    podcasts: [
      {
        title: "Women in Investing",
        description: "Breaking barriers and building wealth",
        duration: "45:12",
        guests: ["Lisa Wang", "Maria Gonzalez"],
      },
      {
        title: "Tech Stocks Analysis",
        description: "Current trends and future predictions",
        duration: "52:30",
        guests: ["David Kim", "Tech Analyst"],
      },
      {
        title: "Retirement Planning",
        description: "Strategies for different life stages",
        duration: "38:45",
        guests: ["Robert Johnson", "Financial Planner"],
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Center</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our library of educational videos, articles, and podcasts to
            enhance your investment knowledge
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border p-1 bg-muted">
            {[
              {
                id: "videos",
                label: "Videos",
                icon: <Video className="h-4 w-4 mr-2" />,
              },
              {
                id: "articles",
                label: "Articles",
                icon: <FileText className="h-4 w-4 mr-2" />,
              },
              {
                id: "podcasts",
                label: "Podcasts",
                icon: <Podcast className="h-4 w-4 mr-2" />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {mediaContent[activeTab as keyof typeof mediaContent].map(
            (item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-0">
                  {activeTab === "videos" && (
                    <div className="relative">
                      <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                        <Play className="h-12 w-12 text-white/80" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {(item as any).duration}
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      {activeTab === "videos" && (
                        <span>{(item as any).views} views</span>
                      )}
                      {activeTab === "articles" && (
                        <>
                          <span>{(item as any).readTime}</span>
                          <span>{(item as any).author}</span>
                        </>
                      )}
                      {activeTab === "podcasts" && (
                        <span>{(item as any).duration}</span>
                      )}
                      <button className="text-primary hover:text-primary/80">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-primary/10 p-8 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6">
              Get notified when we publish new educational content
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCenter;
