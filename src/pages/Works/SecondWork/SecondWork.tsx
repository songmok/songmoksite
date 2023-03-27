import ggobook from "../../../assets/video/ggobook.mp4";
import WorkLayOut from "../WorkLayOut";

const SecondWork = () => {
  return (
    <>
      <WorkLayOut
        headerText="GGOBOOK"
        headerLink="ggobook"
        video={ggobook}
        project="GGOBOOK"
        link={"https://github.com/songmok/ggoBook.git"}
        mainFuntion="읽을 책을 선택하고, 일정 및 기록을 남긴다. 본인이 다 읽은 책은 독후감과 평점을 남길 수 있으며, 포인트를 쌓아 랭킹을 올릴 수 있다."
        startDate="23.02.07"
        endDate="23.03.03"
      />
    </>
  );
};
export default SecondWork;
