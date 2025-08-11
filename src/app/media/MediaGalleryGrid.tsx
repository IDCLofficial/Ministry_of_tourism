"use client"

import React from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import SearchBar from "../components/SearchBar";

interface MediaItem {
  image: string;
  title: string;
  isVideo?: boolean;
}

interface MediaGalleryGridProps {
  items: MediaItem[];
}

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
  const [query, setQuery] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(items);

  React.useEffect(() => {
    // Filter items as the user types
    setFilteredItems(
      items.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [items, query]);

  const handleSearch = () => {
    setFilteredItems(
      items.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  if (items.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium">No media items found</h1>
      </div>
    );
  }
  return (
    <>
      <SearchBar
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <MediaGalleryCard key={idx} image={item.image} title={item.title} isVideo={item.isVideo} />
          ))
        ) : (
          <div className="col-span-full text-center text-lg">No media items found</div>
        )}
      </div>
    </>
  );
};

export default MediaGalleryGrid;