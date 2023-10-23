import Link from "next/link";
import { postsA } from "../../redux/features/listSlice";
export default function ListTt({ list }: { list: postsA }) {
  return (
    <>
      <Link href="/">
        <ul>
          <li>{list.id}</li>
          <li>{list.title}</li>
          <li>{list.date}</li>
        </ul>
      </Link>
    </>
  );
}
