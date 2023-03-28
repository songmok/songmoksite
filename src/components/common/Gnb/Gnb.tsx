import React, { useState } from "react";

import Slide from "../../Slide/Slide";
import { GnbCss } from "./GnbCss";
export interface Toggle {
  showGnb?: boolean;
  showGnbState?: boolean;
}
const Gnb = ({ showGnb, showGnbState }: Toggle) => {
  return (
    <>
      <GnbCss>
        <div className={`workWrap${showGnb ? " show wow fadeIn" : ""}`}>
          <Slide showGnb={showGnbState} />
        </div>
      </GnbCss>
    </>
  );
};

export default Gnb;
