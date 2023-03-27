import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import Gnb from "../Gnb/Gnb";
import { HeaderCss } from "./HeaderCss";

export interface HeaderTopProps {
  headerText: string;
  headerLink: string;
  showGnb?: boolean;
  ngnb?: number;
}

const Header = ({ showGnb, headerText, headerLink, ngnb }: HeaderTopProps) => {
  const [showGnbState, setShowGnbState] = useState<boolean>(false);

  const toggleGnb = () => {
    setShowGnbState((prevState) => !prevState);
  };

  return (
    <>
      {!headerText && (
        <>
          <HeaderCss>
            <div className="headerWrap main">
              <ul>
                <li>
                  <Link to="/">
                    <h1>PORTFOLIO</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </HeaderCss>
        </>
      )}
      {headerText && (
        <>
          <HeaderCss>
            <div className="headerWrap main">
              <ul>
                <li>
                  <Link to="/">
                    <h1>PORTFOLIO</h1>
                  </Link>
                </li>
                <li>
                  <span className="line"> ㅡ</span>
                </li>
                <li>
                  <Link to={`/${headerLink}`}>
                    <h1>{headerText}</h1>
                  </Link>
                </li>
              </ul>
              <button className="gnbBtn" onClick={toggleGnb}>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
          </HeaderCss>
          <Gnb showGnb={showGnbState} />
        </>
      )}
    </>
  );
};

export default Header;
