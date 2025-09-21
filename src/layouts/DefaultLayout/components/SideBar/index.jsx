import { Activity, Focus, HomeIcon, HopOffIcon, MapIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

const SideBar = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: "/",
      label: "Trang chủ",
      icon: <HomeIcon />,
    },
    {
      path: "/modal-demo",
      label: "Modal",
      icon: <MapIcon />,
    },
    {
      path: "/focus-demo",
      label: "Focus",
      icon: <Focus />,
    },
    {
      path: "/performance-demo",
      label: "Performance",
      icon: <Activity />,
    },
    {
      path: "/hoc-demo",
      label: "Hoc",
      icon: <HopOffIcon />,
    },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-40 mt-[66px] bg-gray-50 dark:bg-slate-500 border-r border-gray-200 flex flex-col items-center py-6 h-screen">
      <nav className="flex flex-col space-y-12">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 group ${
              isActive(item.path)
                ? "bg-blue-100 text-blue-600"
                : "text-gray-500 dark:text-white  hover:bg-gray-100 dark:hover:text-black  hover:text-gray-700"
            }`}
          >
            <div
              className={`transition-all duration-200 ${
                isActive(item.path) ? "scale-110" : "group-hover:scale-105"
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`text-xl mt-1 font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-blue-600"
                  : "text-gray-400 dark:text-white dark:hover:text-black"
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <button className="flex flex-col items-center justify-center w-12 h-12 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 group">
          <div className="group-hover:scale-105 transition-transform duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xs mt-1 font-medium text-gray-400">Menu</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
