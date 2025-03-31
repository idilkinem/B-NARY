package com.ozalhoca.proje.ozal_hoca_proje.repository;

import com.ozalhoca.proje.ozal_hoca_proje.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByUsername(String username);
}
