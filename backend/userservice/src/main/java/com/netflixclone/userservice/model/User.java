package com.netflixclone.userservice.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    public enum Subscription {
        A,
        B,
        C
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int hits;
    private Subscription subscription;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getHits() {
        return hits;
    }

    public void incrementHits() {
        this.hits++;
    }

    public Subscription getSubscription() {
        return subscription;
    }

    public void setSubscription(String subscription) {
        try {
            this.subscription = Subscription.valueOf(subscription.strip().toUpperCase());
        } catch (IllegalArgumentException e) {
            System.out.println("Invalid subscription value: " + subscription);
        }
    }

}