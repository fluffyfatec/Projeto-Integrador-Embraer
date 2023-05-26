package com.embraer.backend.item.service;

import com.embraer.backend.item.dto.ItemDTO;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.log.entity.Log;
import com.embraer.backend.log.repository.LogRepository;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    LogRepository logRepository;

    @Autowired
    UserSession userSession;


    public List<ItemDTO> listAllItems() {

        List<ItemDTO> listItemDTO = new ArrayList<>();
        List<Item> items = itemRepository.findAll();


        Optional<Item> itemToRemove = items.stream()
                .filter(item -> item.getItemId().equals(469L))
                .findFirst();

        itemToRemove.ifPresent(items::remove);


        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        for (Item item : items) {
            ItemDTO itemDTO = new ItemDTO();

            String formatedDate = dateFormat.format(item.getItemDtregister());

            itemDTO.setItemId(item.getItemId());
            itemDTO.setItemName(item.getItemName());
            itemDTO.setItemDtregister(formatedDate);
            itemDTO.setStatus(item.getStatus());
            listItemDTO.add(itemDTO);
        }

        return listItemDTO;
    }

    @Transactional
    public void updateItemStatus(Long itemId, String status) {

        try {


            if (Objects.equals(status, "Active")) {
                itemRepository.updateItemStatus("I", itemId);

                // Log generation
                Log newLog = new Log();

                newLog.setUsername(userSession.getUserAuthentication().getUsername());
                newLog.setRole(userSession.getUserAuthentication().getRole());
                newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
                newLog.setOperation("Update item " + itemRepository.findItemNameByItemId(itemId) + " Status");
                newLog.setOldRegister("Active");
                newLog.setNewRegister("Inactive");
                newLog.setChassis(null);
                newLog.setBooleanAdmin(1);

                logRepository.saveAndFlush(newLog);

            }

            if (Objects.equals(status, "Inactive")) {

                itemRepository.updateItemStatus("A", itemId);

                // Log generation
                Log newLog = new Log();

                newLog.setUsername(userSession.getUserAuthentication().getUsername());
                newLog.setRole(userSession.getUserAuthentication().getRole());
                newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
                newLog.setOperation("Update item " + itemRepository.findItemNameByItemId(itemId) + " Status");
                newLog.setOldRegister("Inactive");
                newLog.setNewRegister("Active");
                newLog.setChassis(null);
                newLog.setBooleanAdmin(1);

                logRepository.saveAndFlush(newLog);


            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }



}
