package com.embraer.backend.item.service;

import com.embraer.backend.item.dto.ItemDTO;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.item.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;


    public List<ItemDTO> listAllItems() {

        List<ItemDTO> listItemDTO = new ArrayList<>();
        List<Item> items = itemRepository.findAll();

        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        for (Item item : items) {
            ItemDTO itemDTO = new ItemDTO();

            String formatedDate = dateFormat.format(item.getItemDtregister());

            itemDTO.setItemId(item.getItemId());
            itemDTO.setItemName(item.getItemName());
            itemDTO.setItemDtregister(formatedDate);
            listItemDTO.add(itemDTO);
        }

        return listItemDTO;
    }



}
