import Header from "../../components/common/Header/Header";
import react from "../../assets/images/stacks/react.png";
import hjc from "htmlcssjs../../assets/images/stacks/htmljscss.png";
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
  startDate?: string;
  endDate?: string;
  myWorks: string;
  embed: boolean;
  study: boolean;
}

const WorkLayOut = (props: WorkProps) => {
  const {
    headerText,
    headerLink,
    study,
    project,
    link,
    embed,
    video,
    mainFuntion,
    ps,
    myWorks,
    startDate,
    endDate,
  } = props;

  return (
    <>
      <Header headerText={headerText} headerLink={headerLink} />
      <WorkCss>
        <div className="c1">
          {video && (
            <video src={video} className="video" controls muted></video>
          )}
          {embed && (
            <iframe
              title={headerText}
              src={`https://replit.com/@songmok/${headerLink}?embed=1`}
              width="800"
              height="750"
            />
          )}
        </div>
        <div className="c2">
          <ul>
            <li>
              <span className="projectHeader">프로젝트 제목 -</span>
              <span style={{ paddingRight: "20px" }}>{project}</span>
              <Link to={`${link}`} target="_blank" className="gitLink">
                <img src={github} alt="github" />
              </Link>
            </li>
            {study === true ? (
              <>
                <li>
                  <span className="projectHeader">주요 기능 -</span>
                  <span className="mfText">
                    {mainFuntion}
                    <b className="ps">{ps}</b>
                  </span>
                </li>
                <li>
                  <span className="projectHeader">스터디 내용 -</span>
                  <span className="myWorks">{myWorks}</span>
                </li>
                <li>
                  <span className="projectHeader imgheader">사용 기술 -</span>
                  <ul className="stacks">
                    {project === "HANSALIM" ? (
                      <>
                        <li>
                          <img src={hjc} alt="htmlcssjs" />
                          <span>HTML/CSS/JS</span>
                        </li>
                        <li>
                          <img src={scss} alt="scss" />
                          <span>SCSS</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="projectHeader">주요 기능 -</span>
                  <span className="mfText">
                    {mainFuntion}
                    <b className="ps">{ps}</b>
                  </span>
                </li>
                <li>
                  <span className="projectHeader">담당 역할 -</span>
                  <span className="myWorks">{myWorks}</span>
                </li>
                <li>
                  {startDate && (
                    <>
                      <span className="projectHeader">프로젝트 기간 -</span>
                      <div className="dayz">
                        <span>{startDate}</span>
                        <span> ~ </span>
                        <span>{endDate}</span>
                      </div>
                    </>
                  )}
                </li>
                <li>
                  <span className="projectHeader imgheader">사용 기술 -</span>
                  <ul className="stacks">
                    {project === "SUTABUCKS" ? (
                      <>
                        <li>
                          <img src={hjc} alt="htmlcssjs" />
                          <span>HTML/CSS/JS</span>
                        </li>
                        <li>
                          <img src={cssinjs} alt="cssinjs" />
                          <span>STYLED-COMPONENTS</span>
                        </li>
                        <li>
                          <img src={react} alt="react" />
                          <span>REACT</span>
                        </li>
                        <li>
                          <img src={redux} alt="redux" />
                          <span>REDUX</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                    {project === "GGOBOOK" ? (
                      <>
                        <li>
                          <img src={hjc} alt="htmlcssjs" />
                          <span>HTML/CSS/JS</span>
                        </li>
                        <li>
                          <img src={cssinjs} alt="cssinjs" />
                          <span>STYLED-COMPONENTS</span>
                        </li>
                        <li>
                          <img src={react} alt="react" />
                          <span>REACT</span>
                        </li>
                        <li>
                          <img src={redux} alt="redux" />
                          <span>REDUX</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                    {project === "METHEDU" ? (
                      <>
                        <li>
                          <img src={hjc} alt="htmlcssjs" />
                          <span>HTML/CSS/JS</span>
                        </li>
                        <li>
                          <img src={cssinjs} alt="cssinjs" />
                          <span>STYLED-COMPONENTS</span>
                        </li>
                        <li>
                          <img src={react} alt="react" />
                          <span>REACT</span>
                        </li>
                        <li>
                          <img src={redux} alt="redux" />
                          <span>REDUX</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}{" "}
                    {project === "BINGGRAE" ? (
                      <>
                        <li>
                          <img src={hjc} alt="htmlcssjs" />
                          <span>HTML/CSS/JS</span>
                        </li>
                        <li>
                          <img src={scss} alt="scss" />
                          <span>SCSS</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                    {project === "HANSALIM" ? (
                      <>
                        <li>
                          <img src={hjc} alt="htmlcssjs" />
                          <span>HTML/CSS/JS</span>
                        </li>
                        <li>
                          <img src={scss} alt="scss" />
                          <span>SCSS</span>
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
                          <img src={slack} alt="slack" />
                          <span>SLACK</span>
                        </li>
                        <li>
                          <img src={github} alt="github" />
                          <span>GITHUB</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                    {project === "GGOBOOK" ? (
                      <>
                        <li>
                          <img src={slack} alt="slack" />
                          <span>SLACK</span>
                        </li>
                        <li>
                          <img src={github} alt="github" />
                          <span>GITHUB</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                    {project === "METHEDU" ? (
                      <>
                        <li>
                          <img src={notion} alt="notion" />
                          <span>NOTION</span>
                        </li>
                        <li>
                          <img src={slack} alt="slack" />
                          <span>SLACK</span>
                        </li>
                        <li>
                          <img src={github} alt="github" />
                          <span>GITHUB</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                    {project === "BINGGRAE" ? (
                      <>
                        <li>
                          <img src={slack} alt="slack" />
                          <span>SLACK</span>
                        </li>
                        <li>
                          <img src={github} alt="github" />
                          <span>GITHUB</span>
                        </li>
                      </>
                    ) : (
                      ""
                    )}
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      </WorkCss>
    </>
  );
};

export default WorkLayOut;
