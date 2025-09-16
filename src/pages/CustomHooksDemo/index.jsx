import useApi from "@/hooks/useApi";
import useToggle from "@/hooks/useToggle";
import styles from "./CustomHooksDemo.module.css";

function MyComponent() {
  const [isVisible, toggleVisible, setVisible] = useToggle(false);

  return (
    <div className={styles.card}>
      <h3 className="text-lg font-semibold mb-3">Toggle Demo</h3>
      <div className="flex gap-3">
        <button
          onClick={toggleVisible}
          className={`${styles.btn} ${styles["btn-blue"]}`}
        >
          {isVisible ? "Hide" : "Show"} Content
        </button>
        <button
          onClick={() => setVisible(true)}
          className={`${styles.btn} ${styles["btn-green"]}`}
        >
          Force Show
        </button>
      </div>

      {isVisible && (
        <div className="mt-4 p-3 rounded-lg bg-white border text-gray-700">
          This content can be toggled!
        </div>
      )}
    </div>
  );
}

const CustomHooksDemo = () => {
  const {
    data: posts,
    loading: loadingPosts,
    error: errorPosts,
    refetch: refetchPosts,
  } = useApi("https://jsonplaceholder.typicode.com/posts");
  const {
    data: users,
    loading: loadingUsers,
    error: errorUsers,
    refetch: refetchUsers,
  } = useApi("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">Posts</h2>
          <button
            onClick={refetchPosts}
            className={`${styles.btn} ${styles["btn-indigo"]}`}
          >
            Refetch Posts
          </button>
        </div>
        {loadingPosts ? (
          <p className="text-gray-500">Đang tải posts...</p>
        ) : (
          <ul className={styles.list}>
            {posts?.slice(0, 5).map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        )}
        {errorPosts && <p className="text-red-500">{errorPosts}</p>}
      </section>

      <hr className="border-gray-300" />

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold"> Users</h2>
          <button
            onClick={refetchUsers}
            className={`${styles.btn} ${styles["btn-indigo"]}`}
          >
            Refetch Users
          </button>
        </div>
        {loadingUsers ? (
          <p className="text-gray-500">Đang tải users...</p>
        ) : (
          <ul className={styles.list}>
            {users?.slice(0, 5).map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
          </ul>
        )}
        {errorUsers && <p className="text-red-500">{errorUsers}</p>}
      </section>

      <MyComponent />
    </div>
  );
};

export default CustomHooksDemo;
