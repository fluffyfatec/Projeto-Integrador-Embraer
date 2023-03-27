package com.embraer.backend.condition.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ch.qos.logback.core.joran.conditional.Condition;

@Repository
public interface conditionRepository extends JpaRepository<Condition, Long> {

}
