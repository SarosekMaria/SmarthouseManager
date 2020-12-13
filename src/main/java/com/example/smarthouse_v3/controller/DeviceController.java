package com.example.smarthouse_v3.controller;

import com.example.smarthouse_v3.domain.Device;
import com.example.smarthouse_v3.repository.SmarthouseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DeviceController {
    @Autowired
    private SmarthouseRepo smarthouseRepo;

    //get all devices
    @GetMapping("/devices")
    public Iterable<Device> getAllDevices() {
        return smarthouseRepo.findAll();
    }

    //create device REST API
    @PostMapping("/devices")
    public Device createDevice(@RequestBody Device device) {
        return smarthouseRepo.save(device);
    }

    //get device by id REST API
    @GetMapping("/devices/{id}")
    public ResponseEntity<Device> getDeviceById(@PathVariable Long id) {
        Device device = smarthouseRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Device with id " + id + "  doesn't exist"));

        return ResponseEntity.ok(device);
    }

    //update device REST API
    @PutMapping("/devices/{id}")
    public ResponseEntity<Device> updateDevice(@PathVariable Long id, @RequestBody Device extDevice) {
        Device device = smarthouseRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Device with id " + id + " doesn't exist"));

        device.setName(extDevice.getName());
        device.setDescription(extDevice.getDescription());

        Device updatedDevice = smarthouseRepo.save(device);

        return ResponseEntity.ok(updatedDevice);
    }
}
