package com.ozalhoca.proje.ozal_hoca_proje;

import com.ozalhoca.proje.ozal_hoca_proje.entity.BloodTest;
import com.ozalhoca.proje.ozal_hoca_proje.service.BloodTestService;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.math.BigDecimal;
import java.time.LocalDate;

public class TerminalTest {
    public static void main(String[] args) {
        // Spring Boot uygulama konteynerini başlatır
        ConfigurableApplicationContext context = SpringApplication.run(OzalHocaProjeApplication.class, args);

        // Service bean'ini alır
        BloodTestService bloodTestService = context.getBean(BloodTestService.class);

        // Test için örnek bir kan testi nesnesi oluşturulur
        String username = "testuser"; // Bu kullanıcı veritabanınızda mevcut olmalı
        BloodTest bloodTest = new BloodTest();
        bloodTest.setUsername(username);
        bloodTest.setTestDate(LocalDate.now());
        bloodTest.setSodium(new BigDecimal("140.50"));
        bloodTest.setPotassium(new BigDecimal("4.50"));
        bloodTest.setChloride(new BigDecimal("102.00"));
        bloodTest.setCalcium(new BigDecimal("9.20"));
        bloodTest.setMagnesium(new BigDecimal("2.10"));

        // Yeni kan testi kaydı eklenir
        BloodTest savedTest = bloodTestService.saveTest(bloodTest);
        System.out.println("Yeni kan testi kaydedildi: " + savedTest);

        // Uygulama kapatılır
        context.close();
    }
}
