// components/LearningPath.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  BookOpen,
  Target,
  TrendingUp,
  Shield,
  Trophy,
  Users,
} from "lucide-react";

const LearningPath = () => {
  const learningPaths = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Beginner Level",
      description: "Start your investment journey with fundamental concepts",
      steps: [
        "Financial Literacy Basics",
        "Introduction to Capital Markets",
        "Understanding Risk and Return",
        "Setting Financial Goals",
      ],
      duration: "2-4 weeks",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Intermediate Level",
      description: "Build practical investment skills and knowledge",
      steps: [
        "Portfolio Construction",
        "Investment Analysis",
        "Diversification Strategies",
        "Market Research Techniques",
      ],
      duration: "4-6 weeks",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Advanced Level",
      description: "Master sophisticated investment strategies",
      steps: [
        "Advanced Technical Analysis",
        "Derivatives and Options",
        "Alternative Investments",
        "Wealth Management",
      ],
      duration: "6-8 weeks",
      color: "bg-purple-100 text-purple-800",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Protection Specialization",
      description: "Focus on investment safety and fraud prevention",
      steps: [
        "Fraud Detection Methods",
        "Regulatory Compliance",
        "Risk Management",
        "Due Diligence Processes",
      ],
      duration: "3-5 weeks",
      color: "bg-orange-100 text-orange-800",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Structured Learning Paths
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our curated learning journeys from beginner to expert
            investor
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {learningPaths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {path.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{path.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {path.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {path.steps.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${path.color}`}
                    >
                      {path.duration}
                    </span>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Start Path →
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-primary/10 p-8 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Track Your Progress</h3>
            <p className="text-lg mb-6">
              Earn badges and certificates as you complete each learning path
              and demonstrate your knowledge
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              View My Progress
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPath;
