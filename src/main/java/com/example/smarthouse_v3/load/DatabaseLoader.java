package com.example.smarthouse_v3.load;

import com.example.smarthouse_v3.domain.Device;
import com.example.smarthouse_v3.repository.SmarthouseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final SmarthouseRepo smarthouseRepo;

    @Autowired
    public DatabaseLoader(SmarthouseRepo smarthouseRepo) {
        this.smarthouseRepo = smarthouseRepo;
    }

    @Override
    public void run(String... strings) throws Exception {
//        this.smarthouseRepo.save(new Device("raspberryPI", "this is mini computer"));
    }
}
