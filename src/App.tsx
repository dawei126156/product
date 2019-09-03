import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import routes from "./router/routes";
import 'antd/dist/antd.css'
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Router routes={routes} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
