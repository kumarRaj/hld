package com.pattern.factory;

public class NotificationService {

    public static void main(String[] args){
        NotificationFactory notificationFactory = new NotificationFactory();
        Notification notification = notificationFactory.createNotification(args[0]);
        notification.notifyUser();
    }

}