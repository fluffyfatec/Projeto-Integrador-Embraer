package com.embraer.backend.chassisUserPilot.repositories;

import com.embraer.backend.chassisUserPilot.entity.ChassisUserPilot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChassisUserPilotRepository extends JpaRepository<ChassisUserPilot, Long> {
}
