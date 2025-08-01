package com.test.repository;

import com.test.entity.Product;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.math.BigDecimal;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @Test
    public void testSaveAndFindById() {
        Product product = new Product();
        product.setProductKey(123456L);
        product.setRetailer("Amazon");
        product.setBrand("Apple");
        product.setModel("iPhone 14");
        product.setProductName("iPhone 14");
        product.setProductDescription("Latest Apple iPhone");
        product.setPrice(new BigDecimal("79999.00"));

        productRepository.save(product);

        Product saved = productRepository.findById(123456L).orElse(null);
        assertThat(saved).isNotNull();
        assertThat(saved.getBrand()).isEqualTo("Apple");
    }
}
