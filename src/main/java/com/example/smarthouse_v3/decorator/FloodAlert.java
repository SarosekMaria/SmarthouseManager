package com.example.smarthouse_v3.decorator;

public class FloodAlert implements AlertSignal {

    @Override
    public String alertOn() {
        return "Flood alert is ON!";
    }

    @Override
    public boolean sendAlertMsg() {
        System.out.println("Call the residents of the house, here is flood!!!");
        return true;
    }
}
