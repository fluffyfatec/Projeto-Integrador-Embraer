package com.embraer.backend.serviceBulletin.repository;

import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceBulletinRepository extends JpaRepository<ServiceBulletin, Long>{

}
