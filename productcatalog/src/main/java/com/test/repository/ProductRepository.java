// src/main/java/com/test/repository/ProductRepository.java
package com.test.repository;

import com.test.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT brand, COUNT(*) AS count FROM PRODUCT GROUP BY brand", nativeQuery = true)
    List<Object[]> getBrandSummary();
}
