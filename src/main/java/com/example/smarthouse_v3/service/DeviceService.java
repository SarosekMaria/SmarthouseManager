package com.example.smarthouse_v3.service;

import com.example.smarthouse_v3.domain.Device;
import com.example.smarthouse_v3.repository.SmarthouseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

public interface DeviceService {
    public Iterable<Device> getAllDevices();
    public Device createDevice(Device device);
    public ResponseEntity<Device> getDeviceById(Long id);
    public ResponseEntity<Device> updateDevice(Long id, Device extDevice);
    public ResponseEntity<Map<String, Boolean>> deleteDevice(Long id);
    public ResponseEntity<Device> updateErrors(Long id, Device extDevice);
}
