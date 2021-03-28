package com.example.smarthouse_v3.service;

import com.example.smarthouse_v3.domain.Device;
import com.example.smarthouse_v3.repository.SmarthouseRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DeviceServiceImplTest {
    private final SmarthouseRepo smarthouseRepoMock = mock(SmarthouseRepo.class);
    private DeviceService deviceService = new DeviceServiceImpl(smarthouseRepoMock);

    @Test
    void testGetDevice() {
        List<Device> devices = new ArrayList<>();
        devices.add(new Device("controller", "ordinary controller", 3L));
        devices.add(new Device("humidity sensor", "measure the humidity", 5L));
        devices.add(new Device("temperature sensor", "measure the temperature", 1L));

        when(smarthouseRepoMock.findAll()).thenReturn(devices);

        assertEquals(devices, deviceService.getAllDevices());
        verify(smarthouseRepoMock, times(1)).findAll();
    }
}