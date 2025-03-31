package com.ozalhoca.proje.ozal_hoca_proje.repository;

import com.ozalhoca.proje.ozal_hoca_proje.entity.BloodTest;
import com.ozalhoca.proje.ozal_hoca_proje.entity.BloodTestId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BloodTestRepository extends JpaRepository<BloodTest, BloodTestId> {
    // Belirli bir kullanıcıya ait tüm kan testlerini getirir.
    List<BloodTest> findByUsername(String username);
}
