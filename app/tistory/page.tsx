import { useDispatch, useSelector } from "react-redux";
import {
  BlogInfo,
  BlogList,
  BlogName,
  PageNumber,
  TtokenAndJson,
} from "../api/tistory";
import TistoryItem from "../components/_tistory/TistoryItem";
import { RootState } from "../redux/store";
import { ListState } from "../redux/features/listSlice";

export type IList = {
  posts: {
    id: string;
    title: string;
    date: string;
    postUrl: string;
  }[];
};

export default async function Tistory() {
  // const tbinfo = await tsBlogInfo.json();
  // const tbList = await tsBlogList.json();

  // const tbListProps = tbList.tistory.item;
  // console.log("tbListProps", tbListProps);

  return (
    <main>
      <h2>티스토리 블로그</h2>
      <article>
        <TistoryItem />
      </article>
    </main>
  );
}
