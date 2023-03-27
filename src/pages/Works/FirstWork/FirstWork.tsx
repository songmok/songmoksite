import sutabucks from "../../../assets/video/sutabucks.mp4";
import WorkLayOut from "../WorkLayOut";

const FirstWork = () => {
  return (
    <>
      <WorkLayOut
        headerText="SUTABUCKS"
        headerLink="sutabucks"
        video={sutabucks}
        project="SUTABUCKS"
        link={"https://github.com/songmok/sutabucks.git"}
        mainFuntion={
          "멤버십 카드를 이용해서 음료 및 음식을 주문할 수 있는 사이트 입니다."
        }
        ps={`* STARBUCKS 사이트를 참고`}
        startDate="23.02.07"
        endDate="23.03.03"
      />
    </>
  );
};

export default FirstWork;
