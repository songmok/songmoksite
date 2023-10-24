import TistoryItem from "../components/_tistory/TistoryItem";
import { BlogInfo, BlogName, TtokenAndJson } from "../../config";
import Link from "next/link";

export default async function Tistory() {
  const option = { method: "GET" };
  const bgInfoData = await fetch(
    `${BlogInfo + TtokenAndJson + BlogName}`,
    option
  );
  const bgInfo = await bgInfoData.json();
  const ttBgInfo = bgInfo.tistory.item.blogs[1];
  const bgName = ttBgInfo.name;
  const bgBig = bgName.toUpperCase();
  return (
    <main className="container mx-auto items-center">
      <div className="container mx-auto flex px-5 py-12 flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl font-medium">
          <Link href={ttBgInfo.url} target={"_blank"} className="skytxt">
            {bgBig}
          </Link>
        </h1>
        <div className="container relative mt-12">
          <span className="absolute inset-x-0 bottom-0 after:block after:h-1 after:dark:bg-white after:bg-black"></span>
        </div>
      </div>
      <TistoryItem />
    </main>
  );
}
