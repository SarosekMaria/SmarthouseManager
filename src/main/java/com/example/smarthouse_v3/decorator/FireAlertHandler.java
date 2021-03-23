package com.example.smarthouse_v3.decorator;

public class FireAlertHandler extends AlertHandlerBaseDecorator {
    public FireAlertHandler(AlertSignal alertSignal) {
        super(alertSignal);
    }

    @Override
    public String alertOn() {
        System.out.println("Calling the fire department...");
        return super.alertOn();
    }

    @Override
    public boolean sendAlertMsg() {
        System.out.println("Sending alert message to administrator");
        return super.sendAlertMsg();
    }
}
