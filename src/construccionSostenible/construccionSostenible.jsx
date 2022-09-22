import React from "react";
import "./construccionSostenible.scss";

export const ConstruccionSostenible = ({
  title,
  subtitle,
  description,
  logo,
  image,
}) => {
  return (
    <div className="wrapper">
      <div className="text__container">
        <span className="title title__black">
          {title}
          <span className="title__blue">{subtitle}</span>
        </span>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="images">
        <div className="logo__container">
          <img src={logo} alt="logoAyC" className="logo" />
        </div>
        <img src={image} alt="building" className="image" />
      </div>
    </div>
  );
};
