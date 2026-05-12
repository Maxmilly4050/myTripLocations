import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img
        src="/myTrip.png"
        alt="WorldWise logo"
        className={styles.logoImage}
      />
    </Link>
  );
}

export default Logo;
