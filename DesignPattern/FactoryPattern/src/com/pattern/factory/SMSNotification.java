package com.pattern.factory;


public class SMSNotification implements Notification{

    @Override
    public void notifyUser() {
        System.out.println("SMS Notification called");
    }
    
}