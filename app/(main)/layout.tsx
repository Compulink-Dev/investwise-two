import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
