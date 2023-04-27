package com.embraer.backend.chassisSb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

@Repository
public interface ChassiServiceBulletinRepository  extends JpaRepository<ChassiServiceBulletin, Long>{

	List<ChassiServiceBulletin> findByChassiId(Chassis chassi);

	List<ChassiServiceBulletin> findByServiceBulletinId(ServiceBulletin serviceBulletin);

	@Query("SELECT csb.serviceBulletinStatus FROM ChassiServiceBulletin csb WHERE csb.serviceBulletinId.serviceBulletinId = :sbId" +
			" AND csb.chassiId.chassiId = :chassiId")
	String findSbStatusBySbId(@Param("sbId") Long sbId, @Param("chassiId") Long chassiId);


}
