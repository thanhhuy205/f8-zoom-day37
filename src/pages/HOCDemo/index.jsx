import ProductList from "@/components/ProductList";
import UserProfile from "@/components/UserProfile";
import { useState } from "react";

const HOCDemo = () => {
  const [userLoading, setUserLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-gray-50 p-6">
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
