import menuData from "../../data/menu.data";
import styles from "./styles.module.css";
import close from "../../assets/4115230_cancel_close_delete_icon.png";
import { Link } from "react-router-dom";

interface Props {
  setIsSidebarOpen: (isOpen: boolean) => void;
  isSideBarOpen: boolean;
}

const Sidebar = ({ setIsSidebarOpen, isSideBarOpen }: Props) => {
  return (
    <div className={`${styles.container} ${isSideBarOpen ? styles.open : ""}`}>
      <img
        className={styles.close}
        onClick={() => setIsSidebarOpen(false)}
        src={close}
      />
      <ul className={styles.menu}>
        {menuData.map((item) => (
          <Link
            to={item.url}
            key={item.title}
            className={styles.link}
            onClick={() => setIsSidebarOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
