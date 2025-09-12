import AppLogo from "@/layouts/DefaultLayout/components/AppLogo";
import SearchForm from "@/layouts/DefaultLayout/components/SearchForm";
import UserAction from "@/layouts/DefaultLayout/components/UserAction";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div
      className="px-[28px] flex items-center justify-between"
      id={style["header"]}
    >
      <AppLogo />
      <SearchForm />
      <UserAction />
    </div>
  );
};

export default Header;
