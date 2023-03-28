package com.embraer.backend.condition.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.condition.entity.Condition;

@Repository
public interface conditionRepository extends JpaRepository<Condition, Long> {

}
