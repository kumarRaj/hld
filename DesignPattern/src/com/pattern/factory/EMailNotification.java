package com.pattern.factory;

public class EMailNotification implements Notification{

    @Override
    public void notifyUser() {
        System.out.println("EMail Notification called");
    }

}