package com.embraer.backend.chassisUserOwner.repositories;

import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ChassisUserOwnerRepository extends JpaRepository<ChassisUserOwner, Long> {

    @Query("SELECT c FROM ChassisUserOwner c WHERE c.id = :id")
    ChassisUserOwner getChassisUserOwnerById(@Param("id") Long id);

    @Query("SELECT c FROM ChassisUserOwner c WHERE c.chassis.chassiId = :chassisId")
    ChassisUserOwner getChassisUserOwnerByChassisId(@Param("chassisId") Long chassisId);

    @Query("SELECT o FROM ChassisUserOwner o WHERE o.user.userId = :owner AND o.chassis.chassiId = :chassiId AND o.status = 'A'")
    ChassisUserOwner checkIfOwnerIsActive(@Param("owner") Long ownerId, @Param("chassiId") Long chassiId);

    @Modifying
    @Query("UPDATE ChassisUserOwner o SET o.status = :status WHERE o.id = :id")
    @Transactional
    void updateOwnerStatus(@Param("status") String status, @Param("id") Long id);

    @Query("SELECT u.userUsername FROM ChassisUserOwner o, User u WHERE o.user.userId = u.userId " +
            "AND o.chassis.chassiId = :chassisId AND o.status = 'A'")
    String getChassisOwnerNameByChassisId(@Param("chassisId") Long chassisId);

    @Query("SELECT o.chassis.chassiId FROM ChassisUserOwner o WHERE o.id = :id")
    Long getChassisByOwnerId(@Param("id") Long id);

    @Query("SELECT u.userUsername FROM ChassisUserOwner o, User u WHERE o.user.userId = u.userId AND o.id = :id")
    String getOwnerNameByOwnerId(@Param("id") Long id);

    @Query("SELECT c.user.userId, COUNT(*) FROM ChassisUserOwner c WHERE c.status = 'A' GROUP BY c.user.userId")
    List<Object[]> groupByOwner();

    @Query("SELECT DISTINCT u.userUsername FROM ChassisUserOwner o, User u WHERE o.user.userId = u.userId AND o.user.userId = :id")
    String getOwnerNameByUserId(@Param("id") Long id);

}
