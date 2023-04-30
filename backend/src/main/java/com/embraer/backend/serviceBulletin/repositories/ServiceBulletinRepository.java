package com.embraer.backend.serviceBulletin.repositories;

import java.util.List;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceBulletinRepository extends JpaRepository<ServiceBulletin, Long>{
		
	ServiceBulletin findByServiceBulletinNameAndServiceBulletinPart(String bulletinName, String bulletinPart);

	@Query("SELECT sb.serviceBulletinId FROM ServiceBulletin sb WHERE sb.serviceBulletinName = :sbName AND sb.serviceBulletinPart = :sbPartService")
	Long findServiceBulletinIdBySbNameAndSbPartService(@Param("sbName") String sbName, @Param("sbPartService") String sbPartService);


	@Query("SELECT sb.serviceBulletinName FROM ServiceBulletin sb WHERE sb.serviceBulletinId = :sbId")
	@Cacheable("findSbNameByServiceBulletinId")
	String findSbNameByServiceBulletinId(@Param("sbId") Long sbId);

	@Query("SELECT sb.serviceBulletinPart FROM ServiceBulletin sb WHERE sb.serviceBulletinId = :sbId")
	String findSbPartByServiceBulletinId(@Param("sbId") Long sbId);




}

