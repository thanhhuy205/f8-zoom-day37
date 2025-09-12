import MyCourse from "@/layouts/DefaultLayout/components/MyCourses";
import Notification from "@/layouts/DefaultLayout/components/Notification";
import UserMenu from "@/layouts/DefaultLayout/components/UserMenu";

const UserAction = () => {
  return (
    <div className="flex gap-10 items-center">
      <MyCourse />
      <Notification />
      <UserMenu />
    </div>
  );
};

export default UserAction;
