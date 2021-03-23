import React, {Component} from "react";
import AlertService from "./AlertService";

class AlertSignal extends Component {
    constructor(props) {
        super(props);

        this.sendFireAlert = this.sendFireAlert.bind(this);
        this.sendFloodAlert = this.sendFloodAlert.bind(this);

        this.state = {
        }
    }

    sendFireAlert() {
        AlertService.sendFireAlertMsg()
    }

    sendFloodAlert() {
        AlertService.sendFloodAlertMsg();
    }

    render() {
        return (
            <div className="container justify-content-center h-100">
                <div className="row center">
                    <div className="col center">
                        <button
                            id="fireAlertBtn"
                            className="btn btn-primary btn-lg btn-block mt-5"
                            onClick={this.sendFireAlert}
                        >
                            Fire Alert!
                        </button>
                    </div>
                </div>
                <div className="row center">
                    <div className="col center">
                        <button
                            id="floodAlertBtn"
                            className="btn btn-primary btn-lg btn-block mt-5"
                            onClick={this.sendFloodAlert}
                        >
                            Flood Alert!
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertSignal;