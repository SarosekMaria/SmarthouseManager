package com.example.smarthouse_v3.decorator;

public class AlertHandlerBaseDecorator implements AlertSignal {
    private AlertSignal wrapper;

    AlertHandlerBaseDecorator(AlertSignal alertSignal) {
        this.wrapper = alertSignal;
    }

    @Override
    public String alertOn() {
        return wrapper.alertOn();
    }

    @Override
    public boolean sendAlertMsg() {
        return wrapper.sendAlertMsg();
    }
}
