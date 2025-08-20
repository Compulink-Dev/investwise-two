"use client";
// components/InvestmentProducts.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Building2,
  Landmark,
  Wallet,
  LineChart,
  Package,
  Banknote,
  Gem,
} from "lucide-react";
import HeroSlider from "./HeroSlider";

const InvestmentProducts = () => {
  const products = [
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Private Equity",
      description:
        "Pooled long-term capital invested in high-growth private companies, often through venture capital, growth capital, or buyouts.",
      details:
        "Private equity firms operate funds that support promising businesses. Investors are typically institutions or high-net-worth individuals seeking long-term returns.",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Asset Backed Securities (ABS)",
      description:
        "Securities backed by a pool of assets like loans, mortgages, or receivables, generating returns from cash flows.",
      details:
        "ABS provide diversification but depend on the performance of underlying assets. Mortgage-backed securities (MBS) are a common subtype.",
    },
    {
      icon: <Banknote className="h-8 w-8" />,
      title: "Bonds",
      description:
        "Fixed-income instruments where investors lend to issuers in exchange for interest payments and principal repayment.",
      details:
        "Bonds are widely used for stable returns and can vary by issuer (government, corporate) and maturity period.",
    },
    {
      icon: <Gem className="h-8 w-8" />,
      title: "Commodity Funds",
      description:
        "Funds that invest in raw materials like energy, metals, crops, or livestock, either directly or via futures.",
      details:
        "Types include natural resource funds, commodity futures funds, and pure commodity funds (e.g., gold bullion funds).",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Exchange Traded Funds (ETFs)",
      description:
        "Pooled investment vehicles that track underlying assets and trade like stocks on exchanges.",
      details:
        "ETFs combine diversification with liquidity, making them accessible to retail and institutional investors alike.",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Real Estate Investment Trusts (REITs)",
      description:
        "Companies or trusts that invest in income-producing real estate, offering exposure to property markets.",
      details:
        "REITs provide dividends and diversification without requiring direct property ownership. Often focused on commercial, retail, or industrial assets.",
    },
    {
      icon: <Landmark className="h-8 w-8" />,
      title: "Mutual Funds",
      description:
        "Investment companies pooling money from many investors to buy diversified portfolios of stocks, bonds, and other securities.",
      details:
        "Each investor owns shares representing part of the fund's holdings, benefiting from diversification and professional management.",
    },
  ];

  return (
    <section className="bg-muted/30">
      {/* HeroSlider for Investment Products */}
      <div className="mb-16">
        <HeroSlider />
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Investment Products</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore a variety of investment products designed to help you grow
            and diversify your portfolio, each with unique opportunities and
            risks.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full hover:shadow-2xl transition-shadow border border-transparent hover:border-primary/50">
                <CardContent className="p-6">
                  <motion.div
                    className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                    whileHover={{ rotate: 10 }}
                  >
                    {product.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <p className="text-sm text-gray-600">{product.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="bg-primary text-white p-10 rounded-2xl shadow-md"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Diversify Your Portfolio?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Learn how each product fits into your investment strategy and
              discover opportunities tailored to your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Investment Guides
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentProducts;
