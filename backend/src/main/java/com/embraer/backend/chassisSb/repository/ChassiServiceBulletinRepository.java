package com.embraer.backend.chassisSb.repository;

import java.util.List;

import org.springframework.cache.annotation.Cacheable;
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

	@Query("SELECT cs FROM ServiceBulletin sb, ChassisUserOwner o, ChassiServiceBulletin cs WHERE " +
			"o.chassis = cs.chassiId AND cs.serviceBulletinId = sb.serviceBulletinId AND " +
			"o.user.userId = :userId AND cs.serviceBulletinId.serviceBulletinId = :sbId")
	List<ChassiServiceBulletin> findByServiceBulletinIdEditor(@Param("sbId") Long sbId, @Param("userId") Long userId);

	@Query("SELECT csb.serviceBulletinStatus FROM ChassiServiceBulletin csb WHERE csb.serviceBulletinId.serviceBulletinId = :sbId" +
			" AND csb.chassiId.chassiId = :chassiId")
	@Cacheable("findSbStatusBySbId")
	String findSbStatusBySbId(@Param("sbId") Long sbId, @Param("chassiId") Long chassiId);


}
