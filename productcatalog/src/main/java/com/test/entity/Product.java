package com.test.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "PRODUCT")
public class Product {

    @Id
    private long productKey;

    private String retailer;

    private String brand;

    private String model;

    private String productName;

    private String productDescription;

    @Column(precision = 10, scale = 2) // Optional: control SQL column definition
    private BigDecimal price;
}
