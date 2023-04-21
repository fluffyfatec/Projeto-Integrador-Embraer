package com.embraer.backend.conditionOperator.repository;

import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.conditionOperator.entity.ConditionOperator;
import com.embraer.backend.operator.entity.Operator;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ConditionOperatorRepository extends JpaRepository<ConditionOperator, Long> {

    @Modifying
    @Query("UPDATE ConditionOperator c SET c.operator1 = :operator1 WHERE c.condition = :conditionId")
    @Transactional
    void updateOperator1(@Param("conditionId") Long conditionId, @Param("operator1") Operator operator);

    @Modifying
    @Query("UPDATE ConditionOperator c SET c.operator2 = :operator2 WHERE c.condition = :conditionId")
    @Transactional
    void updateOperator2(@Param("conditionId") Long conditionId, @Param("operator2") Operator operator);

    @Modifying
    @Query("UPDATE ConditionOperator c SET c.operator3 = :operator3 WHERE c.condition = :conditionId")
    @Transactional
    void updateOperator3(@Param("conditionId") Long conditionId, @Param("operator3") Operator operator);

    @Modifying
    @Query("UPDATE ConditionOperator c SET c.operator4 = :operator4 WHERE c.condition = :conditionId")
    @Transactional
    void updateOperator4(@Param("conditionId") Long conditionId, @Param("operator4") Operator operator);

    @Modifying
    @Query("UPDATE ConditionOperator c SET c.operator5 = :operator5 WHERE c.condition = :conditionId")
    @Transactional
    void updateOperator5(@Param("conditionId") Long conditionId, @Param("operator5") Operator operator);

    @Modifying
    @Query("DELETE FROM ConditionOperator c WHERE c.condition = :conditionId")
    @Transactional
    void deleteByCondition(@Param("conditionId") Long conditionId);

    @Query("SELECT c FROM ConditionOperator c WHERE c.condition = :conditionId")
    ConditionOperator listAllByCondition(@Param("conditionId") Long conditionId);

}

