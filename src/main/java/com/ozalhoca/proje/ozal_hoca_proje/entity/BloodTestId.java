
package com.ozalhoca.proje.ozal_hoca_proje.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

public class BloodTestId implements Serializable {

    private String username;
    private LocalDate testDate;

    // Varsayılan yapıcı (default constructor)
    public BloodTestId() {
    }

    public BloodTestId(String username, LocalDate testDate) {
        this.username = username;
        this.testDate = testDate;
    }

    // equals ve hashCode metotları
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof BloodTestId)) return false;
        BloodTestId that = (BloodTestId) o;
        return Objects.equals(username, that.username) &&
                Objects.equals(testDate, that.testDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, testDate);
    }
}
