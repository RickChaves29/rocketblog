import styles from "@/styles/Search.module.css";
import Image from "next/image";

export default function Search() {
  return (
    <div className={styles.containerSearch}>
      <input placeholder="Search" className={styles.inputSearch} />
      <button type="submit" className={styles.btnSearch}>
        <Image src="/search.svg" alt="" width={24} height={24} />
      </button>
    </div>
  );
}
