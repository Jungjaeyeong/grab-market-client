import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Main = lazy(() => import("./main/index"));
const Upload = lazy(() => import("./upload/index"));
const Product = lazy(() => import("./product/index"));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/upload", element: <Upload /> },
    { path: "/products/:id", element: <Product /> },
  ]);

  return routes;
};

export default RouterConfig;
