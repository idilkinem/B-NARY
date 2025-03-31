package com.ozalhoca.proje.ozal_hoca_proje.service;

import com.ozalhoca.proje.ozal_hoca_proje.entity.BloodTest;
import com.ozalhoca.proje.ozal_hoca_proje.entity.BloodTestId;
import com.ozalhoca.proje.ozal_hoca_proje.repository.BloodTestRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BloodTestService {

    private final BloodTestRepository bloodTestRepository;

    public BloodTestService(BloodTestRepository bloodTestRepository) {
        this.bloodTestRepository = bloodTestRepository;
    }

    /**
     * Tüm kan testlerini getirir.
     */
    public List<BloodTest> getAllTests() {
        return bloodTestRepository.findAll();
    }

    /**
     * Composite key'e göre tek bir kan testini getirir.
     * @param username  Kullanıcı adı
     * @param testDate  Test tarihi
     */
    public Optional<BloodTest> getTestById(String username, LocalDate testDate) {
        BloodTestId id = new BloodTestId(username, testDate);
        return bloodTestRepository.findById(id);
    }

    /**
     * Yeni bir kan testi ekler veya günceller.
     * @param test Kaydedilecek BloodTest nesnesi
     */
    public BloodTest saveTest(BloodTest test) {
        return bloodTestRepository.save(test);
    }

    /**
     * Composite key'e göre kan testini siler.
     * @param username  Kullanıcı adı
     * @param testDate  Test tarihi
     */
    public void deleteTest(String username, LocalDate testDate) {
        BloodTestId id = new BloodTestId(username, testDate);
        bloodTestRepository.deleteById(id);
    }
}
