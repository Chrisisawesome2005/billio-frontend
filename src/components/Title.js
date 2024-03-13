import React from "react";

const Title = ({ title, text }) => {
  return (
    <div className="text-center p-3 mb-4">
      <h1 data-aos="fade-down" data-aos-delay="50">
        {title.toUpperCase()}
      </h1>
      <div
        data-aos="fade-down"
        data-aos-delay="150"
        className="line my-2"
      ></div>
      <small
        data-aos="fade-down"
        data-aos-delay="250"
        className="mx-auto"
        style={{ width: "40%" }}
      >
        {text}
      </small>
    </div>
  );
};

export default Title;
