import styles from "@/styles/Nav.module.css";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  display: "optional",
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function Nav() {
  return (
    <nav>
      <ul className={styles.containerLinks}>
        <li>
          <a className={roboto.className} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={roboto.className} href="#">
            Sobre
          </a>
        </li>
        <li>
          <a className={roboto.className} href="#">
            Artigos
          </a>
        </li>
        <li>
          <a className={roboto.className} href="#">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
