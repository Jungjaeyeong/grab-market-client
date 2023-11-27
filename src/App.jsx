import "antd/dist/antd.css";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./RouterConfig";
import "./App.css";
import Header from "./common/header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Header />
          <div id="body">
            <RouterConfig />
          </div>
          <div id="footer"></div>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
