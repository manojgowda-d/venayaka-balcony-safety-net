"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Maximize, AlertCircle, MapPin, Tag } from "lucide-react";
import { VideoItem } from "@/data/videos";

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayToggle = () => {
    if (!video.isAvailable) return;

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Video playback interrupted or not supported:", err);
            setHasError(true);
          });
      }
    } else {
      setIsPlaying(true);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Video Container */}
      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden group">
        {video.type === "youtube" ? (
          <iframe
            src={video.src}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* HTML5 Local MP4 Video Player */}
            {video.isAvailable && !hasError ? (
              <video
                ref={videoRef}
                src={video.src}
                controls={isPlaying}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onLoadedData={() => setVideoLoaded(true)}
                onError={() => setHasError(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isPlaying ? "opacity-100" : "opacity-90"
                }`}
              />
            ) : null}

            {/* Poster / Thumbnail Overlay when not playing */}
            {!isPlaying && !hasError && (
              <div
                onClick={handlePlayToggle}
                className="absolute inset-0 cursor-pointer flex items-center justify-center bg-slate-900/40 group-hover:bg-slate-900/30 transition-all duration-300"
              >
                {video.thumbnail && (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover -z-10 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {/* Dark gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent -z-10" />

                {/* Big Center Play Button */}
                <button
                  type="button"
                  aria-label={`Play ${video.title}`}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-700/90 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-95 transition-all duration-200 z-10"
                >
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </button>

                {/* Duration/Label badge */}
                {video.duration && (
                  <span className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/75 text-white text-xs font-semibold backdrop-blur-xs">
                    {video.duration}
                  </span>
                )}
              </div>
            )}

            {/* Placeholder Fallback if video file is missing or has an error */}
            {(!video.isAvailable || hasError) && (
              <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white">
                <AlertCircle className="w-10 h-10 text-amber-400 mb-2" />
                <p className="text-sm font-bold">Installation Video</p>
                <p className="text-xs text-slate-300 mt-1 max-w-xs">
                  Full on-site demonstration video will be added soon. Contact us to request video samples on WhatsApp.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Video Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Badge & Location */}
          <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800">
              <Tag className="w-3 h-3" />
              {video.category}
            </span>
            {video.location && (
              <span className="flex items-center gap-1 text-slate-500 text-xs">
                <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                {video.location}
              </span>
            )}
          </div>

          <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug">
            {video.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Video Card Footer / Controls helper */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="text-emerald-700 font-medium">Venayaka Balcony Safety Net</span>
          {video.type === "local" && video.isAvailable && !hasError && (
            <button
              onClick={handleFullscreen}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-emerald-800 transition-colors"
              title="Fullscreen"
            >
              <Maximize className="w-3.5 h-3.5" />
              <span>Fullscreen</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
