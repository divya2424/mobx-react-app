import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  return (
    <div>
      <p className="p-class">Im in Header Component</p>
    </div>
  );
};

export default withRouter(HeaderComponent);
