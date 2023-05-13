package com.embraer.backend.user.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.embraer.backend.user.entity.User;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    @Transactional
    User findByUserUsername(String username);

    @Query("SELECT userId FROM User WHERE userUsername = :userName")
    Long getUserIdByUserName(@Param("userName") String userName);

    @Query("SELECT userUsername FROM User WHERE userId = :userId")
    String getUserNameByUserId(@Param("userId") Long userId);

    @Query("SELECT u FROM User u WHERE u.permissionId.permissionId = 2")
    List<User> getAllEditorUsers();

    @Query("SELECT u FROM User u WHERE u.permissionId.permissionId = 3")
    List<User> getAllPilotUsers();

}
