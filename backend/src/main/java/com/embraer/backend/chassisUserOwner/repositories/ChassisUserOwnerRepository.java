package com.embraer.backend.chassisUserOwner.repositories;

import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ChassisUserOwnerRepository extends JpaRepository<ChassisUserOwner, Long> {

    @Query("SELECT c FROM ChassisUserOwner c WHERE c.id = :id")
    ChassisUserOwner getChassisUserOwnerById(@Param("id") Long id);

    @Query("SELECT c FROM ChassisUserOwner c WHERE c.chassis.chassiId = :chassisId")
    ChassisUserOwner getChassisUserOwnerByChassisId(@Param("chassisId") Long chassisId);

}
