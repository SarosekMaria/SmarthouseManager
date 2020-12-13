import React, {Component} from "react";
import DeviceService from "./DeviceService";

class CreateDeviceComponent extends Component {
    constructor(props) {
        super(props);

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveDevice = this.saveDevice.bind(this);

        this.state = {
            name: "",
            description: ""
        }
    }

    saveDevice = (event) => {
        event.preventDefault();
        let device  = {name: this.state.name, description: this.state.description};
        console.log("device for save => " + JSON.stringify(device));

        DeviceService.createDevice(device).then(res => {
            console.log("Res after creating Device: ", res);
            this.props.history.push("/devices");
        })
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
                            <h3 className="text-center">Add Device</h3>
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
                                    <button className="btn btn-success" onClick={this.saveDevice}>Save</button>
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

export default CreateDeviceComponent