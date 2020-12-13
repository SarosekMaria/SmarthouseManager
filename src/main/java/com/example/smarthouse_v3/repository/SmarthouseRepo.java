package com.example.smarthouse_v3.repository;

import com.example.smarthouse_v3.domain.Device;
import org.springframework.data.repository.CrudRepository;

public interface SmarthouseRepo extends CrudRepository<Device, Long> {
}
