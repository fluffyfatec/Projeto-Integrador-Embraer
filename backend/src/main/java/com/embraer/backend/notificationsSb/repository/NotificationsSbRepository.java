package com.embraer.backend.notificationsSb.repository;

import com.embraer.backend.notificationsSb.entity.NotificationsSb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationsSbRepository extends JpaRepository<NotificationsSb, Long> {

}
