// components/Newsletter.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription success
    setIsSubscribed(true);
    setEmail("");
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
              <Mail className="h-8 w-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Informed on Your Investment Journey
            </h2>

            <p className="text-xl mb-8 opacity-90">
              Get weekly insights, market updates, and exclusive educational
              content delivered to your inbox
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 p-6 rounded-lg"
              >
                <Check className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Welcome Aboard!</h3>
                <p>Thank you for subscribing to our newsletter.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}

            <p className="text-sm opacity-80 mt-6">
              Join 25,000+ investors who receive our weekly insights.
              Unsubscribe at any time.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Weekly Market Updates</h4>
                <p className="text-sm opacity-90">
                  Stay informed about market trends and opportunities
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Educational Content</h4>
                <p className="text-sm opacity-90">
                  Deepen your knowledge with expert articles and guides
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Exclusive Events</h4>
                <p className="text-sm opacity-90">
                  Get invites to webinars and workshops with industry experts
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
