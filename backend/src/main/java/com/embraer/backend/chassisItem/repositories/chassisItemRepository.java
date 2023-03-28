package com.embraer.backend.chassisItem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.chassisItem.entity.ChassisItem;

@Repository
public interface chassisItemRepository extends JpaRepository<ChassisItem, Long> {

}
