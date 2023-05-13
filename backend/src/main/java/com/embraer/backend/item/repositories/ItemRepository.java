package com.embraer.backend.item.repositories;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.item.entity.Item;
import org.springframework.transaction.annotation.Transactional;

public interface ItemRepository extends JpaRepository<Item, Long>{

    @Query("SELECT i.itemId FROM Item i WHERE i.itemName = :itemName")
    Long findItemIdByItemName(@Param("itemName") String itemName);

    @Query("SELECT i.itemName FROM Item i WHERE i.itemId = :itemId")
    @Cacheable("findItemNameItemId")
    String findItemNameByItemId(@Param("itemId") Long itemId);

    @Modifying
    @Query("DELETE FROM Item i WHERE i.itemId = :itemId")
    @Transactional
    void deleteByItemId(@Param("itemId") Long itemId);

    @Modifying
    @Query("UPDATE Item i SET i.status = :status WHERE i.itemId = :itemId")
    @Transactional
    void updateItemStatus(@Param("status") String status, @Param("itemId") Long itemId);

    @Query("SELECT i FROM Item i WHERE i.itemName = :itemName AND i.status = 'A'")
    @Cacheable("checkIfItemIsActive")
    Item checkIfItemIsActive(@Param("itemName") String itemName);

}
