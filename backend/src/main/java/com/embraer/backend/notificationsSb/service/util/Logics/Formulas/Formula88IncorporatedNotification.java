package com.embraer.backend.notificationsSb.service.util.Logics.Formulas;

import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import com.embraer.backend.notificationsSb.entity.NotificationsSb;
import com.embraer.backend.notificationsSb.repository.NotificationsSbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Objects;

@Service
public class Formula88IncorporatedNotification {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    NotificationsSbRepository notificationsSbRepository;

    @Autowired
    ChassisUserOwnerRepository chassisUserOwnerRepository;



    public boolean formula88ListIncorporated(Condition condition, Long chassis, Long userId, Long sbId, String operation) {

        if (Objects.equals(chassiServiceBulletinRepository
                .findSbStatusBySbId((condition.getSb1IdLong()), chassis), "INCORPORATED") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb2IdLong()), chassis), "INCORPORATED") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb3IdLong()), chassis), "INCORPORATED") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb4IdLong()), chassis), "INCORPORATED") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb5IdLong()), chassis), "INCORPORATED") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb6IdLong()), chassis), "INCORPORATED")) {

            NotificationsSb newNotification = new NotificationsSb();
            newNotification.setUserLong(userId);
            newNotification.setSbLong(sbId);
            newNotification.setChassisLong(chassis);
            newNotification.setOperation(operation);
            newNotification.setStatusChange(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis));
            newNotification.setDtregister(new Timestamp(System.currentTimeMillis()));
            newNotification.setItemIdLong(condition.getItemIdLong());
            newNotification.setBooleanAdmin(0);
            newNotification.setOwner(chassisUserOwnerRepository.getChassisOwnerNameByChassisId(chassis));
            newNotification.setItemStatus("INCORPORATED");
            notificationsSbRepository.saveAndFlush(newNotification);

            NotificationsSb newNotificationAdmin = new NotificationsSb();
            newNotificationAdmin.setUserLong(userId);
            newNotificationAdmin.setSbLong(sbId);
            newNotificationAdmin.setChassisLong(chassis);
            newNotificationAdmin.setOperation(operation);
            newNotificationAdmin.setStatusChange(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis));
            newNotificationAdmin.setDtregister(new Timestamp(System.currentTimeMillis()));
            newNotificationAdmin.setItemIdLong(condition.getItemIdLong());
            newNotificationAdmin.setBooleanAdmin(1);
            newNotificationAdmin.setOwner(chassisUserOwnerRepository.getChassisOwnerNameByChassisId(chassis));
            newNotificationAdmin.setItemStatus("INCORPORATED");
            notificationsSbRepository.saveAndFlush(newNotificationAdmin);

            return true;
        }

        return false;
    }

}
