import React, {Component} from "react";
import DeviceService from "./DeviceService";

class UpdateDeviceComponent extends Component {
 constructor(props) {
        super(props);

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateDevice = this.updateDevice.bind(this);

        this.state = {
            id: this.props.match.params.id,//approach to get id from the Route
            name: "",
            description: ""
        }
    }

    componentDidMount() {
        DeviceService.getDeviceById(this.state.id).then((res) => {
            let device = res.data;
            this.setState({
                name: device.name,
                description: device.description
            });
        });
    }

    updateDevice = (event) => {
        event.preventDefault();
        let device  = {name: this.state.name, description: this.state.description};
        console.log("device for update => " + JSON.stringify(device));

        DeviceService.updateDevice(device, this.state.id).then((res) => {
            console.log("res after axios.put in updateDevice: ", res);
            this.props.history.push("/devices");
        });
    }

    cancel() {
        this.props.history.push("/devices");
    }

    changeNameHandler = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    changeDescriptionHandler = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Device</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input placeholder="Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateDevice}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateDeviceComponent;