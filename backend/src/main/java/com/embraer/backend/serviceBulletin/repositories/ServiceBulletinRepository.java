package com.embraer.backend.serviceBulletin.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

@Repository
public interface ServiceBulletinRepository extends JpaRepository<ServiceBulletin, Long>{
	
	List<ServiceBulletin> findByChassiId(Chassis chassi);

}
