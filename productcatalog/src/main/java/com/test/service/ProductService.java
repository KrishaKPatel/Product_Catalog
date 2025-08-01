package com.test.service;

import com.test.dto.BrandSummaryDTO;
import com.test.entity.Product;
import com.test.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findById(Long productKey) {
        return productRepository.findById(productKey).orElse(null);
    }

    public List<BrandSummaryDTO> getBrandSummary() {
        List<Object[]> rows = productRepository.getBrandSummary();
        return rows.stream()
                .map(row -> new BrandSummaryDTO((String) row[0], ((Number) row[1]).longValue()))
                .toList();
    }
}
