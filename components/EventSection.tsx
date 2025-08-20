"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const events = [
  {
    title: "Investing 101 Webinar",
    date: "Sept 15, 2025",
    location: "Online",
    description:
      "Learn the basics of investing in this free introductory session.",
  },
  {
    title: "Fraud Awareness Workshop",
    date: "Oct 5, 2025",
    location: "Harare, ZW",
    description: "Join experts as they discuss how to avoid investment scams.",
  },
  {
    title: "Financial Growth Conference",
    date: "Nov 20, 2025",
    location: "Johannesburg, SA",
    description:
      "A two-day event featuring top financial educators and investors.",
  },
];

export default function EventSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
        <p className="text-muted-foreground mt-2">
          Stay updated with our latest educational sessions and workshops
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <div className="flex items-center text-sm mb-2">
                  <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {event.location}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
