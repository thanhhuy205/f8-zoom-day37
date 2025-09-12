import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const DropHeaderItem = ({
  title,
  textAll,
  classNames,
  textNew = null,
  children,
}) => {
  const classes = twMerge(
    clsx(
      "flex justify-between items-center text-xl font-semibold text-gray-700 pb-2 border-b border-slate-200",
      classNames
    )
  );

  const actionClasses = twMerge(clsx("text-blue-500 cursor-pointer", textAll));

  if (!children) {
    return (
      <div className={classes}>
        <span className="uppercase">{title}</span>
        <span className={actionClasses}>{textNew ?? "Xem thêm"}</span>
      </div>
    );
  }

  return <div className={classes}>{children}</div>;
};

export default DropHeaderItem;
