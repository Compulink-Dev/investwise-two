// components/InvestmentProtection.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  AlertTriangle,
  Shield,
  Eye,
  FileText,
  Lock,
  Search,
} from "lucide-react";

const InvestmentProtection = () => {
  const protectionTips = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Recognize Investment Fraud",
      description:
        "Learn to identify common scams like Ponzi schemes, pump-and-dump, and fake investment opportunities",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verify Licenses",
      description:
        "Always check if brokers and advisors are registered with regulatory authorities",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Spot Red Flags",
      description:
        "Be wary of guaranteed returns, high-pressure sales tactics, and unregistered offerings",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      description:
        "Read all documents carefully and understand what you're investing in",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure Your Accounts",
      description:
        "Use strong passwords, enable two-factor authentication, and monitor account activity",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Research Thoroughly",
      description:
        "Investigate companies, read prospectuses, and understand the risks involved",
    },
  ];

  const fraudTypes = [
    "Ponzi Schemes",
    "Pyramid Schemes",
    "Advance Fee Fraud",
    "Pump and Dump",
    "Binary Options Fraud",
    "Cryptocurrency Scams",
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
            Protecting Your Investments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential knowledge and tools to safeguard your financial future
            from fraud and scams
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Common Types of Investment Fraud
            </h3>
            <div className="space-y-4">
              {fraudTypes.map((fraud, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <AlertTriangle className="h-5 w-5 text-destructive mr-4" />
                  <span className="font-medium">{fraud}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Red Flags to Watch For
            </h3>
            <div className="bg-destructive/10 p-6 rounded-lg">
              <ul className="space-y-3 list-disc list-inside">
                <li>Guaranteed high returns with little or no risk</li>
                <li>Unregistered sellers or unlicensed products</li>
                <li>Pressure to act immediately</li>
                <li>Complex strategies with confusing explanations</li>
                <li>Difficulty receiving payments or account statements</li>
                <li>Unsolicited investment offers</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Protection Strategies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protectionTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {tip.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-primary text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Suspected Fraud?</h3>
            <p className="mb-6">
              Report suspicious activities to regulatory authorities immediately
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Report Fraud
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentProtection;
