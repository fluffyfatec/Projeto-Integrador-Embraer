package com.embraer.backend.notificationsSb.service;


import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.notificationsSb.dto.NotificationSbDTO;
import com.embraer.backend.notificationsSb.entity.NotificationsSb;
import com.embraer.backend.notificationsSb.repository.NotificationsSbRepository;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class NotificationSbService {

    @Autowired
    NotificationsSbRepository notificationsSbRepository;

    @Autowired
    UserSession userSession;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ServiceBulletinRepository serviceBulletinRepository;

    @Autowired
    ItemRepository itemRepository;


    public List<NotificationSbDTO> notificationsAdm() {

        List<NotificationSbDTO> listDto = new ArrayList<>();
        List<NotificationsSb> notifications = notificationsSbRepository.findAllAdmin();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        for (NotificationsSb notifi : notifications) {

            NotificationSbDTO dto = new NotificationSbDTO();

            String formatedDate = dateFormat.format(notifi.getDtregister());

            dto.setId(notifi.getId());
            dto.setUser_modified(userRepository.getUserNameByUserId(notifi.getUserLong()));
            dto.setUser_owner(notifi.getOwner());
            dto.setChassis_associate(notifi.getChassisLong());
            dto.setSb_name(serviceBulletinRepository.findSbNameByServiceBulletinId(notifi.getSbLong()));
            dto.setSb_part(serviceBulletinRepository.findSbPartByServiceBulletinId(notifi.getSbLong()));
            dto.setOperation(notifi.getOperation());
            dto.setSb_status_change(notifi.getStatusChange());
            dto.setItem(itemRepository.findItemNameByItemId(notifi.getItemIdLong()));
            dto.setItem_status(notifi.getItemStatus());
            dto.setDate_register(formatedDate);

            listDto.add(dto);

        }


        return listDto;

    }


    public List<NotificationSbDTO> notificationsEditor() {

        List<NotificationSbDTO> listDto = new ArrayList<>();
        List<NotificationsSb> notifications = notificationsSbRepository.findAllEditor(userSession.getUserAuthentication().getUsername());

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        for (NotificationsSb notifi : notifications) {

            NotificationSbDTO dto = new NotificationSbDTO();

            String formatedDate = dateFormat.format(notifi.getDtregister());

            dto.setId(notifi.getId());
            dto.setUser_modified(userRepository.getUserNameByUserId(notifi.getUserLong()));
            dto.setUser_owner(notifi.getOwner());
            dto.setChassis_associate(notifi.getChassisLong());
            dto.setSb_name(serviceBulletinRepository.findSbNameByServiceBulletinId(notifi.getSbLong()));
            dto.setSb_part(serviceBulletinRepository.findSbPartByServiceBulletinId(notifi.getSbLong()));
            dto.setOperation(notifi.getOperation());
            dto.setSb_status_change(notifi.getStatusChange());
            dto.setItem(itemRepository.findItemNameByItemId(notifi.getItemIdLong()));
            dto.setItem_status(notifi.getItemStatus());
            dto.setDate_register(formatedDate);

            listDto.add(dto);

        }


        return listDto;

    }


    @Transactional
    public void deleteNotification(Long id) {

        try {

            notificationsSbRepository.deleteById(id);


        } catch (Exception e) {

            e.printStackTrace();

        }

    }


}
