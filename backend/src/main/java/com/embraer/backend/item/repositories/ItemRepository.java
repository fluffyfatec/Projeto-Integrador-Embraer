package com.embraer.backend.item.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.item.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long>{

}
