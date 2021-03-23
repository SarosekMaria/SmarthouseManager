import axios from "axios";

const ALERT_API_BASE_URL = "http://localhost:8080/api/devices"

class AlertService {
    sendFireAlertMsg() {
        axios.put(ALERT_API_BASE_URL + "/alert/fire");
    }

    sendFloodAlertMsg() {
        axios.put(ALERT_API_BASE_URL + "/alert/flood");
    }
}

export default new AlertService();