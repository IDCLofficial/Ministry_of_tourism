"use client"
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import newsList from "./newsList";
import Link from "next/link";

export default function NewsHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<{ title: string; date: string } []>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    const filtered = newsList.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
    setShowDropdown(true);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Optionally, you can keep the dropdown open or close it on submit
    // setShowDropdown(false);
  };

  return (
    <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center bg-[url('/images/projectsHero.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 w-full h-full px-4 md:px-0">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center leading-tight">
          Latest News & Updates
        </h1>
        <div className="w-full flex flex-col items-center justify-center relative max-w-xl mx-auto">
          <div className="w-full relative">
            <SearchBar placeholder="Search" value={searchQuery} onChange={handleChange} onSearch={handleSearch} />
            {showDropdown && (
              <div className="absolute left-0 right-0 top-[70%] mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-30 max-h-60 overflow-y-auto w-full">
                {results.length > 0 ? (
                  results.map((item: { title: string; date: string }, idx) => (
                    <Link href={`/news/${item.title}`} key={idx} className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex flex-col border-b last:border-b-0">
                      <span className="font-semibold text-gray-800 text-base">{item.title}</span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-center">No news found.</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 