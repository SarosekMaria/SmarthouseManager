import React, {Component} from "react";
import DeviceService from "./DeviceService";

class ListDevicesComponent extends Component {
    constructor(props) {
        super(props);

        this.addDevice = this.addDevice.bind(this);
        this.editDevice = this.editDevice.bind(this);
        this.deleteDevice = this.deleteDevice.bind(this);
        this.viewDevice = this.viewDevice.bind(this);

        this.state = {
            devices: []
        }
    }

    addDevice() {
        this.props.history.push("/add-device/_add");
    }

    editDevice(id) {
        this.props.history.push(`/add-device/${id}`);
    }

    deleteDevice(id) {
        DeviceService.deleteDevice(id).then((res) => {
           this.setState({
              devices: this.state.devices.filter(device => device.id !== id)
           });
        });
    }

    viewDevice(id) {
        this.props.history.push(`/view-device/${id}`);
    }

    componentDidMount() {
        DeviceService.getDevices().then((res) => {
            this.setState({devices: res.data});
        });
    }

    render () {
        return (
            <div>
                <h2 className="text-center mt-5">Devices List</h2>
                <div className="row">
                    <button className="btn btn-primary mb-2" onClick={this.addDevice}>Add Device</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Device name</th>
                                <th>Device description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.devices.map(
                                    device =>
                                        <tr key={device.id}>
                                            <td>{device.name}</td>
                                            <td>{device.description}</td>
                                            <td>
                                                <button
                                                    onClick={() => this.editDevice(device.id)}
                                                    className="btn btn-info">
                                                    Update
                                                </button>
                                                <button
                                                    style={{marginLeft: "20px"}}
                                                    onClick={() => this.deleteDevice(device.id)}
                                                    className="btn btn-danger">
                                                    Delete
                                                </button>
                                                <button
                                                    style={{marginLeft: "20px"}}
                                                    onClick={() => this.viewDevice(device.id)}
                                                    className="btn btn-info">
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListDevicesComponent