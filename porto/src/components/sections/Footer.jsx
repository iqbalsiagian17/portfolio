import user_info from "../../data/user_info.js";
import GitHubButton from "react-github-btn";
import { FaArrowCircleUp } from "react-icons/fa";

function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative p-4 text-center">
      {/* =========== USER COPYRIGHT (CENTERED) =========== */}
      <p className="text-zinc-600 dark:text-zinc-300 text-sm font-light text-center">
        {user_info.footer}
      </p>

      {/* =========== SCROLL ON TOP BUTTON (BOTTOM RIGHT CORNER) =========== */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 text-zinc-600 dark:text-zinc-300 text-sm font-light flex items-center gap-2"
      >
        <FaArrowCircleUp className="text-red-800 dark:text-red-500" />
        Go back to top
      </button>
    </footer>
  );
}

export default Footer;
