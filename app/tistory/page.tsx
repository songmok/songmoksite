import TistoryItem from "../components/_tistory/TistoryItem";

export type IList = {
  posts: {
    id: string;
    title: string;
    date: string;
    postUrl: string;
  }[];
};

export default async function Tistory() {
  return (
    <main>
      <h2>티스토리 블로그</h2>
      <article>
        <TistoryItem />
      </article>
    </main>
  );
}
