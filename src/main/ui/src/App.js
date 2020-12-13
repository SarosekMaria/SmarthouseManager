import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListDevicesComponent from "./components/ListDevicesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateDeviceComponent from "./components/CreateDeviceComponent";
import ViewDeviceComponent from "./components/ViewDeviceComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch> http://localhost:3000/
                        <Route path="/" exact component={ListDevicesComponent}></Route>
                        <Route path="/devices" component={ListDevicesComponent}></Route>
                        <Route path="/add-device/:id" component={CreateDeviceComponent}></Route>
                        <Route path="/view-device/:id" component={ViewDeviceComponent}></Route>
                        {/*<Route path="/update-device/:id" component={UpdateDeviceComponent}></Route>*/}
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
