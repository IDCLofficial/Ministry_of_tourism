import React from "react";
import Image from "next/image";

interface MediaGalleryCardProps {
  image: string;
  title: string;
  isVideo?: boolean;
}

const MediaGalleryCard: React.FC<MediaGalleryCardProps> = ({ image, title, isVideo }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col cursor-pointer transition hover:shadow-md">
      <div className="relative w-full h-60">
        <Image src={image} alt={title} width={1280} height={720} className="object-cover h-full w-full object-[50%_0]" />
        {isVideo && (
          <a href="https://youtube.com/watch?v=3MIEEmmHkAA&si=Z0cw9CfMX55xYamV" className="absolute inset-0 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="red" />
              <polygon points="20,16 34,24 20,32" fill="#fff" />
            </svg>
          </a>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <span className="text-xs font-medium text-dark-tertiary mb-1">{title}</span>
      </div>
    </div>
  );
};

export default MediaGalleryCard; 