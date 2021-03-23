import React, {Component} from "react";
import DeviceService from "./DeviceService";
import getNotification from "./Utils";

class ViewDevice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            device: {}
        }
        this.correctError = this.correctError.bind(this);
    }

    componentDidMount() {
        DeviceService.getDeviceById(this.state.id).then((res) => {
           this.setState({
              device: res.data
           });
           console.log("in View this.state.device: ", this.state.device);
        });
    }

    correctError(event) {
        event.preventDefault();
        let device  = {
            name: this.state.device.name,
            description: this.state.device.description,
            num_of_errors: this.state.device.num_of_errors
        };
        console.log("device for save => " + JSON.stringify(device));

        DeviceService.updateErrors(device, this.state.id).then(res => {
            this.props.history.push("/devices");
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Device Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label className="font-weight-bold">Device Name:</label>
                            <div className="font-italic ml-2">{this.state.device.name}</div>
                        </div>
                        <div className="row">
                            <label className="font-weight-bold">Device Description:</label>
                            <div className="font-italic ml-2">{this.state.device.description}</div>
                        </div>
                        <div className="row">
                            <label className="font-weight-bold">Device Errors:</label>
                            <div className="font-italic ml-2">{this.state.device.num_of_errors}</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 offset-md-3 mt-3">
                    {getNotification(this.state.device.num_of_errors)}
                </div>
                {this.state.device.num_of_errors !== 0 ?
                    <button className="btn btn-primary col-md-6 offset-md-3 mt-3" onClick={this.correctError}>
                        Error Management
                    </button> : <div></div>}
            </div>
        )
    }
}

export default ViewDevice;