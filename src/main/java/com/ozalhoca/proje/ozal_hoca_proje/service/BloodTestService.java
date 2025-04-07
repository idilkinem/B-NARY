package com.ozalhoca.proje.ozal_hoca_proje.service;

import com.ozalhoca.proje.ozal_hoca_proje.entity.BloodTest;
import com.ozalhoca.proje.ozal_hoca_proje.repository.BloodTestRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BloodTestService {

    private final BloodTestRepository repository;

    public BloodTestService(BloodTestRepository repository) {
        this.repository = repository;
    }

    public List<BloodTest> getAllTests() {
        return repository.findAll();
    }

    public Optional<BloodTest> getTestById(Long id) {
        return repository.findById(id);
    }

    public BloodTest saveTest(BloodTest test) {
        return repository.save(test);
    }

    public void deleteTest(Long id) {
        repository.deleteById(id);
    }
}
