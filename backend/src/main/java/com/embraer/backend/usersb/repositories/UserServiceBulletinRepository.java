package com.embraer.backend.usersb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.usersb.entity.UserServiceBulletin;

@Repository
public interface UserServiceBulletinRepository extends JpaRepository<UserServiceBulletin, Long>{
	
}
