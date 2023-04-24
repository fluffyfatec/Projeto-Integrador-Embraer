package com.embraer.backend.operator.repository;

import com.embraer.backend.operator.entity.Operator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OperatorRepository extends JpaRepository<Operator, Long> {

    @Query("SELECT o.operatorId FROM Operator o WHERE o.operatorType = :operatorType")
    Long findOperatorIdByOperatorType(@Param("operatorType") String operatorType);

    @Query("SELECT o.operatorType FROM Operator o WHERE o.operatorId = :operatorId")
    String findOperatorTypeByOperatorId(@Param("operatorId") Long operatorId);

}