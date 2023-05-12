package com.embraer.backend.chassisUserPilot.repositories;

import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import com.embraer.backend.chassisUserPilot.entity.ChassisUserPilot;
import com.embraer.backend.item.entity.Item;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ChassisUserPilotRepository extends JpaRepository<ChassisUserPilot, Long> {

    @Modifying
    @Query("DELETE FROM ChassisUserPilot c WHERE c.owner.id = :ownerId")
    @Transactional
    void deleteByOwnerId(@Param("ownerId") Long ownerId);

    @Query("SELECT c FROM ChassisUserPilot c WHERE c.id = :id")
    ChassisUserPilot getChassisUserPilotById(@Param("id") Long id);

    @Query("SELECT p FROM ChassisUserPilot p WHERE p.owner.id = :owner AND p.pilot.userId = :pilot AND " +
            "p.chassis.chassiId = :chassiId AND p.status = 'A'")
    ChassisUserPilot checkIfPilotIsActive(@Param("owner") Long ownerId, @Param("pilot") Long pilotId,
                                          @Param("chassiId") Long chassiId);

    @Modifying
    @Query("UPDATE ChassisUserPilot p SET p.status = :status WHERE p.id = :id")
    @Transactional
    void updatePilotStatus(@Param("status") String status, @Param("id") Long id);

}
