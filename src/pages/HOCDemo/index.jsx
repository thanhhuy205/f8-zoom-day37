import ProductList from "@/components/ProductList";
import UserProfile from "@/components/UserProfile";
import { useEffect, useState } from "react";

const HOCDemo = () => {
  const [userLoading, setUserLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const [modeTheme, setModeTheme] = useState(false);

  useEffect(() => {
    if (modeTheme) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [modeTheme]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-gray-50 dark:bg-slate-500 p-6">
      <div className="flex gap-4">
        <button
          onClick={() => setUserLoading(!userLoading)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Toggle UserProfile Loading
        </button>
        <button
          onClick={() => setProductLoading(!productLoading)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Toggle ProductList Loading
        </button>

        <button
          onClick={() => setModeTheme(!modeTheme)}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-300 transition"
        >
          {" "}
          Toggle Theme
        </button>
      </div>

      <div className="w-full max-w-lg flex flex-col gap-4">
        <div className="p-4 border rounded-lg bg-white shadow">
          <UserProfile isLoading={userLoading} />
        </div>
        <div className="p-4 border rounded-lg bg-white shadow">
          <ProductList isLoading={productLoading} />
        </div>
      </div>
    </div>
  );
};

export default HOCDemo;
