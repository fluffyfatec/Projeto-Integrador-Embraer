package com.embraer.backend.chassisSb.repository;

import java.util.List;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChassiServiceBulletinRepository  extends JpaRepository<ChassiServiceBulletin, Long>{

	List<ChassiServiceBulletin> findByChassiId(Chassis chassi);
}
