import React, {Component} from "react";
import DeviceService from "./DeviceService";

class CreateDevice extends Component {
    constructor(props) {
        super(props);

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateDevice = this.saveOrUpdateDevice.bind(this);
        this.getTitle = this.getTitle.bind(this);

        this.state = {
            id: this.props.match.params.id,
            name: "",
            description: "",
            num_of_errors: 0
        }
    }

    componentDidMount() {
        if (this.state.id === "_add") {//we try to save device
            return ;
        } else {//we try to update device
            DeviceService.getDeviceById(this.state.id).then((res) => {
                let device = res.data;
                this.setState({
                    name: device.name,
                    description: device.description,
                    num_of_errors: device.num_of_errors
                });
            });
        }
    }

    saveOrUpdateDevice = (event) => {
        event.preventDefault();
        let device  = {name: this.state.name, description: this.state.description, num_of_errors: this.state.num_of_errors};
        console.log("device for save => " + JSON.stringify(device));

        if (this.state.id === "_add") {
            DeviceService.createDevice(device).then(res => {
                console.log("Res after creating Device: ", res);
                this.props.history.push("/devices");
            })
        } else {
            DeviceService.updateDevice(device, this.state.id).then((res) => {
                console.log("res after axios.put in updateDevice: ", res);
                this.props.history.push("/devices");
            });
        }
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

    getTitle() {
        if (this.state.id === "_add") {
            return <h3 className="text-center">Add Device</h3>;
        }
        return <h3 className="text-center">Update Device</h3>;
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
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
                                    <button className="btn btn-success" onClick={this.saveOrUpdateDevice}>Save</button>
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

export default CreateDevice