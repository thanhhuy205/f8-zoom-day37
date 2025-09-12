import DropDown from "@/layouts/DefaultLayout/components/DropDown";
import DropHeaderItem from "@/layouts/DefaultLayout/components/DropDown/DropHeaderItem";
import DropItem from "@/layouts/DefaultLayout/components/DropDown/DropItem";
import { SearchIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchForm.module.css";

const courses = [
  { title: "Xây Dựng Website với ReactJS", icon: "https://placehold.co/32x32" },
  { title: "Node & ExpressJS", icon: "https://placehold.co/32x32" },
  { title: 'App "Đừng Chạm Tay Lên Mặt"', icon: "https://placehold.co/32x32" },
];

const articles = [
  {
    title: "[Phần 1] Tạo dự án ReactJS với Webpack và Babel",
    icon: "https://placehold.co/32x32",
  },
  {
    title: "Authentication & Authorization trong ReactJS",
    icon: "https://placehold.co/32x32",
  },
];

const videos = [
  {
    title: "Day 34: React.createElement, JSX, Props, State",
    icon: "https://placehold.co/32x32",
  },
  {
    title: "Day 31. Promise.all(...), Web Worker, JSON server",
    icon: "https://placehold.co/32x32",
  },
  {
    title: "Day 29: Bất đồng bộ trong JS",
    icon: "https://placehold.co/32x32",
  },
];
const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const search = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (search.current && !search.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={search} className="d-flex-center">
      <div className="relative">
        <div
          onFocus={() => setIsOpen(!isOpen)}
          className={`d-flex-center gap-3 ${styles.searchForm}`}
        >
          <div>
            <SearchIcon size={20} />
          </div>
          <input
            className={styles.searchInput}
            placeholder="Tìm kiếm khóa học, bài viết, video, ..."
          />
          <div className="cursor-pointer">
            <X size={14} />
          </div>
        </div>
        <DropDown
          isOpen={isOpen}
          classNames="top-20 w-full max-h-[400px] overflow-y-scroll rounded-lg px-8 py-5"
        >
          <DropHeaderItem title="Khoá học" />
          {courses.map((a, i) => (
            <DropItem key={i}>
              <img src={a.icon} alt="" className="w-12 h-12 rounded-full" />
              <span className="text-xl">{a.title}</span>
            </DropItem>
          ))}

          <DropHeaderItem title="Bài viết" />
          {articles.map((a, i) => (
            <DropItem key={i}>
              <img src={a.icon} alt="" className="w-12 h-12 rounded-full" />
              <span className="text-xl">{a.title}</span>
            </DropItem>
          ))}

          <DropHeaderItem title="Video" />
          {videos.map((a, i) => (
            <DropItem key={i}>
              <img src={a.icon} alt="" className="w-12 h-12 rounded-full" />
              <span className="text-xl">{a.title}</span>
            </DropItem>
          ))}
        </DropDown>
      </div>
    </div>
  );
};

export default SearchForm;
