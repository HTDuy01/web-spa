"use client";
import HomeNavbar from "./home.navbar";
import styles from "./home.module.scss";

const HomeHeader = () => {
  return (
    <div className={styles["container"]}>
      <HomeNavbar />
    </div>
  );
};

export default HomeHeader;
