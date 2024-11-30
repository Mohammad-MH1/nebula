import { Outlet } from "react-router";
import Header from "../Header/Header";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
