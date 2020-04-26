import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./Routes/routes";
import NavBar from "./NavBar/navBar";

const RouteWithSubRoutes = (route) => {
  console.log("routeeee", route);
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const Routes = () => {
  let isLogin = true;
  return (
    <div>
      <NavBar />
      <Switch>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            sensitive={route.sensitive}
            children={<route.main />}
          />
        ))}
        {/* {routes.map((route) => (
          // <RouteWithSubRoutes key={route.path} {...route} />
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))} */}
      </Switch>
    </div>
  );
};

export default Routes;
