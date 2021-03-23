package com.example.smarthouse_v3.service;

import com.example.smarthouse_v3.domain.Device;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface DeviceService {
    Iterable<Device> getAllDevices();

    Device createDevice(Device device);

    ResponseEntity<Device> getDeviceById(Long id);

    ResponseEntity<Device> updateDevice(Long id, Device extDevice);

    ResponseEntity<Map<String, Boolean>> deleteDevice(Long id);

    ResponseEntity<Device> updateErrors(Long id, Device extDevice);
}
