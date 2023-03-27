package com.embraer.backend.chassisUser.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.chassisUser.entity.ChassisUser;

@Repository
public interface chassisUserRepository extends JpaRepository<ChassisUser, String>{

}
