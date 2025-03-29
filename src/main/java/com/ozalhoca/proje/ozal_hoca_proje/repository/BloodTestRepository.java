package com.ozalhoca.proje.ozal_hoca_proje.repository;

import com.ozalhoca.proje.ozal_hoca_proje.entity.BloodTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BloodTestRepository extends JpaRepository<BloodTest, Long> {
    Long id(Long id);
}
