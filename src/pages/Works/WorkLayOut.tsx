import Header from "../../components/common/Header/Header";
import react from "../../assets/images/stacks/react.png";
import hjc from "../../assets/images/stacks/htmljscss.png";
import figma from "../../assets/images/stacks/figma.png";
import redux from "../../assets/images/stacks/redux.png";
import cssinjs from "../../assets/images/stacks/styled-component.png";
import scss from "../../assets/images/stacks/scss.png";
import slack from "../../assets/images/stacks/slack.png";
import notion from "../../assets/images/stacks/notion.png";
import github from "../../assets/images/stacks/gitHub.png";

import { WorkCss } from "../../style/WorkCss";
import { Link } from "react-router-dom";

export interface WorkProps {
  headerText: string;
  headerLink: string;
  video?: string;
  project: string;
  link?: string;
  mainFuntion: string;
  ps?: string;
  startDate: string;
  endDate: string;
}

const WorkLayOut = (props: WorkProps) => {
  const {
    headerText,
    headerLink,
    project,
    link,
    video,
    mainFuntion,
    ps,
    startDate,
    endDate,
  } = props;

  return (
    <>
      <Header headerText={headerText} headerLink={headerLink} />
      <WorkCss>
        <div className="c1">
          <video src={video} className="video" autoPlay muted></video>
        </div>
        <div className="c2">
          <ul>
            <li>
              <span className="projectHeader">프로젝트 제목 -</span>
              <span>{project}</span>
              <Link to={`${link}`} target="_blank" className="gitLink">
                <img src={github} alt="" />
              </Link>
            </li>
            <li>
              <span className="projectHeader">주요 기능 -</span>
              <span className="mfText">
                {mainFuntion}
                <b className="ps">{ps}</b>
              </span>
            </li>
            <li>
              <span className="projectHeader">담당 역할 -</span>
              <span className="myWorks">
                홈, 헤더, 서브헤더, 이벤트, 공지사항, 페이지 구현, 인터렉티브 및
                UI 구성
              </span>
            </li>
            <li>
              <span className="projectHeader">프로젝트 기간 -</span>
              <div className="dayz">
                <span>{startDate}</span>
                <span> ~ </span>
                <span>{endDate}</span>
              </div>
            </li>
            <li>
              <span className="projectHeader imgheader">사용 기술 -</span>
              <ul className="stacks">
                {project === "SUTABUCKS" ? (
                  <>
                    <li>
                      <img src={hjc} alt="" />
                      <span>HTML/CSS/JS</span>
                    </li>
                    <li>
                      <img src={cssinjs} alt="" />
                      <span>STYLED-COMPONENTS</span>
                    </li>
                    <li>
                      <img src={react} alt="" />
                      <span>REACT</span>
                    </li>
                    <li>
                      <img src={redux} alt="" />
                      <span>REDUX</span>
                    </li>
                  </>
                ) : (
                  ""
                )}
                {project === "GGOBOOK" ? (
                  <>
                    <li>
                      <img src={hjc} alt="" />
                      <span>HTML/CSS/JS</span>
                    </li>
                    <li>
                      <img src={cssinjs} alt="" />
                      <span>STYLED-COMPONENTS</span>
                    </li>
                    <li>
                      <img src={react} alt="" />
                      <span>REACT</span>
                    </li>
                    <li>
                      <img src={redux} alt="" />
                      <span>REDUX</span>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </li>
            <li>
              <span className="projectHeader imgheader">협업 툴 -</span>
              <ul className="teamwork">
                {project === "SUTABUCKS" ? (
                  <>
                    <li>
                      <img src={notion} alt="" />
                      <span>NOTION</span>
                    </li>
                    <li>
                      <img src={slack} alt="" />
                      <span>SLACK</span>
                    </li>
                    <li>
                      <img src={github} alt="" />
                      <span>GITHUB</span>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </li>
          </ul>
        </div>
      </WorkCss>
    </>
  );
};

export default WorkLayOut;
