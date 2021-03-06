package com.example.smarthouse_v3.service;

import com.example.smarthouse_v3.business_logic.BasicBusinessLogicClass;
import com.example.smarthouse_v3.domain.Device;
import com.example.smarthouse_v3.repository.SmarthouseRepo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@AllArgsConstructor
public class DeviceServiceImpl extends BasicBusinessLogicClass implements DeviceService {
//    @Autowired
    private SmarthouseRepo smarthouseRepo;

    public Iterable<Device> getAllDevices() {
        return smarthouseRepo.findAll();
    }

    public Device createDevice(Device device) {
        return smarthouseRepo.save(device);
    }

    public ResponseEntity<Device> getDeviceById(Long id) {
        Device device = getDevice(id);

        return ResponseEntity.ok(device);
    }

    public ResponseEntity<Device> updateDevice(Long id, Device extDevice) {
        Device device = getDevice(id);

        device.setName(extDevice.getName());
        device.setDescription(extDevice.getDescription());

        Device updatedDevice = smarthouseRepo.save(device);

        return ResponseEntity.ok(updatedDevice);
    }

    public ResponseEntity<Map<String, Boolean>> deleteDevice(Long id) {
        Device device = getDevice(id);

        smarthouseRepo.delete(device);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }

    private Device getDevice(Long id) {
        return smarthouseRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Device with id " + id + " doesn't exist"));
    }

    public ResponseEntity<Device> updateErrors(Long id, Device extDevice) {
        Device device = getDevice(id);

        device.setNum_of_errors(extDevice.getNum_of_errors() - 1);

        Device updatedDevice = smarthouseRepo.save(device);

        return ResponseEntity.ok(updatedDevice);
    }
}
