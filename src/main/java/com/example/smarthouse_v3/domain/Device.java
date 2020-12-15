package com.example.smarthouse_v3.domain;

import javax.persistence.*;

@Entity
@Table(name = "devices")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "num_of_errors")
    private Long num_of_errors;

    public Device() {
    }

    public Device(String name, String description, Long num_of_errors) {
        super();
        this.name = name;
        this.description = description;
        this.num_of_errors = num_of_errors;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getNum_of_errors() {
        return num_of_errors;
    }

    public void setNum_of_errors(Long num_of_errors) {
        this.num_of_errors = num_of_errors;
    }
}
