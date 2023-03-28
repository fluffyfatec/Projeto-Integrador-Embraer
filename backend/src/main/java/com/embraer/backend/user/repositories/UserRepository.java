package com.embraer.backend.user.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
