import DropDown from "@/layouts/DefaultLayout/components/DropDown";
import DropHeaderItem from "@/layouts/DefaultLayout/components/DropDown/DropHeaderItem";
import DropItem from "@/layouts/DefaultLayout/components/DropDown/DropItem";
import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Notification = () => {
  const [isOpen, setIsOpen] = useState();
  const tabNotify = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (tabNotify.current && !tabNotify.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div ref={tabNotify} className="relative">
      <button tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        <Bell className="mt-2" size={25} fill="#707070" stroke="none" />
      </button>
      <DropDown
        isOpen={isOpen}
        classNames="top-20 w-[350px] max-h-[300px] overflow-y-scroll right-0 rounded-lg px-6 py-8 bg-white shadow-lg"
      >
        <DropHeaderItem
          title="Khóa học của tôi"
          textAll="text-orange-500"
          textNew="Xem thông báo của tôi"
          classNames="border-0"
        />

        <div className="space-y-4">
          <DropItem className="p-2 hover:bg-gray-50 rounded-lg items-start gap-3 text-xl">
            <figure className="flex items-center justify-center size-15 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">
              <img className="rounded-full" src="/f8-icon.png" alt="" />
            </figure>

            <div className="flex-1 flex flex-col text-left">
              <span>
                Bài học <span className="font-semibold">Tóm tắt chương</span>{" "}
                mới được thêm vào.
              </span>
              <span className="text-lg text-orange-500 font-semibold mt-1">
                2 ngày trước
              </span>
            </div>
          </DropItem>
        </div>
      </DropDown>
    </div>
  );
};

export default Notification;
