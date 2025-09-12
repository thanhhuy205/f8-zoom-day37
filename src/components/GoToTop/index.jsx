import { useEffect, useState } from "react";

const GoToTop = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 transition  ${
        scrollTop >= 300 ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <button
        tabIndex={-1}
        className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition 
                   bg-[linear-gradient(#333232,#333232)] hover:opacity-80"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default GoToTop;
