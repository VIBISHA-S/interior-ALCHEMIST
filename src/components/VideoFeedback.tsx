"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X } from "lucide-react";

interface VideoFeedbackItem {
  name: string;
  role: string;
  company: string;
  metric: string;
  thumbnail: string;
  videoUrl: string;
}

const feedbacks: VideoFeedbackItem[] = [
  {
    name: "Krishna",
    role: "Hair Stylist",
    company: "Owner of Page 3 - KNK",
    metric: "Instagram followers - 597K",
    thumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c02cba73d11dbf14c02099b244e4e9a0&profile_id=139&oauth2_token_id=57447761",
  },
  {
    name: "Ananya Sharma",
    role: "Creative Director",
    company: "Studio Design Co.",
    metric: "Collaborator - 12+ Projects",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7facdc735adbb1b4353d47d0579021577fae5550&profile_id=139&oauth2_token_id=57447761",
  },
  {
    name: "Rohan Mehta",
    role: "Tech Entrepreneur",
    company: "Founder, Vertex Labs",
    metric: "Premium Living Space Owner",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    videoUrl: "https://player.vimeo.com/external/517602126.sd.mp4?s=6a2b8e5c5457ef4599587425175c2e1762c4a9fb&profile_id=139&oauth2_token_id=57447761",
  }
];

export default function VideoFeedback() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeName, setActiveName] = useState<string>("");

  const openVideo = (videoUrl: string, name: string) => {
    setActiveVideo(videoUrl);
    setActiveName(name);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setActiveName("");
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]" id="video-feedbacks">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-3 py-1 mb-6 text-xs text-gray-400 border border-gray-800 rounded-full">
          Video Reviews
        </div>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white max-w-2xl">
          Hear The Experiences In Their Own Words
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbacks.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-[#0b0b0b] border border-[#c5a880]/30 hover:border-[#c5a880]/60 rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(197,168,128,0.08)] group"
          >
            {/* Header Text Block */}
            <div className="flex flex-col items-center text-center mb-6">
              <h3 className="text-[#c5a880] text-2xl font-bold tracking-wide">
                {item.name}
              </h3>
              <p className="text-white text-base font-normal mt-1">
                {item.role}
              </p>
              <p className="text-white text-sm font-normal mt-1 opacity-90">
                {item.company}
              </p>
              <p className="text-white text-sm font-normal mt-1 opacity-70">
                {item.metric}
              </p>
            </div>

            {/* Video Thumbnail Block */}
            <div 
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
              onClick={() => openVideo(item.videoUrl, item.name)}
            >
              <Image
                src={item.thumbnail}
                alt={`${item.name} video review thumbnail`}
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-[#c5a880] flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all duration-300 group-hover:scale-110 group-hover:bg-black/40 group-hover:border-[#c5a880]/90">
                  <Play className="w-6 h-6 text-[#c5a880] fill-[#c5a880] translate-x-[2px]" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#111] border border-[#c5a880]/20 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/40">
                <div>
                  <h4 className="text-white font-medium text-lg">
                    Video Feedback from <span className="text-[#c5a880] font-semibold">{activeName}</span>
                  </h4>
                </div>
                <button
                  onClick={closeVideo}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Tag */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
