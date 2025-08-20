"use client";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-10 ">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-xl mb-3">Investwise</h3>
          <p className="text-muted-foreground">
            Empowering people with financial knowledge to build a secure future.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link href="#investment-process">Investment Process</Link>
            </li>
            <li>
              <Link href="#resources">Resources</Link>
            </li>
            <li>
              <Link href="#events">Events</Link>
            </li>
            <li>
              <Link href="#game-center">Game Center</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <div className="flex gap-4 text-muted-foreground">
            <Link href="#">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:info@investwise.com">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground mt-8">
        © {new Date().getFullYear()} Investwise. All rights reserved.
      </div>
    </footer>
  );
}
