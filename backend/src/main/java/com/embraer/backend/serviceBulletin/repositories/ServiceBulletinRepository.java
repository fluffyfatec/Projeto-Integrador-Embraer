package com.embraer.backend.serviceBulletin.repositories;

import java.util.List;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceBulletinRepository extends JpaRepository<ServiceBulletin, Long>{
		
	ServiceBulletin findByServiceBulletinNameAndServiceBulletinPart(String bulletinName, String bulletinPart);
}

