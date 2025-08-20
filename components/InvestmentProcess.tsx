// components/InvestmentProcess.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Target,
  PieChart,
  BarChart3,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const InvestmentProcess = () => {
  const steps = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Set Investment Objectives",
      description:
        "Define your financial goals, time horizon, and risk tolerance to create a clear investment strategy",
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Understand Investment Products",
      description:
        "Learn about stocks, bonds, mutual funds, ETFs, and other investment vehicles",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Know Your Risk Profile",
      description:
        "Assess your risk appetite and understand how it affects your investment choices",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Diversify Your Investments",
      description:
        "Spread your investments across different asset classes to minimize risk",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Portfolio Monitoring",
      description:
        "Regularly review and adjust your portfolio based on performance and market conditions",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Choose Licensed Intermediaries",
      description:
        "Work with registered brokers and advisors who comply with regulatory standards",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these structured steps to build and manage a successful
            investment portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-lg mb-6">
              Our comprehensive guides and tools will help you navigate each
              step with confidence
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Begin Your Investment Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentProcess;
