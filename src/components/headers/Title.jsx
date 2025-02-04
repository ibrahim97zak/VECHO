import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h2 className="main-title">{title}</h2>
      <div className="flex justify-center">
        <div className="w-24 border-b-4 border-primary mb-8"></div>
      </div>
    </div>
  );
};

export default Title;
