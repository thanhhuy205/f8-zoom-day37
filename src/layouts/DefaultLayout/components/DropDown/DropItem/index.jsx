import { twMerge } from "tailwind-merge";

const DropItem = ({ children, onClick, classNames = "" }) => {
  return (
    <button
      className={twMerge(
        "flex items-center gap-5 w-full hover:bg-slate-100 p-3",
        classNames
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default DropItem;
