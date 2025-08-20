// components/ResourcesSection.js
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Investment Calculators",
      description:
        "Use our interactive calculators to plan your financial future",
      icon: "🧮",
      link: "#",
    },
    {
      title: "Glossary of Terms",
      description:
        "Understand investment terminology with our comprehensive glossary",
      icon: "📚",
      link: "#",
    },
    {
      title: "Market Analysis",
      description: "Latest market trends and analysis from financial experts",
      icon: "📈",
      link: "#",
    },
    {
      title: "Educational Webinars",
      description:
        "Join our free webinars to learn from industry professionals",
      icon: "🎓",
      link: "#",
    },
    {
      title: "Research Reports",
      description: "In-depth research on various investment opportunities",
      icon: "🔍",
      link: "#",
    },
    {
      title: "Mobile App",
      description:
        "Track your investments and learn on the go with our mobile app",
      icon: "📱",
      link: "#",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Resources & Tools
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Access our comprehensive library of investment resources and tools
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full transition-all hover:shadow-lg">
              <CardHeader>
                <div className="text-4xl mb-4">{resource.icon}</div>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <Button variant="outline" className="w-full">
                  Explore
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <h3 className="text-2xl font-bold mb-4">
          Stay Updated with Market News
        </h3>
        <p className="text-muted-foreground mb-6">
          Get the latest financial news and insights delivered to your inbox
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-md"
          />
          <Button>Subscribe</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourcesSection;
