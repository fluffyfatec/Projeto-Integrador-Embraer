package com.embraer.backend.permission.repositories;

import com.embraer.backend.permission.entity.Permission;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermissionRepository extends JpaRepository<Permission, Long>{

}
