"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, X, MapPin, Maximize2, Tag, Info } from "lucide-react";
import { GALLERY_DATA, GALLERY_CATEGORIES, GalleryItem } from "@/data/gallery";

interface ImageGalleryProps {
  limit?: number;
  showAllFilter?: boolean;
}

export default function ImageGallery({ limit, showAllFilter = true }: ImageGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Visual Work Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Work Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Browse through safety netting installations for residential apartments, balconies, terraces, and window spaces across Mysore.
          </p>
        </div>

        {/* Filter Pills */}
        {showAllFilter && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-800 text-white shadow-md shadow-emerald-950/20"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* Image Box */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-md">
                    <Maximize2 className="w-5 h-5 text-emerald-800" />
                  </div>
                </div>

                {/* Sample vs Completed Project Badge */}
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-xs">
                  {item.isSample ? "Reference Sample" : "Installed Project"}
                </span>
              </div>

              {/* Caption */}
              <div className="p-4">
                <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mt-0.5 line-clamp-1">
                  {item.title}
                </h3>
                {item.location && (
                  <p className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxItem && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveLightboxItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox Image */}
              <div className="relative h-72 sm:h-96 md:h-[450px] w-full bg-slate-900">
                <Image
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                    <Tag className="w-3 h-3" />
                    {activeLightboxItem.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {activeLightboxItem.isSample ? "Sample Design Reference" : "Completed Project"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{activeLightboxItem.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{activeLightboxItem.description}</p>
                {activeLightboxItem.location && (
                  <p className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Location: {activeLightboxItem.location}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

