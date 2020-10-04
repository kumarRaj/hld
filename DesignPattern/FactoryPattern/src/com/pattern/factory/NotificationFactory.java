package com.pattern.factory;

public class NotificationFactory {

    public Notification createNotification(String channel){
        switch(channel){
            case "SMS" :
                return new SMSNotification();
            case "Email" :
                return new EMailNotification();
            case "Push" :
                return new PushNotification();
            default : 
                return null;
        }

    }

}