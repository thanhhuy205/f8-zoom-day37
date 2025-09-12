import { useEffect, useState } from "react";
import defaultAvatar from "/f8-icon.png";
const Profile = () => {
  const [preview, setPreview] = useState();

  useEffect(() => {
    return () => {
      console.log(preview);

      URL.revokeObjectURL(preview);
    };
  }, [preview]);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <label className="relative cursor-pointer">
        <img
          src={preview || defaultAvatar}
          alt="avatar"
          className="w-40 h-40 rounded-full object-cover border-4 border-sky-500 shadow-lg"
        />

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />

        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-2 py-1 rounded">
          Thay ảnh
        </span>
      </label>
    </div>
  );
};

export default Profile;
