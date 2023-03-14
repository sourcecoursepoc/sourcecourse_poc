import { Layout } from "antd";
import styles from "./header.module.css";

const HeaderTop = () => {
  const { Header } = Layout;
  return <Header className={styles.headerStyle} />;
};

export default HeaderTop;
