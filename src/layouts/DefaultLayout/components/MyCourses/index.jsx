import { useEffect, useRef, useState } from "react";
import DropDown from "../DropDown";
import DropHeaderItem from "../DropDown/DropHeaderItem";
import DropItem from "../DropDown/DropItem";

const courses = [
  {
    title: "Fullstack Web",
    subtitle: "Học cách đây 2 ngày trước",
    icon: "https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png",
    progress: 60,
    status: "learning",
  },
  {
    title: "Lập Trình JavaScript Nâng Cao",
    subtitle: "Bạn chưa học khóa này",
    icon: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    status: "not-started",
  },
];

const MyCourse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tabCourse = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (tabCourse.current && !tabCourse.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div ref={tabCourse} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative font-semibold"
      >
        Khóa học của tôi
      </button>

      <DropDown
        isOpen={isOpen}
        classNames="top-20 w-[350px] right-0 rounded-lg px-4 py-7 bg-white shadow-lg"
      >
        <DropHeaderItem
          title="Khóa học của tôi"
          textAll="text-orange-500"
          classNames="border-0"
        />

        <div className="space-y-4">
          {courses.map((course, i) => (
            <DropItem
              key={i}
              className="flex gap-3 p-2 rounded-lg hover:bg-gray-50"
            >
              <img
                src={course.icon}
                alt={course.title}
                className="w-45 rounded-lg object-cover"
              />

              <div className="flex-1 flex flex-col text-left">
                <span className="font-semibold">{course.title}</span>
                <span className="text-lg text-gray-500">{course.subtitle}</span>

                {course.status === "learning" && (
                  <div className="w-full h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                    <div
                      className="h-2 bg-orange-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                )}

                {course.status === "not-started" && (
                  <div className="text-lg text-orange-500 font-semibold mt-1 text-left">
                    Bắt đầu học
                  </div>
                )}
              </div>
            </DropItem>
          ))}
        </div>
      </DropDown>
    </div>
  );
};

export default MyCourse;
