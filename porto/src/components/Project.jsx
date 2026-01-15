import { useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaImage } from "react-icons/fa";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

function Project({
  title,
  description,
  technologies,
  link,
  github,
  images = [],
}) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "single"

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openImageView = (index) => {
    setCurrentImageIndex(index);
    setViewMode("single");
  };

  return (
    <div className="hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl">
      {/* === TECHNOLOGIES === */}
      <div className="flex gap-2 overflow-x-scroll py-2 scrollbar-hide">
        {technologies.split(",").map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500 whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* === TITLE === */}
      <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 mt-4">
        {title}
      </h3>

      {/* === DESCRIPTION === */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      {/* === LINKS === */}
      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        {/* GitHub */}
        <a
          href={github}
          className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center">View Github</span>
        </a>

        {/* View Image */}
        {images.length > 0 && (
          <button
            onClick={() => {
              setShowModal(true);
              setViewMode("grid");
            }}
            className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
          >
            <FaImage className="text-xl self-center" />
            <span className="text-xs self-center">View Image</span>
          </button>
        )}
      </div>

      {/* === MODAL === */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <FaImage className="text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 text-sm sm:text-base">
                    {title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {images.length} {images.length > 1 ? "images" : "image"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* View Toggle - Desktop only */}
                {viewMode === "single" && (
                  <button
                    onClick={() => setViewMode("grid")}
                    className="hidden sm:flex px-3 py-1.5 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  >
                    Grid View
                  </button>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors"
                >
                  <IoClose className="text-xl" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {viewMode === "grid" ? (
                /* Grid View */
                <div className="p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative group cursor-pointer aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800"
                        onClick={() => openImageView(idx)}
                      >
                        <img
                          src={img}
                          alt={`${title} ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                            View
                          </span>
                        </div>
                        {/* Image Number Badge */}
                        <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 rounded-md text-white text-xs font-medium">
                          {idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Single Image View */
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative aspect-video sm:aspect-[16/10] bg-zinc-900 flex items-center justify-center">
                    <img
                      src={images[currentImageIndex]}
                      alt={`${title} ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-700 shadow-lg transition-all"
                        >
                          <IoChevronBack className="text-xl" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-700 shadow-lg transition-all"
                        >
                          <IoChevronForward className="text-xl" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Image Counter & Thumbnails */}
                  <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
                    {/* Counter */}
                    <div className="text-center mb-3">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {currentImageIndex + 1} / {images.length}
                      </span>
                    </div>

                    {/* Thumbnails */}
                    {images.length > 1 && (
                      <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                        {images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                              currentImageIndex === idx
                                ? "border-red-500 shadow-lg"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
