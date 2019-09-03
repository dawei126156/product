import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import RouterView from './router/RouterView';
import router from './router/router';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <RouterView routes={router.routes} />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
