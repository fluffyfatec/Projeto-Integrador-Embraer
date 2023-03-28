package com.embraer.backend.formula.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.formula.entity.Formula;

@Repository
public interface FormulaRepository extends JpaRepository<Formula, Long>{

}
