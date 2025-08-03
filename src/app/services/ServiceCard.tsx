import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  imgSrc: string;
  title: string;
  description: string;
};

export default function ServiceCard({ imgSrc, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col p-6 h-full">
      <div className="w-full mb-4 relative flex items-center justify-center">
        <Image src={imgSrc} alt={title} width={200} height={200} className="object-fill w-full" />
      </div>
      <h3 className="text-xl md:text-lg font-semibold mb-2 uppercase tracking-wide">{title}</h3>
      <p className="text-dark-primary-body text-base">{description}</p>
    </div>
  );
} 