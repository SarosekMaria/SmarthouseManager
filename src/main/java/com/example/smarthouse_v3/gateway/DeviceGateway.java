package com.example.smarthouse_v3.gateway;

import com.example.smarthouse_v3.domain.Device;
import com.example.smarthouse_v3.service.DeviceServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DeviceGateway {

    @Autowired
    private DeviceServiceImpl deviceService;

    //get all devices
    @GetMapping("/devices")
    public Iterable<Device> getAllDevices() {
        return deviceService.getAllDevices();
    }

    //create device REST API
    @PostMapping("/devices")
    public Device createDevice(@RequestBody Device device) {
        return deviceService.createDevice(device);
    }

    //get device by id REST API
    @GetMapping("/devices/{id}")
    public ResponseEntity<Device> getDeviceById(@PathVariable Long id) {
        return deviceService.getDeviceById(id);
    }

    //update device REST API
    @PutMapping("/devices/{id}")
    public ResponseEntity<Device> updateDevice(@PathVariable Long id, @RequestBody Device extDevice) {
        return deviceService.updateDevice(id, extDevice);
    }

    //delete device REST API
    @DeleteMapping("/devices/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDevice(@PathVariable Long id) {
        return deviceService.deleteDevice(id);
    }

    @PutMapping("/devices/errors/{id}")
    public ResponseEntity<Device> updateErrors(@PathVariable Long id, @RequestBody Device extDevice) {
        return deviceService.updateErrors(id, extDevice);
    }
}
