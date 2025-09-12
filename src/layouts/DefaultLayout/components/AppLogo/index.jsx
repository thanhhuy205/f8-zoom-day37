import styles from "./AppLogo.module.css";
const AppLogo = () => {
  return (
    <h1 className="flex items-center">
      <a href="/">
        <img className={styles.logo} src="f8-icon.png" alt="F8" />
      </a>
      <a className={styles.subTitle} href="/">
        Học Lập Trình Để Đi Làm
      </a>
    </h1>
  );
};

export default AppLogo;
