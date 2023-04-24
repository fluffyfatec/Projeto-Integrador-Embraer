package com.embraer.backend.useritem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.embraer.backend.useritem.entity.UserItem;

@Repository
public interface UserItemRepository extends JpaRepository<UserItem, Long>{

}
