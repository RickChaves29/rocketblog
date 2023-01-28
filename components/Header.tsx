import styles from "@/styles/Header.module.css";
import { Roboto } from "@next/font/google";
import Nav from "./Nav";
import Search from "./Search";

const roboto = Roboto({
  display: "optional",
  weight: ["700", "400"],
  subsets: ["latin"],
});
export default function Header() {
  return (
    <header className={styles.header}>
      <span className={roboto.className}>
        RocketBlog<i className={styles.dotBlog}>.</i>
      </span>
      <Search />
      <Nav />
    </header>
  );
}
