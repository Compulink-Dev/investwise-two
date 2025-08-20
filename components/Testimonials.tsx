"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Young Investor",
    text: "Investwise made investing simple and approachable. I feel more confident making financial decisions now.",
  },
  {
    name: "James K.",
    role: "Small Business Owner",
    text: "The platform taught me how to protect my money from scams. Truly a lifesaver!",
  },
  {
    name: "Linda P.",
    role: "Student",
    text: "I love the learning path. It feels like a guided journey into the world of finance.",
  },
];

export default function Testimonials() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
        <p className="text-muted-foreground mt-2">
          Real stories from people learning and growing with Investwise
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex text-yellow-500 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-yellow-400" />
                    ))}
                </div>
                <p className="text-muted-foreground mb-4">“{t.text}”</p>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
