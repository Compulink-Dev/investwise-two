"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";
import { Search, X, Menu } from "lucide-react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigationItems = [
    {
      title: "INVESTING BASICS",
      href: "#investing-basics",
      items: [
        {
          title: "Being Financially Literate",
          href: "/basics/financial-literacy",
        },
        { title: "Why Invest?", href: "/basics/why-invest" },
        { title: "How the Market Works", href: "/basics/market-works" },
        {
          title: "Understanding Transaction Costs",
          href: "/basics/transaction-costs",
        },
        { title: "Key Investment Concepts", href: "/basics/key-concepts" },
        {
          title: "Savings vs. Investment",
          href: "/basics/savings-vs-investment",
        },
        { title: "Risk / Return Relationship", href: "/basics/risk-return" },
        { title: "Capital Gains", href: "/basics/capital-gains" },
        { title: "Diversification", href: "/basics/diversification" },
      ],
    },
    {
      title: "INVESTMENT PROCESS",
      href: "#investment-process",
      items: [
        {
          title: "Set Your Investment Objectives",
          href: "/process/objectives",
        },
        { title: "Know Your Risk Profile", href: "/process/risk-profile" },
        {
          title: "Understand What You Are Investing In",
          href: "/process/understanding-investments",
        },
        {
          title: "Know Your Licensed Intermediaries",
          href: "/process/licensed-intermediaries",
        },
        { title: "Asset Allocation", href: "/process/asset-allocation" },
        { title: "Rebalancing Your Portfolio", href: "/process/rebalancing" },
        { title: "Monitoring Your Investments", href: "/process/monitoring" },
      ],
    },
    {
      title: "INVESTMENT PRODUCTS",
      href: "#investment-products",
      items: [
        { title: "Products", href: "/investment-products" },
        { title: "Shares", href: "/products/shares" },
        { title: "Bonds", href: "/products/bonds" },
        { title: "Collective Investment Schemes", href: "/products/cis" },
      ],
    },
    // {
    //   title: "PROTECTING YOUR INVESTMENTS",
    //   href: "#protecting-investments",
    //   items: [
    //     {
    //       title: "Investor Protection Tips (Do’s & Don’ts)",
    //       href: "/protection/tips",
    //     },
    //     {
    //       title: "Shareholder Rights & Responsibilities",
    //       href: "/protection/rights",
    //     },
    //     {
    //       title: "Use of Licensed Intermediaries",
    //       href: "/protection/intermediaries",
    //     },
    //   ],
    // },
    // {
    //   title: "INVESTOR ALERTS & WARNINGS",
    //   href: "#alerts",
    //   items: [{ title: "Avoiding Fraud / Scams", href: "/alerts/fraud" }],
    // },
    // {
    //   title: "DISCLOSURE DOCUMENTS",
    //   href: "#disclosure",
    //   items: [
    //     {
    //       title: "Understanding Components of an Annual Report",
    //       href: "/disclosure/annual-report",
    //     },
    //   ],
    // },
    // {
    //   title: "INVESTOR COMPLAINTS",
    //   href: "#complaints",
    //   items: [{ title: "Lodging Complaints", href: "/complaints/lodging" }],
    // },
    // {
    //   title: "FAQ",
    //   href: "/faq",
    // },
    {
      title: "MEDIA CORNER",
      href: "#media-corner",
      items: [
        { title: "Media Corner", href: "/media-corner" },
        { title: "Latest News", href: "/media/news" },
        { title: "Upcoming Events", href: "/media/events" },
        { title: "Publications", href: "/media/publications" },
        { title: "Speeches & Presentations", href: "/media/speeches" },
        { title: "Testimonials", href: "/media/testimonials" },
        { title: "Media Gallery", href: "/media/gallery" },
      ],
    },
    {
      title: "GAME CENTER",
      href: "#game-center",
      items: [
        { title: "Quiz", href: "/games/quiz" },
        { title: "Word Search", href: "/games/word-search" },
      ],
    },
    {
      title: "CONTACT",
      href: "/contact",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.img
            src="/logo.webp"
            alt="Investwise"
            className="h-10 w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-sm mx-6"
        >
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="w-full pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="text-xs bg-transparent font-semibold tracking-wide">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] gap-3 p-6 md:grid-cols-2">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavigationMenuLink asChild>
                              <a
                                href={subItem.href}
                                className="block rounded-lg border p-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {subItem.title}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className="px-4 py-2 text-xs font-semibold hover:text-primary transition-colors"
                    >
                      {item.title}
                    </a>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Buttons */}
        {/* <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div> */}

        {/* Mobile Menu Toggle with Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-3/4 sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-6 px-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="w-full pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <div className="flex flex-col space-y-6 p-4 overflow-auto">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-semibold"
                  >
                    {item.title}
                  </Link>
                  {item.items && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-6 space-y-3">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
