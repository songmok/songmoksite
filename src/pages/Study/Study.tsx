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
                    <div className="imbed">
                      <div className="box"></div>
                    </div>
                    <div className="link">
                      <span>NAV</span>
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
