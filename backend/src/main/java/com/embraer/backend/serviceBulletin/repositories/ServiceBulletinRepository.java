package com.embraer.backend.serviceBulletin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

@Repository
public interface ServiceBulletinRepository extends JpaRepository<ServiceBulletin, Long>{

}
