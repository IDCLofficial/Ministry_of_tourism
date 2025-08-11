"use client";
import NewsCard from "./NewsCard";
import newsList from "./newsList";

import { useNewsContext } from "./NewsContext";

export default function NewsGrid() {
  const { selectedCategory } = useNewsContext();
  const filteredNews = selectedCategory
    ? newsList.filter(item => item.badge === selectedCategory)
    : newsList;
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredNews.length > 0 ? (
        filteredNews.map((item, idx) => (
          <NewsCard news={item} key={idx} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No News Available</h2>
          <p className="text-gray-600 mb-6">Check out our services for more information.</p>
          <a 
            href="/services" 
            className="inline-block bg-primary-green hover:bg-primary-green/80 text-white font-medium py-2 px-6 rounded transition duration-300"
          >
            View Our Services
          </a>
        </div>
      )}
    </div>
  );
}