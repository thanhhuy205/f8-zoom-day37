import { twMerge } from "tailwind-merge";
const DropDown = ({ children, classNames = "", isOpen }) => {
  return (
    <div
      className={twMerge(
        `
        flex flex-col gap-4 absolute bg-white shadow transition ease-in-out ${classNames} ${
          !isOpen
            ? "invisible -translate-y-2 opacity-0"
            : "translate-y-2 opacity-100"
        }`
      )}
    >
      {children}
    </div>
  );
};

export default DropDown;
