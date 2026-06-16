"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Calendar, Clock, ArrowRight, X, BookOpen } from "lucide-react";
import NextImage from "next/image";

import { AnimatedSection } from "@/components/animated-section";
import { blogPosts } from "@/data/portfolio";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
}

export function BlogSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activePost]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePost(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatedSection
      id="blog"
      eyebrow="Blog"
      title="Technical Writing & Insights"
      description="Articles detailing my experiences in enterprise database tuning, AI applications, and workflow automation."
    >
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => {
          return (
            <motion.article
              key={post.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -4, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(29, 78, 216, 0.08)" }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/70 bg-white/78 shadow-card backdrop-blur-xl transition-all duration-300"
            >
              {/* Blog Post Cover Image */}
              <div className="relative h-48 w-full overflow-hidden border-b border-white/80 bg-blue-50">
                <NextImage
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 350px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-white/5" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-electric">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-ink group-hover:text-electric transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                    <Calendar size={12} />
                    {post.date}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActivePost(post)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric group-hover:text-blue-700 transition-colors"
                    aria-label={`Read article: ${post.title}`}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Blog Article Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActivePost(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/70 bg-white/95 shadow-2xl backdrop-blur-2xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-100 p-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-electric">
                      {activePost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {activePost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {activePost.date}
                    </span>
                  </div>
                  <h2 id="modal-title" className="mt-3 text-2xl sm:text-3xl font-bold text-ink leading-tight">
                    {activePost.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="ml-4 p-1.5 text-slate-400 hover:text-ink hover:bg-slate-100 rounded-full transition"
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 leading-8 text-slate-700 text-base space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-electric mb-4">
                  <BookOpen size={16} />
                  <span>Introduction & Overview</span>
                </div>
                
                {/* Format paragraph text nicely */}
                {activePost.content.split("\\n\\n").map((paragraph, i) => (
                  <p key={i} className="text-slate-600 font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-100 bg-slate-50/50 p-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-900"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
