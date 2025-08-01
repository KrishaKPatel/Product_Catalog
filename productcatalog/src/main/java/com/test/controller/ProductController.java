package com.test.controller;
import com.test.dto.BrandSummaryDTO;

import com.test.entity.Product;
import com.test.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

    private final ProductService productService;

    @PostMapping("/save")
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {

        log.info("@@@@@@@Trying to save data for Product: " + product.getProductName());
        return ResponseEntity.ok(productService.save(product));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Product>> findAll() {
        return ResponseEntity.ok(productService.findAll());
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Product> findProductById(@PathVariable("id") Long id) {
        Product product = productService.findById(id);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/brand-summary")
    public ResponseEntity<List<BrandSummaryDTO>> getBrandSummary() {
        return ResponseEntity.ok(productService.getBrandSummary());
    }

}