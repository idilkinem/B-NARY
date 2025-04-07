package com.ozalhoca.proje.ozal_hoca_proje.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "blood_tests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BloodTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientName;
    private int age;
    private double hemoglobin;
    private double whiteBloodCell;

}
