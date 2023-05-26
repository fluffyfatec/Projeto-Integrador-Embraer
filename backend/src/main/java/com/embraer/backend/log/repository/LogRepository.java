package com.embraer.backend.log.repository;

import com.embraer.backend.log.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LogRepository extends JpaRepository<Log, Long> {

    @Query("SELECT l FROM Log l, ChassisUserOwner o WHERE l.chassis = o.chassis.chassiId AND " +
            "o.user.userId = :userId AND l.booleanAdmin = 0")
    List<Log> findAllEditor(@Param("userId") Long userId);

}
