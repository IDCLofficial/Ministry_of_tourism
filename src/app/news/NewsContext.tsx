"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NewsContextType {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <NewsContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNewsContext() {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNewsContext must be used within a NewsProvider");
  return context;
}
