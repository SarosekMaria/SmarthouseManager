package com.example.smarthouse_v3.decorator;

public class FireAlert implements AlertSignal {
    public FireAlert() {}

    @Override
    public String alertOn() {
        return "Fire alert is ON!";
    }

    @Override
    public boolean sendAlertMsg() {
        System.out.println("Call the residents of the house, here is fire!!!");
        return true;
    }
}
