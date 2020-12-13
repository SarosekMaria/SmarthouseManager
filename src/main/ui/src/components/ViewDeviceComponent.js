import React, {Component} from "react";
import DeviceService from "./DeviceService";

class ViewDeviceComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            device: {}
        }
    }

    componentDidMount() {
        DeviceService.getDeviceById(this.state.id).then((res) => {
           this.setState({
              device: res.data
           });
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Device Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Device Name:</label>
                            <div>{this.state.device.name}</div>
                        </div>
                        <div className="row">
                            <label>Device Description:</label>
                            <div>{this.state.device.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewDeviceComponent