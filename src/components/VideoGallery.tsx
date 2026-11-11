"use client";

import React, { useState } from "react";
import { Video, ShieldCheck, Film, Info } from "lucide-react";
import VideoCard from "./VideoCard";
import { VIDEOS_DATA, VIDEO_CATEGORIES, VideoItem } from "@/data/videos";

interface VideoGalleryProps {
  limit?: number;
  showAllFilter?: boolean;
}

export default function VideoGallery({ limit, showAllFilter = true }: VideoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredVideos = VIDEOS_DATA.filter((video) => {
    if (activeCategory === "All") return true;
    return video.category === activeCategory;
  });

  const displayedVideos = limit ? filteredVideos.slice(0, limit) : filteredVideos;

  return (
    <section id="videos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5 text-emerald-700" />
            <span>Actual Installation Footage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Installation Videos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Watch our skilled netting technicians at work across apartments, balconies, and residential properties in Mysore.
          </p>
        </div>

        {/* Categories Tab Filter */}
        {showAllFilter && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {VIDEO_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-800 text-white shadow-md shadow-emerald-950/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Video Grid */}
        {displayedVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-600 font-medium">No videos found under &quot;{activeCategory}&quot;.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-3 text-xs font-bold text-emerald-800 underline"
            >
              View All Videos
            </button>
          </div>
        )}

        {/* Note about real business videos */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a specific balcony structure?</h4>
              <p className="text-xs text-slate-600">
                We can share specific video samples on WhatsApp matching your exact balcony layout.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919880364527?text=Hello%20Venayaka%20Balcony%20Safety%20Net%2C%20please%20share%20installation%20video%20samples%20for%20my%20balcony."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 transition-colors shadow-xs"
          >
            Request Video on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
