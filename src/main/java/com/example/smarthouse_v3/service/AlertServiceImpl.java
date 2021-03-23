package com.example.smarthouse_v3.service;

import com.example.smarthouse_v3.decorator.*;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
@RequestMapping("/alert")
public class AlertServiceImpl implements AlertService {

    @Override
    public void sendFireAlertMsg() {
        AlertHandlerBaseDecorator handler = new FireAlertHandler(new FireAlert());
        System.out.println("----------------- Case of Fire ---------------------");
        handler.alertOn();
        handler.sendAlertMsg();
        System.out.println("----------------------------------------------------");
    }

    @Override
    public void sendFloodAlertMsg() {
        AlertHandlerBaseDecorator handler = new FloodAlertHandler(new FloodAlert());
        System.out.println("++++++++++++++++ Case of Flood +++++++++++++++++++++");
        handler.alertOn();
        handler.sendAlertMsg();
        System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++");    }
}
