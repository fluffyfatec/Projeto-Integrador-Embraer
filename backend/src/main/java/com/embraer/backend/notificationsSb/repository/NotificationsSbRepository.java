package com.embraer.backend.notificationsSb.repository;

import com.embraer.backend.notificationsSb.entity.NotificationsSb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationsSbRepository extends JpaRepository<NotificationsSb, Long> {

    @Query("SELECT n FROM NotificationsSb n, Item i WHERE n.itemId.itemId = i.itemId AND i.status = 'A' AND " +
            "n.booleanAdmin = 1")
    List<NotificationsSb> findAllAdmin();

    @Query("SELECT n FROM NotificationsSb n, Item i WHERE n.itemId.itemId = i.itemId AND i.status = 'A' AND " +
            "n.owner = :owner AND n.booleanAdmin = 0")
    List<NotificationsSb> findAllEditor(@Param("owner") String ownerName);


}
