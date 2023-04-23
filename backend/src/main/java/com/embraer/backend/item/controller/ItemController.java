package com.embraer.backend.item.controller;

import com.embraer.backend.item.dto.ItemDTO;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.item.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ItemController {


    @Autowired
    private ItemService itemService;


    @CrossOrigin
    @GetMapping("/list-all/items")
    public List<ItemDTO> listAllItems() {
        return itemService.listAllItems();
    }


    @CrossOrigin
    @GetMapping("/update-item-status/{itemId}/{status}")
    public ResponseEntity<?> updateItemStatus(@PathVariable("itemId") Long itemId,
                                              @PathVariable("status") String status) {
        try {
            itemService.updateItemStatus(itemId, status);

            return ResponseEntity.ok("SUCCESS");
        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.ok("NOT SUCCESS");
        }

    }




}
