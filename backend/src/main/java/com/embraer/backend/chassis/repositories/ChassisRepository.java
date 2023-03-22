package com.embraer.backend.chassis.repositories;

import com.embraer.backend.chassis.entity.Chassis;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ChassisRepository extends JpaRepository<Chassis, Long>{

}
