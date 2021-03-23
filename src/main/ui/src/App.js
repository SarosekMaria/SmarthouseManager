import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListDevices from "./components/ListDevices";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateDevice from "./components/CreateDevice";
import ViewDevice from "./components/ViewDevice";
// import Test from "./components/Test";
import AlertSignal from "./components/AlertSignal";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch> http://localhost:3000/
                        <Route path="/" exact component={ListDevices}></Route>
                        <Route path="/devices" component={ListDevices}></Route>
                        <Route path="/add-device/:id" component={CreateDevice}></Route>
                        <Route path="/view-device/:id" component={ViewDevice}></Route>
                        <Route path="/alert" component={AlertSignal}></Route>
                        {/*<Route path="/test" component={Test}></Route>*/}
                        {/*<Route path="/update-device/:id" component={UpdateDeviceComponent}></Route>*/}
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
