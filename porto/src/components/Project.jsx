import { useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaImage } from "react-icons/fa";

function Project({ title, description, technologies, link, github, images = [] }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl">
      {/* === TECHNOLOGIES === */}
      <div className="flex gap-2 overflow-x-scroll py-2">
        {technologies.split(",").map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
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
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
          >
            <FaImage className="text-xl self-center" />
            <span className="text-xs self-center">View Image</span>
          </a>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-4">
          <div className="bg-white dark:bg-zinc-800 p-4 py-6 rounded-lg max-w-5xl w-full relative max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-red-600 hover:text-red-800 dark:hover:text-red-400 text-xl font-bold z-10"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-lg font-semibold text-center text-zinc-700 dark:text-zinc-200 mb-6 mt-2">
              {title} – Project Gallery
            </h3>

            {/* Grid Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <div key={idx} className="w-full">
                  <img
                    src={img}
                    alt={`${title} ${idx + 1}`}
                    className="w-full h-auto rounded shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Project;
