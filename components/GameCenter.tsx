"use client";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const games = [
  {
    title: "Investment Quiz",
    description: "Test your knowledge with fun finance quizzes!",
    action: "Play Now",
  },
  {
    title: "Budget Challenge",
    description: "Can you manage your virtual budget and still save?",
    action: "Start Game",
  },
  {
    title: "Fraud Busters",
    description: "Spot the scams and protect your investments!",
    action: "Play Game",
  },
];

export default function GameCenter() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Game Center</h2>
        <p className="text-muted-foreground mt-2">
          Learn while having fun with interactive financial games
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {games.map((game, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Gamepad2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{game.title}</h3>
                <p className="text-muted-foreground mb-4">{game.description}</p>
                <Button>{game.action}</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
