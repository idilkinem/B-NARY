package com.ozalhoca.proje.ozal_hoca_proje.service;

import com.ozalhoca.proje.ozal_hoca_proje.entity.User;
import com.ozalhoca.proje.ozal_hoca_proje.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;

    public AuthenticationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            // Bu örnekte basit bir eşleşme kontrolü yapıyoruz.
            // Gerçek uygulamada şifreleri hash'leyip kontrol etmelisiniz.
            return user.getPassword().equals(password);
        }
        return false;
    }
}
