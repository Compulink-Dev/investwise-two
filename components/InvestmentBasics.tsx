// components/InvestmentBasics.js
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const InvestmentBasics = () => {
  const basicsContent = [
    {
      title: "Investor Bulletin",
      content: [
        "Global Money Week Report 2025",
        "GroWealth Unit Trust Report June 2025",
        "Masvingo, Zaka Schools Outreach Report",
      ],
      link: "#",
    },
    {
      title: "Investment Products",
      content:
        "A wide variety of investment products exist to help you achieve your financial goals. Learn more about many investment products",
      link: "#",
    },
    {
      title: "Guidance",
      content: [
        "Are there any risks associated with investing in capital markets?",
        "What are Capital Markets?",
        "What rights do I have as a Capital market investor?",
      ],
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
          Investment Basics
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start your investment journey with these fundamental concepts and
          resources
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {basicsContent.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {Array.isArray(item.content) ? (
                  <ul className="space-y-2">
                    {item.content.map((point, i) => (
                      <li key={i} className="text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm">{item.content}</p>
                )}
                <div className="mt-4 text-right">
                  <a
                    href={item.link}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    READ MORE
                  </a>
                </div>
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
        className="mt-12"
      >
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is the minimum amount needed to start investing?
            </AccordionTrigger>
            <AccordionContent>
              You can start investing with as little as $50 through many
              micro-investment platforms. The key is to start early and be
              consistent with your contributions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I choose between stocks and bonds?
            </AccordionTrigger>
            <AccordionContent>
              Stocks generally offer higher potential returns but with more
              risk, while bonds provide more stable, lower returns. A balanced
              portfolio typically includes both based on your risk tolerance and
              time horizon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What are the different types of investment accounts?
            </AccordionTrigger>
            <AccordionContent>
              Common account types include brokerage accounts, retirement
              accounts (IRA, 401k), education savings accounts (529 plans), and
              health savings accounts (HSAs). Each has different tax advantages
              and restrictions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default InvestmentBasics;
