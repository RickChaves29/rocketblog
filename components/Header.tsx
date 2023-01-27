import styles from "@/styles/Header.module.css";
import { Roboto } from "@next/font/google";
import Image from "next/image";
import { useState } from "react";
import Post from "./Post";

const roboto = Roboto({
  display: "optional",
  weight: ["700", "400"],
  subsets: ["latin"],
});
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={roboto.className}>
          RocketBlog<i className={styles.dotBlog}>.</i>
        </span>
        <Image
          className={styles.menu}
          alt=""
          width={45}
          height={45}
          src="/menu.png"
        />

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
        <div className={styles.containerSearch}>
          <input placeholder="Search" className={styles.inputSearch} />
          <button type="submit" className={styles.btnSearch}>
            <Image src="/search.svg" alt="" width={24} height={24} />
          </button>
        </div>
      </nav>

      <section className={styles.sectionHeader}>
        <div>
          <Post
            postTitle="Veja o guia definitivo para conquistar seus objetivos como DEV em 2022"
            postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. "
          />
          <a href="#" className={roboto.className}>
            Ver Mais{" "}
            <Image src="/arrow-right.svg" alt="" width={24} height={24} />
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt=""
        />
      </section>
    </header>
  );
}
