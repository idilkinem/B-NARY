package com.ozalhoca.proje.ozal_hoca_proje.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "blood_tests")
@IdClass(BloodTestId.class)
public class BloodTest {

    @Id
    @Column(name = "username", length = 50, nullable = false)
    private String username;

    @Id
    @Column(name = "test_date", nullable = false)
    private LocalDate testDate;

    @Column(name = "sodium", precision = 5, scale = 2)
    private BigDecimal sodium;

    @Column(name = "potassium", precision = 5, scale = 2)
    private BigDecimal potassium;

    @Column(name = "chloride", precision = 5, scale = 2)
    private BigDecimal chloride;

    @Column(name = "calcium", precision = 5, scale = 2)
    private BigDecimal calcium;

    @Column(name = "magnesium", precision = 5, scale = 2)
    private BigDecimal magnesium;

    // İlişki: Her kan testi bir kullanıcıya aittir.
    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username", insertable = false, updatable = false)
    private User user;

    // Getters ve Setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDate getTestDate() {
        return testDate;
    }

    public void setTestDate(LocalDate testDate) {
        this.testDate = testDate;
    }

    public BigDecimal getSodium() {
        return sodium;
    }

    public void setSodium(BigDecimal sodium) {
        this.sodium = sodium;
    }

    public BigDecimal getPotassium() {
        return potassium;
    }

    public void setPotassium(BigDecimal potassium) {
        this.potassium = potassium;
    }

    public BigDecimal getChloride() {
        return chloride;
    }

    public void setChloride(BigDecimal chloride) {
        this.chloride = chloride;
    }

    public BigDecimal getCalcium() {
        return calcium;
    }

    public void setCalcium(BigDecimal calcium) {
        this.calcium = calcium;
    }

    public BigDecimal getMagnesium() {
        return magnesium;
    }

    public void setMagnesium(BigDecimal magnesium) {
        this.magnesium = magnesium;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
