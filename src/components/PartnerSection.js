import React, { useState } from "react";

function PartnerSection() {
  const [partners] = useState([
    {
      img: "/partners/partner1.png",
      url: "#",
    },
    {
      img: "/partners/partner2.png",
      url: "#",
    },
    {
      img: "/partners/partner3.png",
      url: "#",
    
    },
  ]);

  return (
    <section id="partners-section" className="partners-section">
      <div className="page-header-wrapper mb-150">
        <h1 className="main-header">PARTNERSHIP</h1>
      </div>


      <div className="partners-wrapper">
        {(partners.map((partner, index) => (
          <a href={partner.url} target="_blank" className="partner-item" key={index} rel="noreferrer" >
            <img src={partner.img} alt={`partner_${index}`} />
          </a>
        )))}

      </div>


    </section>
  )
}

export default PartnerSection;
