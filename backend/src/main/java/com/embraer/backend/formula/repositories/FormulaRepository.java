package com.embraer.backend.formula.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.embraer.backend.formula.entity.Formula;

@Repository
public interface FormulaRepository extends JpaRepository<Formula, Long>{

    @Query("SELECT f.formulaId FROM Formula f WHERE f.formulaDescription = :formulaDesc")
    Long findFormulaIdByFormulaDesc(@Param("formulaDesc") String formulaDesc);

    @Query("SELECT f.formulaDescription FROM Formula f WHERE f.formulaId = :formulaId")
    String findFormulaDescByFormulaId(@Param("formulaId") Long formulaId);

}
