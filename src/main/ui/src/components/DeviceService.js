import axios from "axios";

const DEVICE_API_BASE_URL = "http://localhost:8080/api/devices"

class DeviceService {

    getDevices() {
        return axios.get(DEVICE_API_BASE_URL);
    }

    createDevice(device) {
        return axios.post(DEVICE_API_BASE_URL, device);
    }

    getDeviceById(deviceId) {
        return axios.get(DEVICE_API_BASE_URL + "/" + deviceId);
    }

    updateDevice(device, deviceId) {
        //deviceId == 1 => http://localhost:8080/api/devices/1
        return axios.put(DEVICE_API_BASE_URL + "/" + deviceId, device);
    }

    deleteDevice(deviceId) {
        return axios.delete(DEVICE_API_BASE_URL + "/" + deviceId);
    }
}

export default new DeviceService()