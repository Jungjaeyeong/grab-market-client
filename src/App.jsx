import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./RouterConfig";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <div id="header">
            <div id="header-area">
              <img src="/images/icons/logo.png" alt="대체이미지" />
            </div>
          </div>
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
