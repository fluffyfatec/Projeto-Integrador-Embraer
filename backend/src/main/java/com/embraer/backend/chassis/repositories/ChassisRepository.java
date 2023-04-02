package com.embraer.backend.chassis.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.chassis.entity.Chassis;

@Repository
public interface ChassisRepository extends JpaRepository<Chassis, Long>{

}
