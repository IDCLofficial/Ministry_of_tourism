"use client";

import { useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import PageTransitionWrapper from "@/app/components/PageTransitionWrapper";
import Sidebar from "@/app/components/Sidebar";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <PageTransitionWrapper>{children}</PageTransitionWrapper>
    </>
  );
}
