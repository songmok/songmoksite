import { StudyData } from "../../assets/data/StudyData";
import Header from "../../components/common/Header/Header";
import { Link } from "react-router-dom";
import { StudyCss } from "./style/StudyCss";

type Props = {};

const Study = (props: Props) => {
  return (
    <>
      <StudyCss>
        <Header headerText={"STUDY"} headerLink={"/study"} />
        <div className="wrap">
          <ul>
            {StudyData.map((v, i) => {
              return (
                <>
                  <li key={i}>
                    <div className="embed">
                      <iframe
                        title={v.title}
                        src={`https://replit.com/@songmok/${v.title}?embed=1`}
                        width="600"
                        height="400"
                      />
                    </div>
                    <div className="link">
                      <span>
                        {v.subtitle}
                        <Link to={v.link}>자세히 보기</Link>
                      </span>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </StudyCss>
    </>
  );
};

export default Study;
