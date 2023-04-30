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

import java.util.List;

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
    @Query("UPDATE Condition c SET c.sb4Id = :sb4Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb4Id(@Param("conditionId") Long conditionId, @Param("sb4Id") ServiceBulletin sb4);

    @Modifying
    @Query("UPDATE Condition c SET c.sb5Id = :sb5Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb5Id(@Param("conditionId") Long conditionId, @Param("sb5Id") ServiceBulletin sb5);

    @Modifying
    @Query("UPDATE Condition c SET c.sb6Id = :sb6Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb6Id(@Param("conditionId") Long conditionId, @Param("sb6Id") ServiceBulletin sb6);

    @Modifying
    @Query("UPDATE Condition c SET c.sb7Id = :sb7Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb7Id(@Param("conditionId") Long conditionId, @Param("sb7Id") ServiceBulletin sb7);

    @Modifying
    @Query("UPDATE Condition c SET c.sb8Id = :sb8Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb8Id(@Param("conditionId") Long conditionId, @Param("sb8Id") ServiceBulletin sb8);

    @Modifying
    @Query("UPDATE Condition c SET c.sb9Id = :sb9Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb9Id(@Param("conditionId") Long conditionId, @Param("sb9Id") ServiceBulletin sb9);

    @Modifying
    @Query("UPDATE Condition c SET c.sb10Id = :sb10Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb10Id(@Param("conditionId") Long conditionId, @Param("sb10Id") ServiceBulletin sb10);

    @Modifying
    @Query("UPDATE Condition c SET c.sb11Id = :sb11Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb11Id(@Param("conditionId") Long conditionId, @Param("sb11Id") ServiceBulletin sb11);

    @Modifying
    @Query("UPDATE Condition c SET c.sb12Id = :sb12Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb12Id(@Param("conditionId") Long conditionId, @Param("sb12Id") ServiceBulletin sb12);

    @Modifying
    @Query("UPDATE Condition c SET c.sb13Id = :sb13Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb13Id(@Param("conditionId") Long conditionId, @Param("sb13Id") ServiceBulletin sb13);

    @Modifying
    @Query("UPDATE Condition c SET c.sb14Id = :sb14Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb14Id(@Param("conditionId") Long conditionId, @Param("sb14Id") ServiceBulletin sb14);

    @Modifying
    @Query("UPDATE Condition c SET c.sb15Id = :sb15Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb15Id(@Param("conditionId") Long conditionId, @Param("sb15Id") ServiceBulletin sb15);

    @Modifying
    @Query("UPDATE Condition c SET c.sb16Id = :sb16Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb16Id(@Param("conditionId") Long conditionId, @Param("sb16Id") ServiceBulletin sb16);

    @Modifying
    @Query("UPDATE Condition c SET c.sb17Id = :sb17Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb17Id(@Param("conditionId") Long conditionId, @Param("sb17Id") ServiceBulletin sb17);

    @Modifying
    @Query("UPDATE Condition c SET c.sb18Id = :sb18Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb18Id(@Param("conditionId") Long conditionId, @Param("sb18Id") ServiceBulletin sb18);

    @Modifying
    @Query("UPDATE Condition c SET c.sb19Id = :sb19Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb19Id(@Param("conditionId") Long conditionId, @Param("sb19Id") ServiceBulletin sb19);

    @Modifying
    @Query("UPDATE Condition c SET c.sb20Id = :sb20Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb20Id(@Param("conditionId") Long conditionId, @Param("sb20Id") ServiceBulletin sb20);

    @Modifying
    @Query("UPDATE Condition c SET c.sb21Id = :sb21Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb21Id(@Param("conditionId") Long conditionId, @Param("sb21Id") ServiceBulletin sb21);

    @Modifying
    @Query("UPDATE Condition c SET c.sb22Id = :sb22Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb22Id(@Param("conditionId") Long conditionId, @Param("sb22Id") ServiceBulletin sb22);

    @Modifying
    @Query("UPDATE Condition c SET c.sb23Id = :sb23Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb23Id(@Param("conditionId") Long conditionId, @Param("sb23Id") ServiceBulletin sb23);

    @Modifying
    @Query("UPDATE Condition c SET c.sb24Id = :sb24Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb24Id(@Param("conditionId") Long conditionId, @Param("sb24Id") ServiceBulletin sb24);

    @Modifying
    @Query("UPDATE Condition c SET c.sb25Id = :sb25Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb25Id(@Param("conditionId") Long conditionId, @Param("sb25Id") ServiceBulletin sb25);

    @Modifying
    @Query("UPDATE Condition c SET c.sb26Id = :sb26Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb26Id(@Param("conditionId") Long conditionId, @Param("sb26Id") ServiceBulletin sb26);

    @Modifying
    @Query("UPDATE Condition c SET c.sb27Id = :sb27Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb27Id(@Param("conditionId") Long conditionId, @Param("sb27Id") ServiceBulletin sb27);

    @Modifying
    @Query("UPDATE Condition c SET c.sb28Id = :sb28Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb28Id(@Param("conditionId") Long conditionId, @Param("sb28Id") ServiceBulletin sb28);

    @Modifying
    @Query("UPDATE Condition c SET c.sb29Id = :sb29Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb29Id(@Param("conditionId") Long conditionId, @Param("sb29Id") ServiceBulletin sb29);

    @Modifying
    @Query("UPDATE Condition c SET c.sb30Id = :sb30Id WHERE c.conditionId = :conditionId")
    @Transactional
    void updateSb30Id(@Param("conditionId") Long conditionId, @Param("sb30Id") ServiceBulletin sb30);

    @Modifying
    @Query("DELETE FROM Condition c WHERE c.conditionId = :conditionId")
    @Transactional
    void deleteByConditionId(@Param("conditionId") Long conditionId);


    @Query("SELECT c FROM Condition c WHERE c.itemId.itemId = :itemId")
    Condition listAllByItemId(@Param("itemId") Long itemId);

    @Query("SELECT c FROM Condition c")
    List<Condition> listAllConditions();

}
