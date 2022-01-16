
import React, { useEffect, useState } from "react";

function LandingSection(props) {
  const [errorMessage, setErrorMessage] = useState(null)
  const stake = async () => {
    props.propsStake();
  }

  useEffect(() => {
    setErrorMessage(props.errorMessage)
  }, [props.errorMessage])

  return (
    <section id="landing-section" className="landing-section">
      <h1 className="main-header">RACE-TO-EARN</h1>
      <h1 className="sub-header mb-30">FIRST 3D F1 SIMULATOR IN BINANCE SMART CHAIN</h1>
      <button className="def-btn mb-30" onClick={() => stake()}>MINT NOW</button>
      {(errorMessage) &&
        <div className="error-wrapper">
          {errorMessage}
        </div>
      }
    </section>
  )
}

export default LandingSection;
