package com.example.smarthouse_v3.decorator;

public class FloodAlertHandler extends AlertHandlerBaseDecorator {
    public FloodAlertHandler(AlertSignal alertSignal) {
        super(alertSignal);
    }

    @Override
    public String alertOn() {
        System.out.println("Calling the neighbours...");
        return super.alertOn();
    }

    @Override
    public boolean sendAlertMsg() {
        System.out.println("Start drying the flooded rooms");
        return super.sendAlertMsg();
    }
}
