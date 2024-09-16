import React from "react";
import PortfolioData from "./PortfolioData";

export default function Achievements() {
  return (
    <div className="achievement-container">
      <h4>Portfolio</h4>
      <h3 className="achievement-title">Showcasing Our Finest Work</h3>
      <div className="portfolio-card-container">
        {PortfolioData.map((item, index) => {
          return (
            <div className="portfolio-card" key={index}>
              {/* Use process.env.PUBLIC_URL to reference images */}
              <img
                src={`${process.env.PUBLIC_URL}/${item.image}`}
                alt={item.title}
                width="100%"
              />
              <div className="portfolio-card-info">
                <h3>{item.title}</h3>
                <p>{item.category} • Mwaca Graphix</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
