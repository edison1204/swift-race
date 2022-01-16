import React from "react";

function FooterSection() {

  return (
    <section className="footer-section">
      <div className="footer-logo-wrapper">
        <img src="/logo/blue_logo.png" alt="Swift Race" />
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-about-wrapper">
          <h3 className="footer-header-wrapper">ABOUT</h3>
          <a href="#" target="_blank" className="footer-link" rel="noreferrer" >
            White Paper
          </a>
          
        </div>
        <div className="footer-about-social">
          <h3 className="footer-header-wrapper">SOCIAL</h3>
          <a href="#" target="_blank" className="footer-link" rel="noreferrer" >
            Telegram
          </a>
          <a href="#" target="_blank" className="footer-link" rel="noreferrer" >
            Twitter
          </a>
          <a href="#" target="_blank" className="footer-link" rel="noreferrer" >
            Discord
          </a>
          

        </div>
        <div className="footer-about-info">
          <h3 className="footer-header-wrapper">INFO</h3>
          <a href="#" target="_blank" className="footer-link" rel="noreferrer" >
            Official Token
          </a>
          <a href="#" target="_blank" className="footer-link mb-10" rel="noreferrer" >
            Help Center
          </a>

          <button className="def-btn footer-btn" >BUY SRT</button>
          <button className="def-btn footer-btn" >BUY NFT</button>
        </div>
      </div>
    </section>
  )
}

export default FooterSection;
