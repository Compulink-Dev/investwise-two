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
      href: "#investment-basics",
      items: [
        { title: "Being Financially Literate", href: "#" },
        { title: "Why should you invest?", href: "#" },
        { title: "When should you invest?", href: "#" },
        { title: "How much should you invest?", href: "#" },
        { title: "How the capital market works", href: "#" },
        { title: "Understanding Transaction Costs", href: "#" },
        { title: "Risk / Return Relationship", href: "#" },
        { title: "Diversification", href: "#" },
      ],
    },
    {
      title: "INVESTMENT PROCESS",
      href: "#investment-process",
      items: [
        { title: "Diversify your Investments", href: "#" },
        { title: "Know your licensed intermediaries", href: "#" },
        { title: "Knowing your Risk Profile", href: "#" },
        { title: "Portfolio Monitoring and Performance Evaluation", href: "#" },
        { title: "Setting Investment Objectives", href: "#" },
        { title: "Understand Investment Products", href: "#" },
      ],
    },
    {
      title: "INVESTMENT PROTECTION",
      href: "#investment-protection",
      items: [
        { title: "Types of Investment Fraud", href: "#" },
        { title: "What you can do to avoid Investment Fraud", href: "#" },
        { title: "Red Flags for Investment Fraud", href: "#" },
      ],
    },
    {
      title: "GAME CENTRE",
      href: "#game-center",
      items: [
        { title: "Capital Market Basic Knowledge Quiz", href: "#" },
        { title: "Spot and Share", href: "#" },
      ],
    },
    { title: "RESOURCES", href: "#resources" },
    { title: "LEARNING", href: "#learning-path" },
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
