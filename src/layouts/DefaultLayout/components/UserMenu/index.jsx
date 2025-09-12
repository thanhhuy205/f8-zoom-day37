import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import DropDown from "../DropDown";
import DropHeaderItem from "../DropDown/DropHeaderItem";
import DropItem from "../DropDown/DropItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState();
  const profile = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (profile.current && !profile.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div ref={profile}>
      <div>
        <div onClick={() => setIsOpen(!isOpen)}>
          <img
            className="size-12 rounded-full"
            src="https://files.fullstack.edu.vn/f8-prod/public-images/68a94dd2eab96.png"
            alt=""
          />

          <DropDown
            isOpen={isOpen}
            classNames="top-25 right-10 rounded-lg px-12 py-5 bg-white shadow-2xl"
          >
            <DropHeaderItem
              textNew={""}
              textAll="text-orange-500"
              classNames="border-0"
            >
              <div className=" flex items-center justify-center gap-8">
                <img
                  className="size-25 rounded-full object-cover"
                  src="https://files.fullstack.edu.vn/f8-prod/public-images/68a94dd2eab96.png"
                  alt=""
                />
                <div className="text-2xl">
                  <h2>Phạm Thanh Huy</h2>
                  <p className="font-normal">@huydarealest</p>
                </div>
              </div>
            </DropHeaderItem>

            <div className="flex flex-col">
              <DropItem classNames="p-4  hover:text-slate-500 transition text-left">
                <Link to="/profile"> Trang cá nhân</Link>
              </DropItem>
              <DropItem classNames="p-4  hover:text-slate-500 transition  text-left">
                Viết blog
              </DropItem>
              <DropItem classNames="p-4  hover:text-slate-500 transition text-left">
                Bài viết của tôi
              </DropItem>
              <DropItem classNames="p-4  hover:text-slate-500 transition text-left">
                Bài viết đã lưu
              </DropItem>
              <DropItem classNames="p-4 hover:text-slate-500 transition  text-left">
                Cài đặt
              </DropItem>
              <DropItem classNames="p-4  hover:text-slate-500 transition text-left">
                Đăng xuất
              </DropItem>
            </div>
          </DropDown>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
