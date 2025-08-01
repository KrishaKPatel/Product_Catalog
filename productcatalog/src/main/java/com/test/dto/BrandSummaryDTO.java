// src/main/java/com/test/dto/BrandSummaryDTO.java
package com.test.dto;

public class BrandSummaryDTO {
    private String brand;
    private long count;

    public BrandSummaryDTO(String brand, long count) {
        this.brand = brand;
        this.count = count;
    }

    public String getBrand() {
        return brand;
    }

    public long getCount() {
        return count;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setCount(long count) {
        this.count = count;
    }
}
