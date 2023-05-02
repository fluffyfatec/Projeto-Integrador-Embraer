package com.embraer.backend.chassisUserOwner.repositories;

import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChassisUserOwnerRepository extends JpaRepository<ChassisUserOwner, Long> {
}
