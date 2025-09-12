import { Link } from "react-router";
import styles from "./AppLogo.module.css";
const AppLogo = () => {
  return (
    <h1 className="flex items-center">
      <Link to="/">
        <img className={styles.logo} src="f8-icon.png" alt="F8" />
      </Link>
      <Link className={styles.subTitle} href="/">
        Học Lập Trình Để Đi Làm
      </Link>
    </h1>
  );
};

export default AppLogo;
