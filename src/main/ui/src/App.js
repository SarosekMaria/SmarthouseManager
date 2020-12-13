import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListDevicesComponent from "./components/ListDevicesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateDeviceComponent from "./components/CreateDeviceComponent";
import UpdateDeviceComponent from "./components/UpdateDeviceComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch> http://localhost:3000/
                        <Route path="/" exact component={ListDevicesComponent}></Route>
                        <Route path="/devices" component={ListDevicesComponent}></Route>
                        <Route path="/add-device" component={CreateDeviceComponent}></Route>
                        <Route path="/update-device/:id" component={UpdateDeviceComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
