package com.embraer.backend.user.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.embraer.backend.user.entity.User;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    @Transactional
    User findByUserUsername(String username);

    @Query("SELECT userId FROM User WHERE userUsername = :userName")
    Long getUserIdByUserName(@Param("userName") String userName);


}
