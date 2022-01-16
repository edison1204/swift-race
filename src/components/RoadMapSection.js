
import React from "react";

function RoadMapSection() {

  return (
    <section id="roadmap-section" className="roadmap-section">
      <div className="page-header-wrapper mb-50">
        <h1 className="main-header">ROADMAP</h1>
        <p className="def-txt"><b>This Timeline details our funding and
          development goals</b></p>
      </div>

      <div className="timeline-wrapper mb-100">
        <ul className="timeline">

          <li className="timeline-item" data-date="JAN 2022">
            <h3 className="timeline-header mb-10">PHASE 1</h3>
            <p className="def-txt">- WEBSITE LAUNCH</p>
            <p className="def-txt">- SRT TOKEN LAUNCH</p>
            <p className="def-txt">- PHASE 1 NFT LAUNCH (BEP 721)</p>
            <p className="def-txt">- NFT MINT EVENT</p>
          </li>

          <li className="timeline-item" data-date="FEB-MAR 2022">
            <h3 className="timeline-header mb-10">PHASE 2</h3>
            <p className="def-txt">- GAMEPLAY TRAILER</p>
            <p className="def-txt">- NFT MARKETPLACE </p>
            <p className="def-txt">- SRT TOKEN STAKING </p>
            <p className="def-txt">- PHASE 2 NFT LAUNCH (BEP 1155)</p>
          </li>

          <li className="timeline-item" data-date="APR-MAY 2022">
            <h3 className="timeline-header mb-10">PHASE 3</h3>
            <p className="def-txt">- GAME BETA LAUNCH</p>
            <p className="def-txt">- DEX & SWAP LISTING</p>
            <p className="def-txt">- TEAM FUNCTION </p>
          </li>
          <li className="timeline-item" data-date="JUL-AUG 2022">
            <h3 className="timeline-header mb-10">PHASE 4</h3>
            <p className="def-txt">- GAMEPLAY ALPHA LAUNCH</p>
            <p className="def-txt">- TOURNAMENT MODE</p>
            <p className="def-txt">- CHAMPIONSHIP TOURNAMENT</p>
            
          </li>


        </ul>
      </div>

    </section>
  )
}

export default RoadMapSection;
