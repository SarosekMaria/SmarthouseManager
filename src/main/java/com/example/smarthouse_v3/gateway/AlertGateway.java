package com.example.smarthouse_v3.gateway;

import com.example.smarthouse_v3.decorator.*;
import com.example.smarthouse_v3.service.AlertServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/devices/alert")
public class AlertGateway {
    @Autowired
    private AlertServiceImpl alertService;

    @PutMapping("/fire")
    public void sendFireAlertMsg() {
        alertService.sendFireAlertMsg();
    }

    @PutMapping("/flood")
    public void sendFloodAlertMsg() {
        alertService.sendFloodAlertMsg();
    }
}
