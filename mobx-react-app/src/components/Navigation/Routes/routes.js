import App from "../../App/App";
import React from "react";

import PageNotFound from "../../Shared/PageNotFound/PageNotFound";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/bubblegum",
    strict: true,
    sensitive: true,
    exact: true,
    // sidebar: () => <div>bubblegum!</div>,
    main: App,
  },
  {
    path: "*",
    main: PageNotFound,
  },
];

export default routes;
