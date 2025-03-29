package com.ozalhoca.proje.ozal_hoca_proje.controller;

import com.ozalhoca.proje.ozal_hoca_proje.entity.BloodTest;
import com.ozalhoca.proje.ozal_hoca_proje.service.BloodTestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blood-tests")
public class BloodTestController {

    private final BloodTestService service;

    public BloodTestController(BloodTestService service) {
        this.service = service;
    }

    @GetMapping
    public List<BloodTest> getAllTests() {
        return service.getAllTests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BloodTest> getTestById(@PathVariable Long id) {
        Optional<BloodTest> test = service.getTestById(id);
        return test.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public BloodTest createTest(@RequestBody BloodTest test) {
        return service.saveTest(test);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTest(@PathVariable Long id) {
        service.deleteTest(id);
        return ResponseEntity.noContent().build();
    }

}
