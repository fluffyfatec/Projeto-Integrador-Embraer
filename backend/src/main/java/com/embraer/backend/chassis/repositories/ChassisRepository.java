package com.embraer.backend.chassis.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.embraer.backend.chassis.entity.Chassis;

import java.util.List;

@Repository
public interface ChassisRepository extends JpaRepository<Chassis, Long>{

    @Query("SELECT c FROM Chassis c, ChassisUserOwner o WHERE c.chassiId = o.chassis AND o.user.userId = :userId")
    List<Chassis> getChassisEditor(@Param("userId") Long userId);

    @Query("SELECT c FROM Chassis c, ChassisUserPilot p WHERE c.chassiId = p.chassis AND p.pilot.userId = :pilotId")
    List<Chassis> getChassisPilot(@Param("pilotId") Long pilotId);

    @Query("SELECT c FROM Chassis c LEFT JOIN ChassisUserOwner o ON o.chassis = c.chassiId " +
            "WHERE o.chassis IS NULL")
    List<Chassis> getChassisThatDontHaveOwner();

}
