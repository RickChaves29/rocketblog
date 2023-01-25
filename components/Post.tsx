import { Roboto } from "@next/font/google";
import styles from "@/styles/Post.module.css";

const roboto = Roboto({
  display: "optional",
  weight: ["700", "400"],
  subsets: ["latin"],
});

type PostProps = {
  img?: string | undefined;
  date?: string | undefined;
  postTitle: string;
  postDescription: string;
};
export default function Post(props: PostProps) {
  return (
    <div className={styles.containerPost}>
      <img className={styles.img} src={props.img} alt="" />
      <time className={roboto.className}>{props.date}</time>
      <h1 color="#fff" className={roboto.className}>
        {props.postTitle}
      </h1>
      <p className={roboto.className}>{props.postDescription}</p>
    </div>
  );
}
