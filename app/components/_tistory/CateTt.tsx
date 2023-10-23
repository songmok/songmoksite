import { ICate } from "../../redux/features/cateSlice";

export default function CateTt({ cate }: { cate: ICate }) {
  return (
    <>
      <button>
        <ul>
          <li>{cate.id}</li>
          <li>{cate.name}</li>
          <li>{cate.entriesInLogin}</li>
        </ul>
      </button>
    </>
  );
}
