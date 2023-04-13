package com.embraer.backend.condition.repositories;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.formula.entity.Formula;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import com.embraer.backend.condition.entity.Condition;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface conditionRepository extends JpaRepository<Condition, Long> {

    @Modifying
    @Query("UPDATE Condition c SET c.formulaId = :formulaId WHERE c.conditionId = :conditionId")
    void updateFormulaId(@Param("conditionId") Long conditionId, @Param("formulaId") Formula formulaId);

    @Modifying
    @Query("UPDATE Condition c SET c.chassisBiggerThenId = :chassisBiggerThenId WHERE c.conditionId = :conditionId")
    void updateChassisBiggerThen(@Param("conditionId") Long conditionId, @Param("chassisBiggerThenId") Chassis chassis);

    @Modifying
    @Query("UPDATE Condition c SET c.sb1Id = :sb1Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb1Id(@Param("conditionId") Long conditionId, @Param("sb1Id") ServiceBulletin sb1);

    @Modifying
    @Query("UPDATE Condition c SET c.sb2Id = :sb2Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb2Id(@Param("conditionId") Long conditionId, @Param("sb2Id") ServiceBulletin sb2);

    @Modifying
    @Query("UPDATE Condition c SET c.sb3Id = :sb3Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb3Id(@Param("conditionId") Long conditionId, @Param("sb3Id") ServiceBulletin sb3);

    @Modifying
    @Query("DELETE FROM Condition c WHERE c.conditionId = :conditionId")
    @Transactional
    void deleteByConditionId(@Param("conditionId") Long conditionId);


    @Query("SELECT c FROM Condition c WHERE c.itemId.itemId = :itemId")
    Condition listAllByItemId(@Param("itemId") Long itemId);

}
