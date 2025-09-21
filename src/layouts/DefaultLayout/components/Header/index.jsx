import AppLogo from "@/layouts/DefaultLayout/components/AppLogo";
import SearchForm from "@/layouts/DefaultLayout/components/SearchForm";
import UserAction from "@/layouts/DefaultLayout/components/UserAction";
const Header = () => {
  return (
    <div className="px-[28px] flex items-center justify-between fixed top-0 left-0 right-0 z-20 flex items-center gap-[30px] px-[28px] h-[var(--header-height)] border-b border-[#e8ebed] bg-white text-[1.4rem] dark:bg-slate-500">
      <AppLogo />
      <SearchForm />
      <UserAction />
    </div>
  );
};

export default Header;
