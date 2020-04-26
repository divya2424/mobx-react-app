import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./FooterComponent.scss";

const FooterComponent = () => {
  return (
    <div>
      <p className="p-class">Im in Footer Component</p>
    </div>
  );
};

export default withRouter(FooterComponent);
